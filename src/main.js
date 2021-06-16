// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


//导入axios
import axios from 'axios'
//导入echarts
import * as echarts from 'echarts';

//挂载axios
Vue.prototype.$http = axios
//设置访问根路径
axios.defaults.baseURL = "http://localhost:9000"

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
