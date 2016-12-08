import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Main from './Main.vue'
import Detail from './Detail.vue'
import Profile from './Profile.vue'
import NotFound from './404.vue'

Vue.use(VueRouter)

var router = new VueRouter({
  hashbang: false
})

router.map({
	'/home': {
		component: Main
	},
	'/work/:number/detail': {
		component: Detail
	},
	'/profile': {
		component: Profile
	},
	'*': {
		component: NotFound
	}
})

router.redirect({
	'/': '/home'
})

router.start(App, '#app');

