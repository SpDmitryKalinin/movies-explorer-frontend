import React from 'react';
import { Route, Switch, withRouter, useHistory, useLocation, Redirect} from "react-router-dom";
import {CurrentUserContext} from './../../currentUserContext/currentUserContext';
import {SHORTDURATION} from '../../utils/constants'


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
            sortMovies: [],
            saveMovies: [],
            loading: false,
            login: true,
            tempSaveMovies: [],
            allMovies: []
        }
    }


    componentDidMount(){
        this.setState({
            loading: true,
        })
        if(this.checkToken()){
            this.getInfoUser()
            this.getMovies();
            this.getSaveMovies();
            setTimeout(() => {
                this.checkSaved()
                this.setState({
                    loading: false
                })
            }, 500);
            if(localStorage.getItem("movies")){
                setTimeout(()=>{
                    this.storageCheck()
                }, 200)
            }
        } 
    }


    storageCheck(){
        const newData = JSON.parse(localStorage.getItem('movies'));
        for(let i = 0;i<newData.length; i++){
            for(let j=0; j<this.state.saveMovies.length; j++){
                if(newData[i].id === this.state.saveMovies[j].movieId){
                    newData[i]._id = this.state.saveMovies[j]._id;
                }
            }
        }
        this.setState(
        {
            sortMovies: newData
        });

    }

    checkSaved(){
        for(let i=0; i<this.state.allMovies.length; i++){
            for(let j=0; j<this.state.saveMovies.length; j++)
            {
                if(this.state.allMovies[i].id === this.state.saveMovies[j].movieId){
                    this.state.allMovies[i]._id = this.state.saveMovies[j]._id;
                }
            }
        }
        for(let i=0; i<this.state.sortMovies.length; i++){
            for(let j=0; j<this.state.saveMovies.length; j++)
            {
                if(this.state.sortMovies[i].id === this.state.saveMovies[j].movieId){
                    this.state.sortMovies[i]._id = this.state.saveMovies[j]._id;
                }
            }
        }
        if(this.state.sortMovies.length!==0){
            setTimeout(()=>{console.log(this.state.sortMovies); localStorage.setItem('movies', JSON.stringify(this.state.sortMovies));}, 200)
        } 
    }

    getMovies(){
        moviesApi.getMovies().then(res =>{
            this.setState({
                allMovies: res
            })
        })
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
                saveMovies: res,
                tempSaveMovies: res,
            })
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
        e.preventDefault()
        auth('', this.state.login, this.state.password, './signin')
        .then(res =>{
            const jwt = res.token;
            localStorage.setItem('jwt', jwt);
            window.location.href = '/movies';

        })
        .catch(res =>{
            this.setState({
                errorMessage: res
            })
        })
    }

    handleSignUp(e){
        e.preventDefault()
        return auth(this.state.name, this.state.login, this.state.password, './signup')
        .then(res =>{
            return auth('', this.state.login, this.state.password, './signin')
            .then(res =>{
                const jwt = res.token;
                localStorage.setItem('jwt', jwt);
                window.location.href = '/movies';
            })
            .catch(res =>{
                return res
            })
        })
        .catch(res =>{
            this.setState({
                errorMessage: res
            })
        })
    }

    saveMovie(country, director, duration, year, description, image, trailer, thumbnail, movieId, nameRU, nameEN){
        return api.saveMovie(country, director, duration, year, description, image, trailer, thumbnail, movieId, nameRU, nameEN)
        .then(res =>{
            this.getSaveMovies();
            setTimeout(() => {this.checkSaved()}, 500);
            return res._id;
        })
    }

    deleteMovie(id){
        api.deleteMovie(id).then(res =>{
            this.getSaveMovies();
            for(let i =0; i<this.state.allMovies.length; i++){
                if(this.state.allMovies[i]._id === id){
                    console.log(this.state.allMovies[i]._id)
                    this.state.allMovies[i]._id = undefined;
                }
            }
            for(let i=0; i<this.state.sortMovies.length; i++){
                if(this.state.sortMovies[i]._id === id){
                    this.state.sortMovies[i]._id = undefined;
                }
            }
            setTimeout(() => {this.checkSaved()}, 500);
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
            this.sort(this.state.allMovies, word, short, status);
        }
        else{
            this.sort(this.state.tempSaveMovies, word, short, status);
        }
    }


    sort(data, word, short, status){
        let temp = [];
        for(let i = 0; i<data.length; i++){
            let itemRu = data[i].nameRU ? data[i].nameRU : "";
            let itemEn = data[i].nameEN ? data[i].nameEN : "";
            itemRu = itemRu.toLowerCase();
            itemEn = itemEn.toLowerCase();
            let itemDuration = data[i].duration;
            if(itemRu.indexOf(`${word.toLowerCase()}`) !== -1 || itemEn.indexOf(`${word.toLowerCase()}`)!== -1){
                if(short){
                    if(itemDuration<SHORTDURATION){
                        temp.push(data[i]);
                    }
                    
                }
                else{
                    if(itemDuration>SHORTDURATION){
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

    handleSubmitEditProfile(e, name, email, allValidation){
        e.preventDefault();
        if(allValidation){
            api.editProfiltInfo(name, email);
            this.getInfoUser();
        }    
    }

    render(){
        const headerView = this.state.login;
        return (
            <CurrentUserContext.Provider value={this.state.currentUser}>
                {headerView ? <Header/> : <HeaderMain/>}
                <section className="page">
                    <Switch>
                    <Route path="/sign-in">
                        {this.state.login ? 
                            <Redirect to="/"/>:
                            <Login
                                onSubmit = {this.handleSignIn}
                            />
                        }
                    </Route>

                    <Route path="/sign-up">
                        {this.state.login ? 
                            <Redirect to="/"/>:
                            <Registration
                                onSubmit = {this.handleSignUp}
                            />
                        }
                        
                    </Route>

                    <Route path="/movies">
                        {this.checkSaved()}
                        <Movies allMovies={this.state.allMovies} onSubmit = {this.handleSubmitSearch.bind(this)} movies={this.state.sortMovies} status={true} loading={this.state.loading} saveMovie={this.saveMovie.bind(this)} deleteMovie={this.deleteMovie.bind(this)}/>
                    </Route>

                    <Route path="/saved-movies">
                        {this.checkSaved()}
                        <Movies allMovies={this.state.allMovies} onSubmit = {this.handleSubmitSearch.bind(this)} movies={this.state.saveMovies} status={false} loading={this.state.loading} deleteMovie={this.deleteMovie.bind(this)}/>
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