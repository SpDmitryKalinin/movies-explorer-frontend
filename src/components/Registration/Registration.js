import React from 'react';
import Form from '../Form/Form';

export default class Registration extends React.Component{
    render(){
        return (
            <Form 
                title="Добро пожаловать"
                nameStatus = {true}
                textButton = "Зарегистрироваться"
                textLink = "Войти"
                caption = "Уже зарегистрированы?"
                link = "/sign-in"
                onSubmit = {this.props.onSubmit}
            >
            </Form>
        )
    }
}