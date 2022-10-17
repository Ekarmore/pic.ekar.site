<script setup>
import pic1 from '../assets/T_1.webp'
import pic2 from '../assets/T_2.webp'
import pic3 from '../assets/T_19.webp'
import pic4 from '../assets/T_24.webp'
import {useImgLoadNew} from '../utils/LoadingNew'
import { ref, watchEffect, watch, onMounted, reactive } from 'vue'
import { useImgLoad } from '../utils/Loading'
import { useModal } from '../utils/modalControl'
// import { useIntersectionObserver } from '@vueuse/core'


// loading
const { imgLoad, imgLoad2, imgLoad3, imgLoad4, a, a1, a2, a3 } = useImgLoad()
useModal(a, a1, a2, a3)


// pic animate

const pic = ref('pic')
const openPic = ref('openPic')
const closePic = ref('closePic')

//control modal

const imgs = reactive([
  {name:'T_1',src:pic1},
  {name:'T_2',src:pic2},
  {name:'T_3',src:pic3},
  {name:'T_4',src:pic4},
])

const imgSrc = ref('')

imgSrc.value = pic1

const i = ref(0)

const next = ()=>{

if(i.value<imgs.length-1){
  i.value += 1
}else{
  i.value = 0
}
imgSrc.value = imgs[i.value].src
}
const prev = () =>{

if(i.value>=1){
  i.value -= 1
}
else{
 i.value = 0
}
imgSrc.value = imgs[i.value].src
}

</script>
<template>
  <div>
    <!-- new pic -->
    <section class="picture_container_new" >
      <div ref="colBox" class="col-box-new">
        <img @load="imgLoad" :key="1111" class="picNew" :src='imgSrc' alt="">
      </div>
      <div class="img-control"><div class="prev" @click="prev">prev</div> / <div class="next" @click="next">next</div></div>
    </section>

    <!-- <section class="hp-loading" v-show="!(a&&a1&&a2&&a3)">
      <div class="loading">
        <div></div>
      </div>
    </section> -->
  </div>
</template>

<style>
.prev{
@apply  duration-200 pr-0.5 pl-0.5 ease-in-out inline-block cursor-pointer hover:-translate-x-0.5
}
.next{
@apply  duration-200 pr-0.5 pl-0.5 ease-in-out inline-block cursor-pointer hover:translate-x-0.5
}
.img-control{
@apply text-sm font-mono
}
.closePic {
  @apply opacity-0 duration-500 ease-in-out 
}

.openPic {
  @apply opacity-100 duration-500 ease-in-out 
}


.picNew {
  @apply h-full w-auto max-w-fit;
}

.col-box-new {
  @apply pt-16 md:p-5 md:h-5/6 ;
  }

.picture_container_new {
  @apply h-screen flex flex-col justify-center items-center;
}
</style>
