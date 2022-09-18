import{createRouter,createWebHashHistory}from 'vue-router'
import Homepage from './components/Homepage.vue'
import Unnoticed from './components/Unnoticed.vue'
import AnotherLandscape from './components/Another_Landscape.vue'
const router = createRouter({
history:createWebHashHistory(),
scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },
routes:[
    {path:'/',component : Homepage },
    {path:'/Unnoticed',component : Unnoticed},
    {path:'/AnotherLandscape',component : AnotherLandscape},
    // {path:'/Explore',component : Explore},
    // {path:'/turpan',component : turpan},
    // {path:'/unnoticed',component : unnoticed},
    // {path:'/project',component : project},
  
]
})
export default router 