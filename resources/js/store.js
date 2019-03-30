import { getLocalUser } from "./helpers/auth";
import Axios from "axios";

const user = getLocalUser();
export default { 
    state : {
        currentUser : user,
        isLoggedIn : !!user,
        loading : false,
        auth_error : null,
        customers: []
    },
    getters : {
        isLoading (state) {
            return state.loading;
        }, 
        isLoggedIn (state) {
            return state.isLoggedIn;
        },
        currentUser (state) {
            return state.currentUser;
        },
        authError (state) {
            return state.auth_error;
        },
        customers (state) {
            return state.customers;
        },

    },
    mutations : {
        login(state) {
            state.loading = true;
            state.auth_error = null;
        },
        loginSuccess(state, paylod) {
            state.auth_error = null;
            state.isLoggedIn = true;
            state.loading = false;
            state.currentUser = Object.assign({}, paylod.user, {token: paylod.access_token})
            localStorage.setItem("user", JSON.stringify(state.currentUser));
        },
        loginFailed(state, paylod) {
            state.loading = false;
            state.auth_error = paylod.error;
        },
        logout(state) {
            localStorage.removeItem("user");
            state.isLoggedIn = false;
            state.currentUser = null;
        },
        updateCustomers(state, payload) {
            state.customers = payload;
        }
    },
    actions : {
        login(context) {
            context.commit("login");
        },
        getCustomers(context) {
            axios.get('/api/customers', {
                headers : {
                    "Authorization" : `Bearer ${context.state.currentUser.token}`
                }
            })
            .then((response) => {
                context.commit('updateCustomers', response.data.customers);
            })
        }
    }
}