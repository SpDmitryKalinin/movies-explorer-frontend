import React from 'react';
import Button from '../../images/find.svg'

export default class searchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            word: ''
        }
    }
    changeSearchInput(e){
        this.setState({
            word: e.target.value
        })
    }
    render(){
        return (
            <section className="search-form-container">
                <form onSubmit={(e) => this.props.onSubmit(e, this.state.word)} className="search-form">
                    <div className="search-from__input-container">
                        <input 
                            onChange={this.changeSearchInput.bind(this)} 
                            value={this.state.word || ""}  
                            placeholder="Фильм" 
                            className="search-form__input" 
                            required="required"
                        ></input>
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