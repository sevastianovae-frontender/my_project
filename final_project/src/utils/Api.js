const onResponce = (res)=> {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
}

class Api {
    constructor({baseUrl, token}) {
        this._baseUrl = baseUrl;
        this._token = token;
    }

    getProductsList(){
        return fetch(`${this._baseUrl}/posts`, {
            headers: {
                authorization: this._token,
            },
        }).then(onResponce)
    }

    getUserInfo(){
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: this._token,
            },
        }).then(onResponce)
    }

    searchProducts(searchQuery){
        return fetch(`${this._baseUrl}/posts/search?query=${searchQuery}`, {
            headers: {
                authorization: this._token,
            },
        }).then(onResponce)
    }

    deleteProducts(productId){
        return fetch(`${this._baseUrl}/posts/${productId}`, {
            method:  "DELETE" ,
            headers: {
                authorization: this._token,
            },
        }).then(onResponce)
    }




    changeLikeStatus(productId, isLike){
        return fetch(`${this._baseUrl}/posts/likes/${productId}`, {
            method: isLike ? "DELETE" : "PUT",
            headers: {
                authorization: this._token,
            },
        }).then(onResponce)
    }
  
}

const config = {
    baseUrl: 'https://api.react-learning.ru',
   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiZGMiLCJpYXQiOjE2NDcwMTM4ODgsImV4cCI6MTY3ODU0OTg4OH0.lpY39cEowFhVV-sES7dFuYVlJnJahhZRkNZQq2LJZWI',
}

const api = new Api(config);

export default api;

console.log(api)