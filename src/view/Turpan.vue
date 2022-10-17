<script setup>
import { ref, watchEffect, watch, onMounted, reactive } from 'vue'
import { useImgLoad } from '../utils/Loading'
import { useXScroll } from '../utils/scrollControl'
import { useModal } from '../utils/modalControl'
import { useIntersectionObserver } from '@vueuse/core'
import { useLazy} from '../utils/lazyLoad'
const { imgLoad, imgLoad2, imgLoad3, imgLoad4, a, a1, a2, a3 } = useImgLoad()
const { colBox, wheel } = useXScroll()
const lazyLoad1 = ref(false)

const target1 = ref(null)

const pic = ref('pic')
const openPic = ref('openPic')
const closePic = ref('closePic')

useModal(a, a1, a2, a3)

// const {lazyLoad} = useLazy(target1)

// watch(lazyLoad,()=>{
//   lazyLoad1.value = lazyLoad.value
//   console.log(lazyLoad1.value);
// })
const imgs = reactive([
  {name:'T_1',src:'src/assets/T_1.webp'},
  {name:'T_2',src:'src/assets/T_2.webp'},
  {name:'T_3',src:'src/assets/T_19.webp'}
])
const imgSrc = ref('src/assets/T_1.webp')

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
watch(i,()=>{
  console.log(i.value);
})
</script>
<template>
  <div>
    <!-- <section v-show="a&&a1&&a2&&a3">
      <section class="picture_container">
        <div ref="colBox" class="col-box" @wheel="wheel">
          <img @load="imgLoad" class="pic" src="../assets/T_1.webp" alt="" />
          <img @load="imgLoad2" class="pic" src="../assets/T_2.webp" alt="" />
          <img @load="imgLoad3" class="pic" src="../assets/T_19.webp" alt="" />
          <img @load="imgLoad4" class="pic" src="../assets/T_24.webp" alt="" />
          <img class="pic" src="../assets/T_4.webp" alt="" />
          <img class="pic" src="../assets/T_3.webp" alt="" />
          <img class="pic" src="../assets/T_272.webp" alt="" />
          <img class="pic" src="../assets/T_292.webp" alt="" />
          <img class="pic" src="../assets/T_0000.webp" alt="" />
          <img ref="target1" :class='[lazyLoad1? openPic:closePic,pic]' src="../assets/T_23.webp" alt="" />
          <img class="pic" src="../assets/T_5.webp" alt="" />
          <img class="pic" src="../assets/T_28.webp" alt="" />
          <img class="pic" src="../assets/T_282.webp" alt="" />
          <img class="pic" src="../assets/T_15.webp" alt="" />
          <img class="pic" src="../assets/T_4xx.webp" alt="" />
          <img class="pic" src="../assets/T_10.webp" alt="" />
          <img class="pic" src="../assets/T_8.webp" alt="" />
          <img class="pic" src="../assets/T_00000.webp" alt="" />
          <img class="pic" src="../assets/T_25.webp" alt="" />
          <img class="pic-end" src="../assets/T_6.webp" alt="" />
        </div>
      </section>
    </section> -->
    <section class="picture_container_new" >
      <div ref="colBox" class="col-box-new">
        <img class="pic-new"  :src="imgSrc" alt="">
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
@apply transform duration-500 ease-in-out inline-block cursor-pointer hover:-translate-x-0.5
}
.next{
@apply transform duration-500 ease-in-out inline-block cursor-pointer hover:translate-x-0.5
}
.img-control{
@apply text-sm font-mono
}
.closePic {
  @apply opacity-0 translate-y-3 duration-500 ease-in-out
}

.openPic {
  @apply opacity-100 translate-y-0 duration-500 ease-in-out
}

.pic-new {
  @apply  h-full min-w-fit md:w-auto;
}

.col-box-new {
  @apply pt-16 md:p-5 md:h-5/6;
  }

.picture_container_new {
  @apply h-screen flex flex-col justify-center items-center;
}
</style>
