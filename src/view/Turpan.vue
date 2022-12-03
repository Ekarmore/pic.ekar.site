<script setup>
import { defineProps, onMounted, ref, watch } from 'vue'
import { turpanList } from '../utils/imgList'
import ToggleImgVue from '../components/ToggleImg.vue'
const imgShow = ref(true)
const item = ref(0)
const newVh = ref(`${window.innerHeight}px`)
const Next = () => {
  imgShow.value = false
  setTimeout(() => {
    if (item.value < turpanList.value.length - 1)
      item.value++
    else
      item.value = 0
  }, 200)
}

const Prev = () => {
  imgShow.value = false
  setTimeout(() => {
    if (item.value >= 1)
      item.value--
    else
      item.value = turpanList.value.length - 1
  }, 100)
}

const imgLoad = () => {
  setTimeout(() => {
    imgShow.value = true
  }, 50)
}
</script>

<template>
  <section class=" flex flex-wrap justify-center items-center" :style="{ height: newVh }">
    <div class="items-center flex">
      <transition name="imgAnimate">
        <img v-show="imgShow" id="imgs" class="max-h-md md:max-h-xl 2xl:max-h-2xl max-w-full p-2" :src="turpanList[item].srcUrl" alt="" @load="imgLoad" @click="Next">
      </transition>
    </div>
    <!-- <ToggleImgVue :list="turpanList" /> -->
    <div class="text-center absolute bottom-7 items-center text-xs">
      <span md:hover:bg-black md:hover:text-white pl-2 pr-2 font-serif @click="Prev">Prev</span>
      <span text-xs pl-1 pr-1>/</span>
      <span md:hover:bg-black md:hover:text-white pl-2 pr-2 font-serif @click="Next">Next</span>
      <span font-serif font-xs pl-2>({{ turpanList[item].id }} of {{ turpanList.length }})</span>
    </div>
  </section>
</template>

<style>
.imgAnimate-enter-active,
.imgAnimate-leave-active {
  @apply opacity-100  duration-700 ease-in-out;
}

.imgAnimate-enter-from,
.imgAnimate-leave-from {
  @apply opacity-0  duration-700 ease-in-out;
}
</style>
