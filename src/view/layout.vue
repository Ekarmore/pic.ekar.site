<script setup>
import { ref, watchEffect, watch, onMounted, reactive } from 'vue'
// import picture 
import pic1 from '../assets/T_1.webp'
import pic2 from '../assets/T_2.webp'
import pic3 from '../assets/T_19.webp'
import pic4 from '../assets/T_24.webp'
// import utils
import { useImgLoad } from '../utils/Loading'
import { useModal } from '../utils/modalControl'

const newVh = ref(window.innerHeight+'px')
const picture = ref(null)
const change = ref (true)
const showLoading = ref(true)

// pic animate

// const picNew = ref('picNew')
// const openPic = ref('openPic')
// const closePic = ref('closePic')

const imgs = reactive([
  {name:'T_1.webp',src:pic1},
  {name:'T_2',src:pic2},
  {name:'T_3',src:pic3},
  {name:'T_4',src:pic4},
])

const imgSrc = ref(pic1)

const i = ref(0)

const next = ()=>{
showLoading.value = true
picShow.value = false
if(i.value<imgs.length-1){
  i.value += 1
}else{
  i.value = 0
}
change.value= false
setTimeout(() => {
imgSrc.value = imgs[i.value].src
}, 100);
}
const prev = () =>{
showLoading.value = true 
picShow.value = false

if(i.value>=1){
  i.value -= 1
}
else{
 i.value = imgs.length-1
}
change.value = false
setTimeout(() => {
imgSrc.value = imgs[i.value].src
}, 100);
}

const picShow = ref(false)

const picLoad = ()=>{
 change.value= true
 showLoading.value = false
 picShow.value =true
}

</script>
<template>
  <div>
    <!-- new pic -->
    <section :style='{height:newVh}'  class="picture_container_new" >
      <transition name="loadingAnimate">
      <div class="LoadingIcon" v-show="showLoading">
          <div class="loading">
        <div></div>
      </div>
        </div>
        </transition>
      <!-- <div ref="colBox" class="col-box-new">
        <img @click="next" @load="picLoad" ref="picture" :class="[change?openPic:closePic,picNew]" :src='imgSrc' alt="next">
      </div>-->
      <div ref="colBox" class="col-box-new">
        <transition name="picAnimate">
        <img @click="next" @load="picLoad" v-show="picShow" ref="picture" class="picNew" :src='imgSrc'>
        </transition>
      </div>
      <div class="img-control"><div class="prev" @click="prev">prev</div> / <div class="next" @click="next">next</div></div>
    </section>

  </div>
</template>

<style>
.prev{
@apply  text-xs duration-100 pr-0.5 pl-0.5 ease-in-out inline-block cursor-pointer lg:hover:bg-black lg:hover:text-white
}
.next{
@apply  text-xs duration-100 pr-0.5 pl-0.5 ease-in-out inline-block cursor-pointer lg:hover:bg-black lg:hover:text-white
}
.img-control{
@apply text-sm font-mono absolute bottom-14
}
/* .closePic {
  @apply opacity-0  blur-lg  duration-100 ease-in-out 
}

.openPic {
  @apply opacity-100 blur-0  duration-500 ease-in-out 
} */

.picNew {
  @apply  max-h-96 p-5 md:p-0 ;
}

.col-box-new {
  @apply  h-auto flex flex-col justify-center;
  }

.picture_container_new {
  @apply  flex flex-col justify-center items-center relative;
}
.LoadingIcon{
@apply flex  flex-col justify-center items-center absolute w-full h-full
}

.picAnimate-enter-active,
.picAnimate-leave-active {
  @apply blur-0 opacity-100  duration-700 ease-in-out;
}

.picAnimate-enter-from,
.picAnimate-leave-from {
  @apply blur-lg opacity-0 duration-700 ease-in-out;
}

</style>
