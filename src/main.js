import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import './index.css'
import animated from "animate.css";


const app = createApp(App);
app.use(router)
app.use(animated);
app.mount("#app");