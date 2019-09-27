import Vue from 'vue'
import Router from 'vue-router'
import LeaveComments from './components/LeaveComments.vue'
import home from './components/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: home
    },
    {
      path: '/leaveComments',
      name: 'leaveComments',
      component: LeaveComments
    },
    { path: '*', component: home }
  ]
})
