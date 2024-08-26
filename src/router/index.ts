import {createRouter, createWebHistory} from 'vue-router'
import {loadLayoutMiddleware} from "@/middleware/layoutLoader";
import {AppLayoutsEnum} from "@/layouts/layouts.types";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/index.vue'),
    },
    /*{
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        layout: AppLayoutsEnum.error
      }
    }*/
  ]
})

router.beforeEach(loadLayoutMiddleware);

export default router
