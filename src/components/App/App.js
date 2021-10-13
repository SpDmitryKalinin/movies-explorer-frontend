import React from 'react';
import { Route, Switch, withRouter, useHistory, useLocation} from "react-router-dom";
import {CurrentUserContext} from './../../currentUserContext/currentUserContext';

//components
import HeaderMain from '../HeaderMain/HeaderMain';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import Error from '../Error/Error';
import Profile from '../Profile/Profille';
import auth from '../../utils/auth';
import moviesApi from '../../utils/MoviesApi'



export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentUser: {},
            movies: [],
            sortMovies: []
        }
    }
    componentDidMount(){

    }

    handleSignIn(e){
        e.preventDefault();
        auth('', this.state.login, this.state.password, './signin')
        .then(res =>{
            const jwt = res.token;
            localStorage.setItem('jwt', jwt);
            window.location.href = '/movies'; 
        })
        .catch(res =>{
            console.log(res);
        })
    }

    handleSignUp(e){
        e.preventDefault();
        auth(this.state.name, this.state.login, this.state.password, './signup')
        .then(res =>{
            console.log(res);
        })
        .catch(res =>{
            console.log(res);
        })
    }

    handleSubmitSearch(e, word){
        e.preventDefault();
        moviesApi.getMovies().then(res =>{
            let data = res;
            this.setState({movies: data}, this.sort(word))
        })
        setTimeout(() => {this.sort(word)}, 1000);
    }
    sort(word){  
        console.log(word);
        let temp = [];
        for(let i = 0; i<this.state.movies.length; i++){
            
            let itemRu = this.state.movies[i].nameRU ? this.state.movies[i].nameRU : "@@@@@@@@@@@@@@";
            let itemEn = this.state.movies[i].nameEN ? this.state.movies[i].nameEN : "@@@@@@@@@@@@@@";
            console.log(itemRu, itemEn, '!!!');
            if(itemRu.indexOf(`${word}`) !== -1 || itemEn.indexOf(`${word}`)!== -1){
                temp.push(this.state.movies[i]);
            }
        }
        console.log(temp);
    }

    render(){
        return (
            <CurrentUserContext.Provider value={this.state.currentUser}>
                <section className="page">
                    <Switch>
                    <Route path="/sign-in">
                        <Login
                            onSubmit = {this.handleSignIn}
                        />
                    </Route>

                    <Route path="/sign-up">
                        <Registration
                            onSubmit = {this.handleSignUp}
                        />
                    </Route>

                    <Route path="/movies">
                        <Movies onSubmit = {this.handleSubmitSearch.bind(this)} dataMovies = {this.state.movies} status={true}/>
                    </Route>

                    <Route path="/saved-movies">
                        <Movies onSubmit = {this.handleSubmitSearch.bind(this)} status={false}/>
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
            </CurrentUserContext.Provider>
        )
    }
}