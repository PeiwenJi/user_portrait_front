import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import LabelSearch from '@/components/LabelSearch'
import AdminManagement from '@/components/SuperAdministrator/AdminManagement'
import RolePermission from '@/components/SuperAdministrator/RolePermission.vue'

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
        {path: '/AdminManagement', name: 'AdminManagement', component: AdminManagement},
        {path: '/RolePermission', name: 'RolePermission', component: RolePermission}
      ]
    }
  ]
})
