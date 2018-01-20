import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Main from './Main.vue'
import Detail from './Detail.vue'
import Profile from './Profile.vue'
import NotFound from './404.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

const routes = [
  {
  	path: '/',
  	redirect: '/home'
  },
  {
  	path: '/home',
  	component: Main
  },
  {
  	path: '/profile',
  	component: Profile
  }
]

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
