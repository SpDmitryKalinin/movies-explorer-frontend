import React from 'react';

//components

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import CardList from '../CardList/CardList';


export default class Movies extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.loa)
    }
    
    render(){
        return (
            <section className="page-movies">
                <Header/>
                <SearchForm onSubmit = {this.props.onSubmit}/>
                <CardList status={this.props.status} movies={this.props.movies} loadingStatus ={this.props.loading}/>
                <Footer/>
            </section>
        )
    }
}