import React from 'react';
import { CurrentUserContext } from '../../currentUserContext/currentUserContext';
const { isEmail } = require('validator');

export default class Profile extends React.Component{
    static contextType = CurrentUserContext;
    constructor(props){
        super(props)
        this.state ={
            name: '',
            email: '',
            validName: true,
            validEmail: true,
            allValidation: true,
            validationError: '',
            prevname: '',
            prevemail: '',
        }
    }
    componentDidMount(){
        this.setState({
            name: this.context.name,
            email: this.context.email
        })
    }
    changeEmail(e){
        this.setState({
            email: e.target.value
        })
        if(isEmail(e.target.value)){
            this.setState({
                validEmail: true
            })
        }
        else{
            this.setState({
                validEmail: false,
                validationError: 'Некорректно введёт email'
            })
        }
        setTimeout(() => {
            this.allValidation()
        }, 100);
    }

    changeName(e){
        this.setState({
            name: e.target.value
        })
        if(e.target.value.length>=2){
            
            this.setState({
                validName: true
            })
        }
        else{
            this.setState({
                validName: false,
                validationError: 'Имя должно содержать по крайней мере два символа'
            })
        }
        setTimeout(() => {
            this.allValidation()
        }, 100);
        
    }

    allValidation(){
        if(this.state.validEmail && this.state.validName){
            this.setState({
                allValidation: true
            })
            return true
        }
        else{
            this.setState({
                allValidation: false
            })
            return false
        }
    }

    render(){
        return (
            <section className="profile-page"> 
                <div className="profile">
                    <div className="profile__container">
                        <h1 className="profile__title">{this.context.name}</h1>
                        <div className="profile__inputs">
                            <form onSubmit={(e) => {
                                this.props.onSubmit(e, this.state.name, this.state.email, this.allValidation())
                                this.setState({
                                    prevemail: this.state.email,
                                    prevname: this.state.name
                                })
                                setTimeout(() => {
                                    console.log(this.state);
                                }, 200);
                                }}>
                                <div className="profile__input-container profile__input-container-name">
                                    <p className="profile__input-label-text">Имя</p>
                                    <input className="profile__input" type="text" id="name-prof" onChange={this.changeName.bind(this)} value={this.state.name} minLength="2"  required/>
                                    <span className="p"></span>
                                </div>

                                <div className="profile__line"></div>
                                
                                <div className="profile__input-container">
                                    <p className="profile__input-label-text">E-mail</p>
                                    <input className="profile__input" type="email" id="email" onChange={this.changeEmail.bind(this)} value={this.state.email} required/>
                                    <label className="profile__input-label" for="email"></label>
                                </div>
                                <div className="profile__buttons">
                                    <button className="profile__button-redact" type="submit" disabled={!this.state.allValidation || this.state.email === this.context.email && this.state.name === this.context.name || this.state.email === this.state.prevemail && this.state.name === this.state.prevname}>Редактировать 
                                        <span className={`profile__error ${!this.state.validEmail || !this.state.validName ? "" : "profile__error_disable"}`}>{this.state.validationError}</span>
                                    </button>
                                    <button className="profile__button-exit" type="button" onClick={this.props.logout}>Выйти из аккаунта</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
            
    }
}