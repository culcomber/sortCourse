import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import inputData from '@/components/home/inputData'
import uploadFile from '@/components/home/uploadFile'
import checkData from '@/components/checkData'
import checkResult from '@/components/checkResult'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: 'inputData',
          name: 'inputData',
          component: inputData
        },
        {
          path: 'uploadFile',
          name: 'uploadFile',
          component: uploadFile
        }
      ]
    },
    {
      path: '/checkData',
      name: 'checkData',
      component: checkData
    },
    {
      path: '/checkResult',
      name: 'checkResult',
      component: checkResult
    }
  ]
})

