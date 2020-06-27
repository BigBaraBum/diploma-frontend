export default class Auth {
    checkToken(){
        return (localStorage.getItem('token') !== null);
    }

    setToken(token){
        return (localStorage.setItem('token', token))
    }
}