import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import VideoPlayer from 'vue-video-player'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VideoPlayer)
Vue.use(VueAwesomeSwiper)

const router = new VueRouter({
    routes
})

var vue = new Vue({
    router: router,
    el: '#app',
    template: `<App/>`,
    components: {App}
});

console.log(vue);
