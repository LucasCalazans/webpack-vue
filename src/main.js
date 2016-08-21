import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './modules/App.vue'

// const routes = Object.assign()
Vue.use(VueRouter)

const router = new VueRouter({hashbang: false,history: true})
router.map()
router.start(App, '#app')