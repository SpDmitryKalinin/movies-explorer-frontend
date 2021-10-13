import React from 'react';
import {Link, withRouter } from 'react-router-dom'; 

export default class Error extends React.Component{
    render(){
        return (
            <div class="error">
                <div class="error__container">
                    <h1 class="error__title">404</h1>
                    <p class="error__subtitle">Страница не найдена</p>
                    <Link to="/">
                        <button type="button" class="error__button-back">Назад</button>
                    </Link>
                </div>
            </div>
        )
            
    }
}