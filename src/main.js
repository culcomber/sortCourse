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

Vue.use(Vuex)
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false;

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
