import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import LabelSearch from '@/components/LabelSearch'
import UserInfo from '@/components/UserInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {path: '/LabelSearch', name: 'LabelSearch', component: LabelSearch},
        {path: '/UserInfo', name: 'UserInfo', component: UserInfo}
      ]
    }
  ]
})
