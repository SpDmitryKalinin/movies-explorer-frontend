import React from 'react';
import Form from '../Form/Form';

export default class Registration extends React.Component{
    render(){
        return (
            <Form 
                title="Рады видеть!"
                nameStatus = {false}
                textButton = "Войти"
                textLink = "Регистрация"
                caption = "Ещё не зарегистрированы?"
                link = "/sign-up"
            >
            </Form>
        )
    }
}