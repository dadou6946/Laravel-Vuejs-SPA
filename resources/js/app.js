import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './views/App'
import ChooseCharacters from './components/settings/ChooseCharacters'
import Home from './components/settings/Home'
import About from './views/About'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/choose-characters',
            name: 'choose-characters',
            component: ChooseCharacters,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
