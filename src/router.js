import { createRouter, createWebHistory } from "vue-router";

// importing components
import CoachDetails from '@/pages/coaches/CoachDetails.vue';
import CoachLists from '@/pages/coaches/CoachLists.vue';
import CoachRegistration from '@/pages/coaches/CoachRegistration.vue';
import ContactCoach from '@/pages/requests/ContactCoach.vue';
import RequestsReceived from '@/pages/requests/RequestsReceived.vue';
import UserAuth from "@/pages/auth/UserAuth.vue";
import NotFound from '@/pages/NotFound.vue';

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
    { path: "/register", component: CoachRegistration },
    { path: "/requests", component: RequestsReceived },
    { path: "/auth", component: UserAuth},
    { path: "/:notFound(.*)", component: NotFound },
  ],
});
export default router;
