import Axios from "axios";

export function login(credentials) {
    return new Promise((res,rej) => {
        axios.post('/api/auth/login',credentials)
            .then((response) => {
                res(response.data);
            })
            .catch((err) => {
                rej("Wrong Email or Password");
            })
    })
}

export function getLocalUser() {
    const userStr = localStorage.getItem("user");
    if(!userStr){
        return null;
    }
    return JSON.parse(userStr);
}

export function test(credentials){
    return new Promise((res,rej) => {
        axios.post('/api/auth/login',credentials)
            .then((response) => {
                res(response.data);
            })
            .catch((err) => {
                rej("Wrong Email or Password");
            })
    })
}