import React from 'react';
import Button from '../../images/find.svg'

export default class searchForm extends React.Component{
    render(){
        return (
            <section className="search-form-container">
                <form className="search-form">
                    <div className="search-from__input-container">
                        <input placeholder="Фильм" className="search-form__input" required></input>
                        <button type="submit" className="search-form__button">
                            <img src={Button} alt="Кнопка поиска"/>
                        </button>
                    </div>
                    <div className="search-form__filter">
                        <p className="search-form__filter-description">Короткометражки</p>
                        <label className="serch-form__checkbox-style">
                            <input id="checkbox-movie" className="search-form__checkbox" type="checkbox"></input>
                            <figure className="search-form__figure"></figure>
                        </label>
                    </div>
                    
                </form>
            </section>
        )
    }
}