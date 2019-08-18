import Vue from 'vue'
import Router from 'vue-router'
import LeaveComments from './components/LeaveComments.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: './leaveComments',
      name: 'leaveComments',
      component: LeaveComments
    }
  ]
})
