import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Detail from '@/components/Detail'
import Profile from '@/components/Profile'
import NotFound from '@/components/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Main',
      component: Main
    },
    {
      path: '/work/:number/detail',
      name: 'Works',
      component: Detail
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
