import React from 'react';
import logo from '../../images/logo.svg'
import {Link, withRouter } from 'react-router-dom'; 
const { isEmail } = require('validator');

//Продолжить здесь

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            login: '',
            password: '',
            name: '',
            validLogin: false,
            validPassword: false,
            validName: false,
            allValidation: false
        }
    }

    validation(input){
        if(input.validationMessage === ''){
            input.nextSibling.setAttribute("style", 'display:none')
            input.removeAttribute("style", 'color:#EE3465;')
        }
        else{
            input.setAttribute("style", 'color:#EE3465;')
            input.nextSibling.textContent = input.validationMessage;
        }
    }

    changeLogin(e){
        this.validation(e.target);
        this.setState({
            login: e.target.value
        })
    }
    changePassword(e){
        this.validation(e.target);
        this.setState({
            password: e.target.value
        })
    }
    changeName(e){
        this.validation(e.target);
        this.setState({
            name: e.target.value
        })
    }

    allValidation(){

    }

    render(){
        let nameInput;
        if(this.props.nameStatus){
            nameInput = (
                <div className="form__input-name">
                    <p className="form__input-label-text">Имя</p>
                    <input
                        minLength="8"
                        onChange={this.changeName.bind(this)} 
                        value={this.state.name || ""}  
                        className="form__name-input form__input" 
                        type="text" id="name" 
                        name="name" 
                        placeholder="Виталий" 
                        required
                    />
                    <p className="form__error">Что-то пошло не так</p>
                </div>
            )
        }
        else{
            nameInput = ""
        }
        return (
            <section className="form-page">
                <div className="form-container">
                    <img className="form-container__logo" src={logo} alt="Логотип"/>
                    <h2 className="form-container__title">{this.props.title}</h2>
                    <form onSubmit={this.props.onSubmit.bind(this)} className="form">
                        <div className="form__inputs">
                            
                            {nameInput}
                            <p className="form__input-label-text">E-mail</p>
                            <input
                                onChange={this.changeLogin.bind(this)} 
                                value={this.state.login || ""} 
                                className="form__email-input form__input" 
                                type="email" id="email" name="email" 
                                placeholder="pochta@yandex.ru" 
                                required
                            />
                            <p className="form__error">Что-то пошло не так</p>

                            <p className="form__input-label-text">Пароль</p>
                            <input
                                minLength="8"
                                onChange={this.changePassword.bind(this)} 
                                value={this.state.password || ""} 
                                className="form__password-input form__input" 
                                type="password" id="password" 
                                name="password" 
                                placeholder="* * * * * * * * *" 
                                required
                            />
                            <p className="form__error">Что-то пошло не так</p>
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