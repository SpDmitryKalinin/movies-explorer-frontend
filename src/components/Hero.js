import React from 'react';
import hero from '../images/hero.png'

export default class Header extends React.Component{
    render(){
        return (
            <section className="hero">
                <div className="hero__info">
                    <h1 className="hero__title">Учебный проект студента факультета<br/> Веб-разработки.</h1>
                    <p className="hero__caption">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <button className="hero__button">Узнать больше</button>
                </div>
                <div className="hero__img">
                    <img src={hero} alt="Планета из надписей web"></img>
                </div>
            </section>
           
        )
    }
}