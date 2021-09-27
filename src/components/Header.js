import React from 'react';
import logo from '../images/logo.svg'

export default class Header extends React.Component{
    render(){
        return (
            <header className="header">
                <div className="header__menu">
                    <div className="header__logo">
                        <img className="header__logo-img" src={logo} alt="Логотип"></img>
                    </div>
                    <div className="header__buttons-container">
                        <button className="header__button">Регистрация</button>
                        <button className="header__button header__button_type_enter">Войти</button>
                    </div>
                </div>
            </header>
        )
    }
}