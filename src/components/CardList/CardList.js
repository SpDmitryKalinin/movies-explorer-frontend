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
        }
    }

    componentDidMount(){
        this.setState({
            countMovies: checkDevice()[0],
            step: checkDevice()[1],
        })
        if(localStorage.getItem("movies")){
            
        }
    }

    componentDidUpdate(){
        if(this.props.status === true){
            let copySortArray = this.props.movies;
            let copyPrevSortArray = this.state.prevSortArray;
            if(copySortArray.length!==0){
                if(copyPrevSortArray.length === 0 || !diffArrays(copySortArray, copyPrevSortArray) || this.state.prevCount!==this.state.countMovies){
                    this.setState({
                        prevSortArray: copySortArray,
                        prevCount: this.state.countMovies
                    })
                    this.cutArray();
                }
            }
        }
    }

    cutArray(){
        this.setState({
            viewMovies: this.props.movies.slice(0, this.state.countMovies) 
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
                        this.state.viewMovies.length !== 0 && this.props.status ?
                        this.state.viewMovies.map((item =>{
                            return (<Card 
                                status={this.props.status}
                                title={item.nameRU}
                                duration = {item.duration}
                                img = {'https://api.nomoreparties.co' + item.image.url}
                            />)
                        }))
                        :
                        ""
                    }
                </div>
                {
                    this.state.countMovies >= this.props.movies.length ? "" : <button className="card-list__more-button" onClick={this.moreMovies.bind(this)}>Ещё</button>
                }
                
            </section>
        )
    }
}