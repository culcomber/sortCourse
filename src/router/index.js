import Vue from 'vue'
import Router from 'vue-router'
import relation from '@/components/relationGraph'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'relationGraph',
      component: relation
    }

  ]
})
