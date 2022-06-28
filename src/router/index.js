import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store/index.js";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Page',
        component: () => import("../views/Page.vue"),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
