const ADDRESS = 'http://apielmovies.nomoredomains.monster';
const ADDRESSMOVIEAPI = 'https://api.nomoreparties.co/beatfilm-movies';
const TOKEN = localStorage.getItem('jwt');
const SHORTDURATION = 40;
const VALUECARD ={
    desktop: [12, 3],
    tablet: [8, 2],
    mobile: [5, 2]
}


export {VALUECARD, SHORTDURATION, ADDRESS, ADDRESSMOVIEAPI, TOKEN}