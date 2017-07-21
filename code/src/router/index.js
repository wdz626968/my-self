import Vue from 'vue'
import Router from 'vue-router'
import * as names from './names'

Vue.use(Router)
/* 首页 */
import Index from 'src/components/index/Index.vue'
/* 生活 */
import Live from 'src/components/live/Live.vue'
/* 404 */
import Error from 'src/components/common/404.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: names.INDEX,
      component: Index
    },
    {
      path: '/live',
      name: names.LIVE,
      component: Live
    },
    {
      path: '*',
      name: names.ERROR,
      component: Error
    }
  ]
})
