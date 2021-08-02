import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./routes/Home.vue";
import Blank from "./routes/Blank.vue";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      meta: {
        get contentHeight() {
          return 450;
        }
      }
    },
    {
      path: '/projects',
      component: Blank,
      meta: {
        get contentHeight() {
          return innerHeight - 120;
        }
      }
    },
    {
      path: '/contact',
      component: Blank,
      meta: {
        contentHeight: 470
      }
    },
    {
      path: '/:pathMatch(.*)',
      component: Blank
    }
  ]
});
