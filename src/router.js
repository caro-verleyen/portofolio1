import { createRouter, createWebHistory } from "vue-router";
import TheContact from "@/components/TheContact.vue";

import notFound from "@/components/notFound.vue";
import aPropos from "@/components/aPropos.vue";
const router = createRouter({
  history: createWebHistory(import.meta.BASE_url),
  routes: [
    {
      path: "/",
      name: "aPropos",
      component: aPropos,
    },
    {
      path: "/TheContact",
      name: "TheContact",
      component: TheContact,
    },

    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: notFound,
    },
  ],
});

export default router;
