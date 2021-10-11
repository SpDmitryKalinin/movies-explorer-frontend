import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

//components
import HeaderMain from '../HeaderMain/HeaderMain';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import Error from '../Error/Error';
import Profile from '../Profile/Profille';


export default class App extends React.Component{
    render(){
        return (
            <section className="page">
                <Switch>
                <Route path="/sign-in">
                    <Login/>
                </Route>

                <Route path="/sign-up">
                    <Registration/>
                </Route>

                <Route path="/movies">
                    <Movies status={true}/>
                </Route>

                <Route path="/saved-movies">
                    <Movies status={false}/>
                </Route>

                <Route path="/profile">
                    <Profile/>
                </Route>
                
                <Route exact path="/">
                    <HeaderMain/>
                    <Main/>
                </Route>
                
                <Route path="/">
                    <Error/>
                </Route>
                
                </Switch>
            </section>
        )
    }
}