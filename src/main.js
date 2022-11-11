import { createApp } from 'vue'
import '../public/style.css'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

const MODE = import.meta.env.MODE
if (MODE !== 'development') {
  // eslint-disable-next-line no-var, vars-on-top
  var _hmt = _hmt || [];
  (function () {
    const hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?bab3d289d9e246576d5731056315a9b3'
    const s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
  })()
}

