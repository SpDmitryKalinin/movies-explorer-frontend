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
                <Header/>
                <SearchForm/>
                <CardList status={this.props.status}/>
                <Footer/>
            </section>
        )
    }
}