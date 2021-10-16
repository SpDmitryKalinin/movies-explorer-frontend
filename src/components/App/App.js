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
import { getContent } from '../../utils/auth';
import moviesApi from '../../utils/MoviesApi'
import api from '../../utils/MainApi';
import Header from '../Header/Header';

class App extends React.Component{
    static contextType = CurrentUserContext;
    constructor(props){
        super(props);
        this.state = {
            currentUser: {},
            movies: [],
            sortMovies: [],
            loading: false,
            login: true,
            saveMovies: [],
        }
    }
    componentDidMount(){
        if(this.checkToken()){
            this.getInfoUser()
            this.getSaveMovies();
            if(localStorage.getItem("movies")){
                const newData = JSON.parse(localStorage.getItem('movies'));
                this.setState(
                {
                    sortMovies: newData
                });
            }

        } 
    }

    getInfoUser(){
        let info = getContent(localStorage.getItem('jwt'));
        info.then(res =>{
            const infoUser = res;
            this.setState({
                currentUser: infoUser
            })
        })
    }

    getSaveMovies(){
        api.getMovies().then(res =>{
            this.setState({
                saveMovies: res
            })
            console.log(res);
        })
    }

    checkToken(){
        if(localStorage.getItem('jwt')){
            this.setState({
                login: true,
            })
            return true
        }
        
        else{
            this.setState({
                login: false
            })
            return false
        }
    }

    handleLogout(){
        this.setState({
            login: false
        })
        localStorage.removeItem('jwt');
        localStorage.removeItem('movies');
        window.location.href = '/';
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
            auth('', this.state.login, this.state.password, './signin')
            .then(res =>{
                const jwt = res.token;
                localStorage.setItem('jwt', jwt);
                window.location.href = '/movies';
            })
            .catch(res =>{
                console.log(res);
            })
        })
        .catch(res =>{
            console.log(res);
        })
    }

    saveMovie(country, director, duration, year, description, image, trailer, thumbnail, movieId, nameRU, nameEN){
        return api.saveMovie(country, director, duration, year, description, image, trailer, thumbnail, movieId, nameRU, nameEN)
        .then(res =>{
            this.getSaveMovies();
            return res._id;
        })
    }

    deleteMovie(id){
        api.deleteMovie(id).then(res =>{
            this.getSaveMovies();
        })
        .catch(res =>{
            console.log(res);
        })
        
    }

    handleSubmitSearch(e, word, short, status){
        e.preventDefault();
        this.setState({
            loading: true,
        })
        if(status){
            moviesApi.getMovies()
            .then(res =>{
                let data = res;
                this.setState({movies: data})
            })
            .catch(err =>{
                console.log(err)
            })
            setTimeout(() => {this.sort(this.state.movies, word, short, status)}, 1000);
        }
        else{
            setTimeout(() => {this.sort(this.state.saveMovies, word, short, status)}, 1000);
        }
        
    }


    sort(data, word, short, status){
        let temp = [];
        for(let i = 0; i<data.length; i++){
            let itemRu = data[i].nameRU ? data[i].nameRU : "";
            let itemEn = data[i].nameEN ? data[i].nameEN : "";
            let itemDuration = data[i].duration;
            if(itemRu.indexOf(`${word}`) !== -1 || itemEn.indexOf(`${word}`)!== -1){
                if(!short){
                    temp.push(data[i]);
                }
                else{
                    if(itemDuration>40){
                        temp.push(data[i]);
                    }
                }
            }
        }
        if(status){
            this.setState({
                sortMovies: temp,
                loading: false
            });
            localStorage.setItem('movies', JSON.stringify(temp));
        }
        else{
            this.setState({
                saveMovies: temp,
                loading: false
            });
        }
        
    }

    handleSubmitEditProfile(e, name, email){
        e.preventDefault();
        api.editProfiltInfo(name, email);
        this.getInfoUser();
    }

    render(){
        const headerView = this.state.login;
        return (
            <CurrentUserContext.Provider value={this.state.currentUser}>
                {headerView ? <Header/> : <HeaderMain/>}
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
                        <Movies onSubmit = {this.handleSubmitSearch.bind(this)} movies={this.state.sortMovies} status={true} loading={this.state.loading} saveMovie={this.saveMovie.bind(this)} deleteMovie={this.deleteMovie.bind(this)}/>
                    </Route>

                    <Route path="/saved-movies">
                        <Movies onSubmit = {this.handleSubmitSearch.bind(this)} movies={this.state.saveMovies} status={false} loading={this.state.loading} deleteMovie={this.deleteMovie.bind(this)}/>
                    </Route>

                    <Route path="/profile">
                        <Profile onSubmit ={this.handleSubmitEditProfile.bind(this)} logout = {this.handleLogout.bind(this)}/>
                    </Route>
                    
                    <Route exact path="/">
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