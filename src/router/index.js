import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import ProjectView from "@/views/ProjectView.vue";
import CosplayView from "@/views/CosplayView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView
    },
    {
      path: "/project",
      component: ProjectView
    },
    {
      path: "/cosplay",
      component: CosplayView
    }
  ]
});

router.beforeEach((to, from, next) => {
  window.scroll(0, 0)
  document.title = "AkiArasaki.com";
  next();
});

export default router
