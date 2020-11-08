import { createRouter, createWebHashHistory } from "vue-router";
import Main from "@/components/Main";
import Detail from "@/components/Detail";
import Profile from "@/components/Profile";
import NotFound from "@/components/404";

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
            resolve({ x: 0, y: 0 })
          }, 750)
        }
      })
    }
  }
});

export default router;
