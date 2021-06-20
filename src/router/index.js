import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Home from '@/components/Home'

// import DataPage from '@/components/DataPage'
// import TagSearch from '@/components/TagSearch'
import UserSearch from '@/components/UserSearch'
import UserInfo from '@/components/UserInfo'
import UserManagement from '@/components/UserManagement'
import TagManagement from '@/components/TagManagement'
// import AdminManagement from '@/components/SuperAdministrator/AdminManagement'
import MainPage from '@/components/MainPage'
import RolePermission from '@/components/SuperAdministrator/RolePermission'
import TagCheck from '@/components/SuperAdministrator/TagCheck'

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
        {path: '/MainPage', name: 'MainPage', component: MainPage},
        // {path: '/DataPage', name: 'DataPage', component: DataPage},
        // {path: '/LabelSearch', name: 'LabelSearch', component: LabelSearch},
        {path: '/UserSearch', name: 'UserSearch', component: UserSearch},
        {path: '/UserManagement', name: 'UserManagement', component: UserManagement},
        {path: '/TagManagement', name: 'TagManagement', component: TagManagement},
        // {path: '/AdminManagement', name: 'AdminManagement', component: AdminManagement},
        {path: '/RolePermission', name: 'RolePermission', component: RolePermission},
        {path: '/TagCheck', name: 'TagCheck', component: TagCheck}
      ]
    }
  ]
})
