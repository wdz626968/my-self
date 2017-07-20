import Vue from 'vue'
import Router from 'vue-router'
import * as names from './names'
import Hello from 'src/components/common/Header.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: names.INDEX,
      component: Hello
    }
  ]
})
