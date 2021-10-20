import React from 'react';
import Button from '../../images/find.svg'

export default class searchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            word: '',
            shortStatus: false,
            errorStatus: false,
        }
    }
    changeSearchInput(e){
        this.setState({
            word: e.target.value
        })
    }

    searchValidation(e){        
        let value = e.target.querySelector('input').value;
        console.log(value.length);
        if(value.length === 0){
            this.setState({
                errorStatus: true,
            })
        }
        else{
            this.setState({
                errorStatus: false,
            })
        }
    }
    changeShortBox(e){
        this.setState({
            shortStatus: e.target.checked
        })
        setTimeout(() => {this.props.onSubmit(e, this.state.word, this.state.shortStatus, this.props.status)}, 500);
    }
    render(){
        return (
            <section className="search-form-container">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.searchValidation(e);
                    setTimeout(() => {
                        if(!this.state.errorStatus){
                            this.props.onSubmit(e, this.state.word, this.state.shortStatus, this.props.status);
                            this.props.updateSearch();
                        }
                    }, 500);
                    
                    }} className="search-form">
                    <div className="search-from__input-container">
                        <input 
                            onChange={this.changeSearchInput.bind(this)} 
                            value={this.state.word || ""}  
                            placeholder="Фильм" 
                            className="search-form__input" 
                        ></input>
                        {this.state.errorStatus ?<span className="search-form__error">Введите ключевое слово</span> : ""}
                        <button type="submit" className="search-form__button">
                            <img src={Button} alt="Кнопка поиска"/>
                        </button>
                    </div>
                    
                    <div className="search-form__filter">
                        <p className="search-form__filter-description">Короткометражки</p>
                        <label className="serch-form__checkbox-style">
                            <input 
                                id="checkbox-movie" 
                                className="search-form__checkbox" 
                                type="checkbox"
                                onChange={this.changeShortBox.bind(this)}
                            ></input>
                            <figure className="search-form__figure"></figure>
                        </label>
                    </div>
                </form>
                
            </section>
        )
    }
}