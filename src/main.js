import { createApp } from "vue";
import App from "./App.vue";

// importing vuex store
import store from "./store/index.js";
//importing router navigation
import router from "./router.js";
//importing global components
import BaseCard from "@/components/ui/BaseCard.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseBadge from "@/components/ui/BaseBadge.vue";
import BaseSpinner from "@/components/ui/BaseSpinner.vue";
import BaseDialog from "@/components/ui/BaseDialog.vue";
// creating App
createApp(App)
  .use(router)
  .use(store)
  .component("base-card", BaseCard)
  .component("base-button", BaseButton)
  .component("base-badge", BaseBadge)
  .component("base-spinner", BaseSpinner)
  .component("base-dialog", BaseDialog)
  .mount("#app");
