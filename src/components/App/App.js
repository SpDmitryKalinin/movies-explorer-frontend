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



class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentUser: {},
            movies: [],
            sortMovies: [],
            loading: false,
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

    handleSubmitSearch(e, word, short){
        e.preventDefault();
        this.setState({
            loading: true,
        })
        moviesApi.getMovies()
        .then(res =>{
            let data = res;
            this.setState({movies: data})
        })
        .catch(err =>{
            console.log(err)
        })
        setTimeout(() => {this.sort(word, short)}, 1000);
    }

    sort(word, short){
        let temp = [];
        for(let i = 0; i<this.state.movies.length; i++){
            let itemRu = this.state.movies[i].nameRU ? this.state.movies[i].nameRU : "";
            let itemEn = this.state.movies[i].nameEN ? this.state.movies[i].nameEN : "";
            let itemDuration = this.state.movies[i].duration;
            if(itemRu.indexOf(`${word}`) !== -1 || itemEn.indexOf(`${word}`)!== -1){
                if(!short){
                    temp.push(this.state.movies[i]);
                }
                else{
                    if(itemDuration>40){
                        temp.push(this.state.movies[i]);
                    }
                    
                }
            }
        }
        this.setState({
            sortMovies: temp,
            loading: false
        });
        localStorage.setItem('movies', JSON.stringify(temp));
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
                        <Movies onSubmit = {this.handleSubmitSearch.bind(this)} movies={this.state.sortMovies} status={true} loading={this.state.loading}/>
                    </Route>

                    <Route path="/saved-movies">
                        <Movies onSubmit = {this.handleSubmitSearch.bind(this)} status={false} loading={this.state.loading}/>
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

export default withRouter(App);