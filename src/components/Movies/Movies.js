import React from 'react';

//components

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import CardList from '../CardList/CardList';


export default class Movies extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <section className="page-movies">
                <SearchForm onSubmit = {this.props.onSubmit} status ={this.props.status}/>
                <CardList status={this.props.status} movies={this.props.movies} loadingStatus ={this.props.loading} saveMovie={this.props.saveMovie} deleteMovie = {this.props.deleteMovie}/>
                <Footer/>
            </section>
        )
    }
}