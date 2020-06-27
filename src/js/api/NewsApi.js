import { initialDate, finalDate } from '../utils/dateCalc';

export default class NewsApi {
    constructor(auth) {
        this.apiKey = auth.key;
        this.pageSize = auth.pageSize;
        this.sortBy = auth.sortBy;
        this.url = auth.url;        
    }

    getArticles(keyword) {
        return fetch(`${this.url + keyword}&from=${initialDate}&to=${finalDate}&sortBy=${this.sortBy}&pageSize=${this.pageSize}&apiKey=${this.apiKey}`)
        .then((res) => {
            if (res.ok){
                return res.json();
            }
            return Promise.reject(res);
        })
        .catch((err) => Promise.reject(res));
    }
}