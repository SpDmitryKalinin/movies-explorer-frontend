import React from 'react';
import logo from '../../images/logo.svg'
import icon from '../../images/header-icon.svg'
import burger from '../../images/burger.svg'
import cross from '../../images/cross.svg'
import Menu from '../Menu/Menu'
import {Link, withRouter } from 'react-router-dom'; 

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menuIsOpen: false,
        }
    }
    render(){
        return (
            <section className="header">
                <Link to={'/'}>
                    <div className="header__logo">
                            <img src={logo} alt="логотип"/>
                    </div>
                </Link>
                <div className="header__tabs">
                   <Link to={'/movies'}>
                       <a className="header__link" href="#">Фильмы</a>
                    </Link>
                    <Link to={'/saved-movies'}>
                        <a className="header__link" href="#">Сохраненные фильмы</a>
                   </Link>
                </div>
                <Link to={'/profile'}>
                    <button className="header__accaunt">
                        <span className="header__cuption">Аккаунт</span>
                        <img className="header__icon" src={icon} alt="Иконка аккаунта"/>
                    </button>
                </Link>
                
                <div className={`header__burger ${this.state.menuIsOpen ? "header__burger_active" : ""}`} onClick={this.toggleMenu.bind(this)}>
                    <button>
                        <img src={this.state.menuIsOpen ? cross : burger} alt="Бургер-меню"/>
                    </button>
                </div>
                <Menu status = {this.state.menuIsOpen}/>
            </section>
        )
    }
    
    toggleMenu(){
        this.setState({menuIsOpen: !this.state.menuIsOpen})
        if(!this.state.menuIsOpen){
            document.querySelector('body').setAttribute('style', 'height: 100%; overflow:hidden;')
        }
        else{
            document.querySelector('body').removeAttribute('style', 'height: 100%; overflow:hidden;')
        }
        
    }
}

