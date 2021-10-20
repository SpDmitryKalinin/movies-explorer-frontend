import React from 'react';

//components

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import CardList from '../CardList/CardList';


export default class Movies extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            searchStatus: false
        }
    }

    setSearchStatus(){
        this.setState({
            searchStatus: true,
        })
    }
    
    render(){
        return (
            <section className="page-movies">
                <SearchForm updateSearch ={this.setSearchStatus.bind(this)} onSubmit = {this.props.onSubmit} status ={this.props.status}/>
                <CardList searchStatus ={this.state.searchStatus} status={this.props.status} movies={this.props.movies} loadingStatus ={this.props.loading} saveMovie={this.props.saveMovie} deleteMovie = {this.props.deleteMovie}/>
                <Footer/>
            </section>
        )
    }
}