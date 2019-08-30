import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hello from '@/components/Hello'
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
