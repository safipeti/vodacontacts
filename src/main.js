import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import ListUsers from '@/components/ListUsers'
import NewUser from '@/components/NewUser'
import EditUser from '@/components/EditUser'
import ViewUser from '@/components/ViewUser'

import UUID from 'vue-uuid';
Vue.use(UUID);
Vue.use(VueRouter)

Vue.config.productionTip = false

export const eventBus = new Vue()

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'list-users',
      component: ListUsers
    },
    {
      path: '/new',
      name: 'new-user',
      component: NewUser
    },
    {
      path: '/edit/:user_id',
      name: 'edit-user',
      component: EditUser
    },
    {
      path: '/:user_id',
      name: 'view-user',
      component: ViewUser
    }
  ]
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

