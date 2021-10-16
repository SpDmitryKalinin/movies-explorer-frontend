import React from 'react';
import { CurrentUserContext } from '../../currentUserContext/currentUserContext';
import Header from '../Header/Header';

export default class Profile extends React.Component{
    static contextType = CurrentUserContext;
    constructor(props){
        super(props)
        this.state ={
            name: '',
            email: '',
        }
    }
    changeEmail(e){
        this.setState({
            email: e.target.value
        })
    }
    changeName(e){
        this.setState({
            name: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state.name, this.state.email);
    }

    saveMovies(e){
        
    }


    render(){
        return (
            <section className="profile-page"> 
                <div class="profile">
                    <div class="profile__container">
                        <h1 class="profile__title">{this.context.name}</h1>
                        <div class="profile__inputs">
                            <form onSubmit={(e) => this.props.onSubmit(e, this.state.name, this.state.email)}>
                                <div class="profile__input-container profile__input-container-name">
                                    <p class="profile__input-label-text">Имя</p>
                                    <input class="profile__input" type="text" id="name-prof" onChange={this.changeName.bind(this)} placeholder={this.context.name} minLength="8"  required/>
                                    <label class="profile__input-label" for="name"></label>
                                </div>

                                <div class="profile__line"></div>
                                
                                <div class="profile__input-container">
                                    <p class="profile__input-label-text">E-mail</p>
                                    <input class="profile__input" type="email" id="email" onChange={this.changeEmail.bind(this)} placeholder={this.context.email} required/>
                                    <label class="profile__input-label" for="email"></label>
                                </div>
                                <div class="profile__buttons">
                                    <button class="profile__button-redact" type="submit">Редактировать</button>
                                    <button class="profile__button-exit" type="button" onClick={this.props.logout}>Выйти из аккаунта</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
            
    }
}