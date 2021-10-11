import React from 'react';
import Header from '../Header/Header';

export default class Profile extends React.Component{
    render(){
        return (
            <section className="profile-page">
                <Header/>
                <div class="profile">
                    <div class="profile__container">
                        <h1 class="profile__title">Привет, Виталий!</h1>
                        <div class="profile__inputs">
                            <form>
                                <div class="profile__input-container profile__input-container-name">
                                    <p class="profile__input-label-text">Имя</p>
                                    <input class="profile__input" type="text" id="name-prof" placeholder="Виталий"/>
                                    <label class="profile__input-label" for="name"></label>
                                </div>

                                <div class="profile__line"></div>
                                
                                <div class="profile__input-container">
                                    <p class="profile__input-label-text">E-mail</p>
                                    <input class="profile__input" type="email" id="email" placeholder="pochta@yandex.ru"/>
                                    <label class="profile__input-label" for="email"></label>
                                </div>
                            </form>
                        </div>
                        <div class="profile__buttons">
                            <button class="profile__button-redact" type="button">Редактировать</button>
                            <button class="profile__button-exit" type="button">Выйти из аккаунта</button>
                        </div>
                    </div>
                </div>
            </section>
        )
            
    }
}