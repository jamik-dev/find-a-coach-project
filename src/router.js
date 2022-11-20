import { createRouter, createWebHistory } from "vue-router";

// importing components
import CoachDetails from '@/pages/coaches/CoachDetails.vue';
import CoachLists from '@/pages/coaches/CoachLists.vue';
import CoachRegistration from '@/pages/coaches/CoachRegistration.vue';
import ContactCoach from '@/pages/requests/ContactCoach.vue';
import RequestsReceived from '@/pages/requests/RequestsReceived.vue';
import UserAuth from "@/pages/auth/UserAuth.vue";
import NotFound from '@/pages/NotFound.vue';
import store from "./store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachLists },
    {
      path: "/coaches/:id",
      component: CoachDetails,
      props: true,
      children: [
        { path: "contact", component: ContactCoach }, // /coaches/c1/contact
      ],
    },
    { path: "/register", component: CoachRegistration, meta: {requiresAuth: true} },
    { path: "/requests", component: RequestsReceived, meta: {requiresAuth: true} },
    { path: "/auth", component: UserAuth, meta: {requiresUnAuth: true}},
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

router.beforeEach(function(to, _, next){
  if(to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnAuth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});
export default router;
