import React from 'react';
import icon from '../../images/header-icon.svg'
import {Link, withRouter } from 'react-router-dom'; 

class Header extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.status);
    }
    render(){
        return (
            <section className={`menu ${this.props.status ? "menu_is-open" : ""}`}>
                <nav className="menu__nav">
                    <ul className="menu__nav-list">
                        <li className="menu__nav-list-item menu__nav-list-item_active">
                            <Link to={'/'}>
                                <a className="menu__link" href="#">Главная</a>
                            </Link>
                        </li>
                        <li className="menu__nav-list-item">
                            <Link to={'/movies'}>
                                <a className="menu__link" href="#">Фильмы</a>
                            </Link>
                        </li>
                        <li className="menu__nav-list-item">
                            <Link to={'/saved-movies'}>
                                <a className="menu__link" href="#">Сохранённые фильмы</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Link to={'/profile'}>
                <button className="menu__accaunt">
                    <span className="menu__cuption">Аккаунт</span>
                    <img className="menu__icon" src={icon}/>
                </button>
                </Link>
            </section>
        )
    }
}

export default withRouter(Header);
