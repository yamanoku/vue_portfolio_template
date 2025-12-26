import { createApp, vaporInteropPlugin } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(vaporInteropPlugin).use(router).mount('#app')
