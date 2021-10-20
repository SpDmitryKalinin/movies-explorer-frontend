const BASE_URL = "http://apielmovies.nomoredomains.monster"

export default function auth(name, email, password, endpoint){
  if(name){
    return fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password})
    })
    .then(res =>{
       return getResponseData(res);
    })
  }
  else{
    return fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    .then(res =>{
       return getResponseData(res);
    })
  }
    
}

export function getContent(token){
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => {
        return getResponseData(res);
    })
}

function getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
}
