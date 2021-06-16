import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Home from '@/components/Home'

import DataPage from '@/components/DataPage'
import LabelSearch from '@/components/LabelSearch'
import UserInfo from '@/components/UserInfo'
import UserManagement from '@/components/UserManagement'
import TagManagement from '@/components/TagManagement'

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
        {path: '/UserInfo', name: 'UserInfo', component: UserInfo},
        {path: '/DataPage', name: 'DataPage', component: DataPage},
        {path: '/LabelSearch', name: 'LabelSearch', component: LabelSearch},
        {path: '/UserManagement', name: 'UserManagement', component: UserManagement},
        {path: '/TagManagement', name: 'TagManagement', component: TagManagement}
      ]
    }
  ]
})
