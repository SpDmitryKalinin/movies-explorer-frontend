import React from 'react';
import Card from '../Card/Card';

export default class CardList extends React.Component{
    render(){
        return (
            <section className="card-list-container">
                <div className="card-list">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <button className="card-list__more-button">Ещё</button>
            </section>
        )
    }
}