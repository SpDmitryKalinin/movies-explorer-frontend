import React from 'react';
import cardimg from '../../images/card-pic.png'
import markimg from '../../images/mark.svg'


export default class Card extends React.Component{
    render(){
        return (
            <section className="card">
                <div className="card__img">
                    <img className="card__img-item" src={cardimg}/>
                    <span className="card__save-message">Сохранить</span>
                    <span className="card__mark">
                        <img src={markimg}></img>
                    </span>
                </div>
                
                <div className="card__description">
                    <p className="card__description-text">33 слова о дизайне</p>
                    <span className="card__description-time">1ч 17м</span>
                </div>
            </section>
        )
    }
}