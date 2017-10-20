import Vue from 'vue';
import Vuex from 'vuex';
import appService from '../app.service';
import postsModule from './posts';

Vue.use(Vuex);

const state = {
    isAuthenticated: false
}

// components will trigger/send/call actions (mapActions method from Vuex) 
// actions are methods that will trigger/commit a mutation which will update the state in the store
const store = new Vuex.Store({
    modules: {
        postsModule
    },
    state,
    getters: {
        isAuthenticated: state => {
            return state.isAuthenticated;
        }
    },
    actions: {
        logout(context) {
            context.commit('logout');
        },
        login(context, creds) {
            return new Promise(resolve => {
                appService.login(creds)
                    .then(data => {
                        context.commit('login', data);
                        resolve();
                    }).catch(res => {
                        window.alert('could not login!');
                        console.log(res);
                    });
            });
        }
    },
    mutations: {
        login(state, data) {
            if (typeof window !== 'undefined') {
                window.localStorage.setItem('token', data.token);
                window.localStorage.setItem('tokenExpiration', data.expiration);
            }
            state.isAuthenticated = true;
        },
        logout(state) {
            if (typeof window !== 'undefined') {
                window.localStorage.removeItem('token');
                window.localStorage.removeItem('tokenExpiration');
            }
            state.isAuthenticated = false;
        }
    }
});

if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', event => {
        let expiration = window.localStorage.getItem('tokenExpiration');
        var unixTimestamp = new Date().getTime() / 1000;
        if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
            store.state.isAuthenticated = true;
        } 
    })
}

export default store;