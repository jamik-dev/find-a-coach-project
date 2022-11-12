import { createApp } from 'vue'
import App from './App.vue'

// importing vuex store
import store from './store/index.js'
//importing router navigation
import router from './router.js'

// creating App
createApp(App).use(router).use(store).mount('#app');