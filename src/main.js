import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App)

app
  .use(router)
  .use(i18n)
  .mount('#app')
