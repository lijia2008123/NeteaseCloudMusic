import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router  from './router'
import App from './App.vue'
import 'vant/es/toast/style';
import '@/utils/permission.js'
import '@/assets/iconfont/iconfont.css'

const pinia = createPinia()

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')
