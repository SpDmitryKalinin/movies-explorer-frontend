import {ADDRESS, TOKEN} from "./constants";

export class Api{
    constructor(token, ADDRESS){
        this._token = token;
        this._address = ADDRESS;
    }
    
    editProfiltInfo(name, email){
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this._token}`
            },
            body: JSON.stringify({
                name: `${name}`,
                email: `${email}`
            })
        })
    }

    saveMovie(country, director, duration, year, description, image, trailer, thumbnail, movieId, nameRU, nameEN){
        return fetch(`${this._address}/movies`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this._token}`
            },
            body: JSON.stringify({
                country: country,
                director: director,
                duration: duration,
                year: year,
                description: description,
                image: image,
                trailer: trailer,
                thumbnail: thumbnail,
                movieId: movieId,
                nameRU: nameRU,
                nameEN: nameEN
            })
        })
        .then(res =>{
            return this._getResponseData(res);
        })
    }

    deleteMovie(id){
        return fetch(`${this._address}/movies/${id}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this._token}`
            }
        })
        .then(res =>{
            console.log(res);
            return this._getResponseData(res);
        })
    }
    getMovies(){
        return fetch(`${this._address}/movies`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this._token}`
            }
        })
        .then(res =>{
            return this._getResponseData(res);
        })
    }
    
    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }
}

const api = new Api(TOKEN, ADDRESS);
export default api;