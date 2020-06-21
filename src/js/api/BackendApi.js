export default class BackendApi {
    constructor(apiData) {
        this.apiData = apiData;
    }

    signUp(email, password, name) {
        return fetch((`${this.apiData.url}/signup`), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                email, password, name
            }),
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res);
        })
        .catch((err) => Promise.reject(err));
    }
    
    signIn(email, password) {
        return fetch((`${this.apiData.url}/signin`), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                email, password
            }),
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res);
        })
        .catch((err) => Promise.reject(err));
    }

    getUser() {
        return fetch((`${this.apiData.url}/users/me`), {
            method: 'GET',
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
        })
        .then((res) => {
            if(res.ok){
                return res.json();
            }
            return Promise.reject(res);
        })
        .catch((err) => Promise.reject(err));
    }

    getSavedArticles() {
        return fetch((`${this.apiData.url}/articles`), {
            method: 'GET',
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
        })
        .then((res) => {
            if(res.ok){
                return res.json();
            }
            return Promise.reject(res);
        })
        .catch((err) => Promise.reject(err));

    }

    deleteCard(cardId) {
        return fetch((`${this.apiData.url}/articles/${cardId}`), {
            method: 'DELETE',
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
        })
        .then((res) => {
            if(res.ok){
                return res.json();
            }
            return Promise.reject(res);
        })
        .catch((err) => Promise.reject(err));

    }
    saveArticle(article) {
        return fetch((`${this.apiData.url}/articles`), {
            method: 'POST',
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
                keyword: article.keyword,
                title: article.title,
                text: article.text,
                date: article.date,
                source: article.source,
                link: article.link,
                image: article.image,
            })
        })
        .then((res) => {
            if(res.ok){
                return res.json();
            }
            return Promise.reject(res);
        })
        .catch((err) => Promise.reject(err));
    }
}