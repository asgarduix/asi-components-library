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
        path: '/',
        name: 'Guide',
        component: () => import("../views/Guide/Guide.vue"),
        meta: {
            title: "指南"
        }
    },
    {
        path: '/Guide',
        name: 'Guide',
        component: () => import("../views/Guide/Guide.vue"),
        meta: {
            title: "指南"
        }
    },
    {
        path: '/Module',
        name: 'Module',
        component: () => import("../views/Module/Module.vue"),
        meta: {
            title: "組件"
        }
    },
    {
        path: '/Page2',
        name: 'Page2',
        component: () => import("../views/Module/Page2.vue"),
        meta: {
            title: "Page2"
        }

    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router