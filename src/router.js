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
    { path: "/", component: Turpan },
    { path: "/Unnoticed", component: Unnoticed },
    { path: "/AnotherLandscape", component: AnotherLandscape },
    { path: "/Turpan", component: Turpan },
    { path: "/about", component: About },
  ],
});
export default router;
