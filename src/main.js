import { createApp } from 'vue';

import router from "./router";

/* import font awesome icon component */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
// =====================

import App from './App.vue'

import './assets/index.css';




library.add(fas, fab)
// .use(router)
createApp(App).use(router)
    .component('font-awesome-icon', FontAwesomeIcon).mount('#app')
