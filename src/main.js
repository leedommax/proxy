// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource  from 'vue-resource'
Vue.use(VueResource)
Vue.config.productionTip = false
alert(9)
console.log(3)
var objparam = {
  name : "zhangsan",
  a : 1,
  b : [1,2,3,4,5,6]
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
