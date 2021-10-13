import {ADDRESS} from "./constants";


export class Api{
    constructor(token, ADDRESS){
        //this._token = token;
    }
    
    getProfileInfo(){
        return fetch(`${this._addressInfo}`,{
            method: 'GET',
            headers:{
                authorization: `${this._token}`
            }
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

const api = new Api(ADDRESS);
export default api;