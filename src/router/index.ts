import { createRouter, createWebHashHistory } from "vue-router";
import Main from "@/components/pages/Main.vue";
import Detail from "@/components/pages/Detail.vue";
import Profile from "@/components/pages/Profile.vue";
import NotFound from "@/components/pages/404.vue";

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: "/home",
    name: "Main",
    component: Main
  },
  {
    path: "/work/:number/detail",
    name: "Works",
    component: Detail
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return new Promise(resolve => {
        if (to.matched.some(m => m.meta.scrollToTop)) {
          setTimeout(() => {
            resolve({ top: 0, left: 0 })
          }, 750)
        }
      })
    }
  }
});

export default router;
