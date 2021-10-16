import {ADDRESSMOVIEAPI} from "./constants";


export class MovieApi{
    constructor(ADDRESSMOVIEAPI){
        this.addres = ADDRESSMOVIEAPI;
    }
    
    getMovies(){
        return fetch(`${this.addres}`,{
            method: 'GET',
        })
            .then(res => {
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

const moviesApi = new MovieApi(ADDRESSMOVIEAPI);
export default moviesApi;