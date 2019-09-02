// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import store from './vuex/store'
// import inputData from '@/components/home/inputData'
// import uploadFile from '@/components/home/uploadFile'
// import checkInput from "@/components/child/checkInput";

Vue.use(Vuex)
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false;

// const routes=[
//   {
//     path: '/inputData',
//     name: 'inputData',
//     component: inputData
//   },
//   {
//     path: '/uploadFile',
//     name: 'uploadFile',
//     component: uploadFile
//   },
//   {
//     path: '/checkInput',
//     name: 'checkInput',
//     component: checkInput
//   }
// ];
// const router = new VueRouter({
//   routes // (缩写) 相当于 routes: routes
// });

// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
/*?? 区别 ??*/
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// })
