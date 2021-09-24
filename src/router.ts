import { createRouter, createWebHashHistory } from "vue-router";

import Blank from "./routes/Blank.vue";
import Contact from "./routes/Contact.vue";
import Projects from "./routes/Projects.vue";
import AboutMe from "./routes/AboutMe.vue";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: AboutMe,
      meta: {
        contentHeight: 470
      }
    },
    {
      path: '/projects',
      component: Projects,
      meta: {
        get contentHeight() {
          return innerHeight - 120;
        }
      }
    },
    {
      path: '/contact',
      component: Contact,
      meta: {
        contentHeight: 450
      }
    },
    {
      path: '/:pathMatch(.*)',
      component: Blank
    }
  ]
});
