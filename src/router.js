import { createRouter, createWebHistory } from "vue-router";

import part1 from "@/components/part1.vue";
import aPropos from "@/components/aPropos.vue";
const router = createRouter({
  history: createWebHistory(import.meta.BASE_url),
  routes: [
    {
      path: "/",
      name: "aPropos",
      component: aPropos,
    },
  ],
});
export default router;
