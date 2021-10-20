import React from 'react';
import cardimg from '../../images/card-pic.png'
import markimg from '../../images/mark.svg'
import markDeleteImg from '../../images/deleteMark.svg'
import {timeCalc} from '../../utils/utils';
import { Redirectm } from 'react-router';
import { Link } from 'react-router-dom';

export default class Card extends React.Component{
    constructor(props){
        super(props);
    }
    saveCard(e){
        e.stopPropagation();
        let card = e.target.closest('.card');
        if(this.props.status){
            if(card.classList.contains('card_active')){
                this.props.deleteMovie(card.id)
            }
            else{
                this.props.saveMovie(
                this.props.info.country, 
                this.props.info.director, 
                this.props.info.duration, 
                this.props.info.year, 
                this.props.info.description, 
                'https://api.nomoreparties.co' + this.props.info.image.url, 
                this.props.info.trailerLink, 'https://api.nomoreparties.co' + 
                this.props.info.image.formats.thumbnail.url, 
                this.props.info.id, 
                this.props.info.nameRU, 
                this.props.info.nameEN).then(res =>{
                    card.setAttribute('id', res);
                })
            }
            card.classList.toggle('card_active');
        }
        else{
            this.props.deleteMovie(card.id);
        }
    }
    deletedMovie(e){
        e.stopPropagation();
        let card = e.target.closest('.card');
        this.props.deleteMovie(card.id);
    }
    render(){
        return (
            <section className="card" id={this.props.id} onClick={(e) =>{
                window.location.href = this.props.trailer;
                }} >
                <div className="card__img">
                    <img className="card__img-item" src={this.props.img} alt="Изображение на карточке"/>
                    <span className={this.props.status ? "card__save-message" : "card__save-message_disactive"} onClick={this.saveCard.bind(this)}>Сохранить</span>
                    <span className={this.props.status ? "card__mark" : "card__mark__hidden"}>
                        <img src={markimg} alt="Значок сохранено"></img>
                    </span>
                    <span className={this.props.status ? "card__mark-delete__hidden" : "card__mark-delete"} onClick={this.deletedMovie.bind(this)}>
                        <img src={markDeleteImg} alt="Значок удалить"></img>
                    </span>
                    
                </div>
                
                <div className="card__description">
                    <a href={this.props.trailer} className="card__description-text">{this.props.title}</a>
                    <span className="card__description-time">{timeCalc(this.props.duration)[0] +"ч " + timeCalc(this.props.duration)[1] +"м"}</span>
                </div>
            </section>
        )
    }
}