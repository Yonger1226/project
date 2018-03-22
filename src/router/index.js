import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const IndexIndex = r => require.ensure([],()=>r(require('../pages/index/index.vue')),'IndexIndex')

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: IndexIndex
        }
    ]
})
