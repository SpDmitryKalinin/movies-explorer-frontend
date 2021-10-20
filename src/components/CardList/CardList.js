import React from 'react';
import Card from '../Card/Card';
import {diffArrays, checkDevice} from "../../utils/utils";
import Preloader from './../Preloader/Preloader';

export default class CardList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            viewMovies: [],
            countMovies: 12,
            prevCount: 12,
            step: 3,
            prevSortArray: [],
            loading: false,
            movies: [],
        }
    }

    componentDidMount(){
        window.addEventListener('resize', ()=>{
            this.changeCountCard();
        })
        this.changeCountCard();
    }

    componentDidUpdate(){
        let copySortArray = this.state.movies;
        if(this.state.movies !== this.props.movies){
            this.setState({
                movies: this.props.movies
            })
        }
        let copyPrevSortArray = this.state.prevSortArray;
        if(!diffArrays(copySortArray, copyPrevSortArray) || this.state.prevCount!==this.state.countMovies){
            this.setState({
                prevSortArray: copySortArray,
                prevCount: this.state.countMovies
            })
            this.cutArray();
        }        
    }

    changeCountCard(){
        this.setState({
            countMovies: checkDevice()[0],
            step: checkDevice()[1],
        })
    }

    cutArray(){
        this.setState({
            viewMovies: this.state.movies.slice(0, this.state.countMovies) 
        })
    }

    moreMovies(){
        this.setState({
            countMovies: this.state.countMovies + this.state.step
        })
    }

    preloaderStatus(){
        this.setState({loading: !this.state.loading})
    }
    

    render(){
        return (
            <section className="card-list-container">
                <div className="card-list">
                    {
                        this.props.loadingStatus ? <Preloader/> :
                        (this.state.viewMovies.length !== 0 ?
                        this.state.viewMovies.map((item =>{
                            return (<Card 
                                status={this.props.status}
                                title={item.nameRU}
                                duration = {item.duration}
                                img = {this.props.status ?'https://api.nomoreparties.co' + item.image.url : item.image}
                                trailer = {this.props.status ? item.trailerLink : item.trailer}
                                info = {item}
                                saveMovie ={this.props.saveMovie}
                                deleteMovie ={this.props.deleteMovie}
                                id = {!this.props.status ? item._id : ""}
                            />)
                        }))
                        :
                        this.props.searchStatus ? <p class="card-list__nothink">Ничего не найдено</p> : ""
                        )
                    }
                </div>
                {
                    this.state.countMovies >= this.state.movies.length? "" : <button className="card-list__more-button" onClick={this.moreMovies.bind(this)}>Ещё</button>
                }
            </section>
        )
    }
}