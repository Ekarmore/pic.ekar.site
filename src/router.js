import{createRouter,createWebHashHistory}from 'vue-router'
import Homepage from './view/Homepage.vue'
import Unnoticed from './view/Unnoticed.vue'
import AnotherLandscape from './view/Another_Landscape.vue'
import Turpan from './view/Turpan.vue'
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
    {path:'/Turpan',component : Turpan},
    // {path:'/Explore',component : Explore},
    // {path:'/turpan',component : turpan},
    // {path:'/unnoticed',component : unnoticed},
    // {path:'/project',component : project},
  
]
})
export default router 