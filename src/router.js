import { createRouter, createWebHashHistory } from 'vue-router'
import Unnoticed from './view/Unnoticed.vue'
import AnotherLandscape from './view/Another_Landscape.vue'
import Turpan from './view/Turpan.vue'
import NeverKnowHowMuchILoveYou from './view/NeverMuchKnow.vue'
import About from './view/About.vue'
// import Layout from './view/Layout.vue'

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 }
  },
  routes: [
    { path: '/', component: NeverKnowHowMuchILoveYou, meta: { title: 'NeverKnowHowMuchILoveYou | ekar' } },
    { path: '/Unnoticed', component: Unnoticed, meta: { title: 'Unnoticed | ekar' } },
    { path: '/AnotherLandscape', component: AnotherLandscape, meta: { title: 'AnotherLandscape | ekar' } },
    { path: '/Turpan', component: Turpan, meta: { title: 'Turpan | Ekar' } },
    { path: '/NeverKnowHowMuchILoveYou', component: NeverKnowHowMuchILoveYou, meta: { title: 'Never Know how much i love you  | ekar' } },
    { path: '/about', component: About, meta: { title: 'About | ekar' } },
    // { path: '/layout', component: Layout, meta: { title: 'About | ekar' } },
  ],
})
export default router
