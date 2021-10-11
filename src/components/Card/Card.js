import React from 'react';
import cardimg from '../../images/card-pic.png'
import markimg from '../../images/mark.svg'
import markDeleteImg from '../../images/deleteMark.svg'


export default class Card extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.status)
    }
    saveCard(e){
        let card = e.target.closest('.card');
        card.classList.toggle('card_active');
        console.log(card);
    }
    render(){
        return (
            <section className="card" onClick={(e) =>{
                this.saveCard(e);
                }} >
                <div className="card__img">
                    <img className="card__img-item" src={cardimg} alt="Изображение на карточке"/>
                    <span className={this.props.status ? "card__save-message" : "card__save-message_disactive"}>Сохранить</span>
                    <span className={this.props.status ? "card__mark" : "card__mark__hidden"}>
                        <img src={markimg} alt="Значок сохранено"></img>
                    </span>
                    <span className={this.props.status ? "card__mark-delete__hidden" : "card__mark-delete"}>
                        <img src={markDeleteImg} alt="Значок удалить"></img>
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