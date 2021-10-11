import React from 'react';
import logo from '../../images/logo.svg'
import {Link, withRouter } from 'react-router-dom'; 

export default class Form extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return (
            <section className="form-page">
                <div className="form-container">
                    <img className="form-container__logo" src={logo} alt="Логотип"/>
                    <h2 className="form-container__title">{this.props.title}</h2>
                    <form className="form">
                        <div className="form__inputs">
                            <div className={`${this.props.nameStatus ? "form__input-name" : "form__input-name_disabled"}`}>
                                <p className="form__input-label-text">Имя</p>
                                <input className="form__name-input form__input" type="text" id="name" name="name" placeholder="Виталий" required/>
                                <label className="form__name-input-label"></label>
                            </div>
                            
                            <p className="form__input-label-text">E-mail</p>
                            <input className="form__email-input form__input" type="email" id="email" name="email" placeholder="pochta@yandex.ru" required/>
                            <label className="form__email-input-label"></label>

                            <p className="form__input-label-text">Пароль</p>
                            <input className="form__password-input form__input" type="password" id="password" name="password" placeholder="* * * * * * * * *" required/>
                            <label className="form__password-input-label"></label>
                            <p className="form__password-error">Что-то пошло не так</p>
                        </div>

                        <div className="form__button-container">
                            <button className="form__button" type="submit">{this.props.textButton}</button>
                        </div>

                        <div className="form__form-footer-container">
                            <p className="form__form-footer-text">{this.props.caption}</p>
                            <Link to={this.props.link}>
                                <button className="form__form-footer-button">{this.props.textLink}</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}