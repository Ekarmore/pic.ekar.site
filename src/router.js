import { createRouter, createWebHashHistory } from "vue-router";
import Unnoticed from "./view/Unnoticed.vue";
import AnotherLandscape from "./view/Another_Landscape.vue";
import Turpan from "./view/Turpan.vue";
import About from "./view/About.vue";
const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 };
  },
  routes: [
    { path: "/", component: Unnoticed,meta:{title:'Unnoticed | Ekar'} },
    { path: "/Unnoticed", component: Unnoticed,meta:{title:'Unnoticed | Ekar'}},
    { path: "/AnotherLandscape", component: AnotherLandscape,meta:{title:'AnotherLandscape | Ekar'} },
    { path: "/Turpan", component: Turpan,meta:{title:'Turpan | Ekar'} },
    { path: "/about", component: About,meta:{title:'About | Ekar'} },
  ],
});
export default router;
