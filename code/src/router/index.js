import Vue from 'vue'
import Router from 'vue-router'
import * as names from './names'

Vue.use(Router)
/* 首页 */
import Index from 'src/components/Index.vue'
/* 404 */
import Error from 'src/components/404.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: names.INDEX,
      component: Index
    },
    {
      path: '*',
      name: names.ERROR,
      component: Error
    }
  ]
})
