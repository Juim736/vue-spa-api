require('./bootstrap');
//  window.Vue = require('vue');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {routes} from './routes';    
import StoreData from './store';
import MainApp from './components/MainApp.vue';
import { initialize } from './helpers/general';

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(StoreData);
const router = new VueRouter ({ 
    routes,
    mode: 'history'
})

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

initialize(store,router);

const app = new Vue({
    el: '#app',
    router,
    store,
    components : {MainApp},
    mounted () {
        console.log('jim is the best');
    }
});
