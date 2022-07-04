import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isDark: false,
    },
    getters: {},
    mutations: {
        TEST(state, status) {
            state.isDark = status;
        }
    },
    actions: {
        updateTest(context, status) {
            context.commit('TEST', status)
        }
    },
    modules: {}
})