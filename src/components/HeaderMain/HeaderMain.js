import React from 'react';
import logo from '../../images/logo.svg'
import {Link, withRouter } from 'react-router-dom'; 

export default class HeaderMain extends React.Component{
    render(){
        return (
            <header className="header-main">
                <div className="header-main__menu">
                    <Link to={'/'}>
                    <div className="header-main__logo">
                        <img className="header-main__logo-img" src={logo} alt="Логотип"></img>
                    </div>
                    </Link>
                    <div className="header-main__buttons-container">
                        <Link to={'/sign-up'}>
                            <button className="header-main__button">Регистрация</button>
                        </Link>
                        <Link to={'/sign-in'}>
                            <button className="header-main__button header-main__button_type_enter">Войти</button>
                        </Link>
                    </div>
                </div>
            </header>
        )
    }
}