import { defineComponent } from "@vue/runtime-core";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./routes/Home.vue";
import Blank from "./routes/Blank.vue";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: "/", component: Home
  },
  { path: '/:pathMatch(.*)', component: Blank }
  ]
});
