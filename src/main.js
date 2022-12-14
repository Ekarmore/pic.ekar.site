import { createApp } from 'vue'
import '../public/style.css'
import App from './App.vue'
import router from './router'
import './index.css'
import 'uno.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

