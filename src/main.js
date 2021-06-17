// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from 'echarts'

// 引入ant-design-vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import axios from 'axios'
//挂载axios
Vue.prototype.$http = axios
//设置访问根路径
axios.defaults.baseURL = "http://localhost:9000"

Vue.use(Antd)

Vue.use(ElementUI)

Vue.config.productionTip = false

// echarts 需要挂载到Vue原型上
// Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
