// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import inputData from '@/components/inputData'
import uploadFile from '@/components/uploadFile'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);

const routes=[
  {
    path: '/inputData',
    name: 'inputData',
    component: inputData
  },
  {
    path: '/uploadFile',
    name: 'uploadFile',
    component: uploadFile
  }
];
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
