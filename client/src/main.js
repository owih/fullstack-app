import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ui from '@/UI/index'
import Notifications from '@kyvg/vue3-notification'

import '@/assets/styles/main.scss';

const app = createApp(App);

ui.forEach((component) => {
  app.component(component.name, component);
})

app
  .use(Notifications)
  .use(store)
  .use(router)
  .mount('#app')
