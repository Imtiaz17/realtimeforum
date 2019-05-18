require('./bootstrap');


window.Vue = require('vue');
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'

Vue.use(VueSimplemde)
import md from 'marked'
window.md= md
Vue.use(Vuetify)
import User from './Helpers/User'
window.User= User
import Exception from './Helpers/Exception'
window.Exception= Exception
window.EventBus= new Vue();



Vue.component('AppHome', require('./components/AppHome.vue').default);
import router from './components/Router/router.js'
const app = new Vue({
    el: '#app',
    router
});
