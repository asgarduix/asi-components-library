import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store/index.js";

Vue.use(VueRouter)

const routes = [
    // 主網址頁面(首頁)
    // {
    //     path: '/',
    //     name: 'Page',
    //     component: () => import("../views/Module/Page.vue"),
    // },
    {
        path: '/Guide',
        name: 'Guide',
        component: () => import("../views/Guide/Guide.vue"),
    },
    {
        path: '/Module',
        name: 'Module',
        component: () => import("../views/Module/Module.vue"),
    },
    {
        path: '/Page2',
        name: 'Page2',
        component: () => import("../views/Module/Page2.vue"),
    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router