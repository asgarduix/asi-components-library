import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// icon
import "./assets/css/material-icons.css";
import "./assets/css/material-icons-ie.css";
// tabulator
import "./assets/css/tabulator.min.css";
// tailwind
import "./assets/css/tailwind.css";
// layout
import "./assets/css/layout.css";
// customize
import "./assets/css/customize.css";
// pg
import "./assets/css/pg.css";

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

// 透過router設定每頁meta title
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next();
})