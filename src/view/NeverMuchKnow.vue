<script setup>
import { ref } from 'vue'
import { neverKnowList } from '../utils/imgList'
const imgShow = ref(true)
const item = ref(0)
const newVh = ref(`${window.innerHeight}px`)

const Next = () => {
  imgShow.value = false
  setTimeout(() => {
    if (item.value < List.value.length - 1)
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
      item.value = List.value.length - 1
  }, 100)
}
const imgLoad = () => {
  setTimeout(() => {
    imgShow.value = true
  }, 50)
}
</script>

<template>
  <section class="flex flex-wrap justify-center items-center" :style="{ height: newVh }">
    <div class="items-center flex">
      <transition name="imgAnimate">
        <img v-show="imgShow" class="max-h-md md:max-h-xl 2xl:max-h-2xl max-w-full p-2" :src="neverKnowList[item].srcUrl" alt="" @load="imgLoad" @click="Next">
      </transition>
    </div>
    <div class="text-center absolute bottom-7 items-center text-xs">
      <span md:hover:bg-black md:hover:text-white pl-2 pr-2 font-serif @click="Prev">Prev</span>
      <span text-xs pl-1 pr-1>/</span>
      <span md:hover:bg-black md:hover:text-white pl-2 pr-2 font-serif @click="Next">Next</span>
      <span font-serif font-xs pl-2>({{ neverKnowList[item].id }} of {{ neverKnowList.length }})</span>
    </div>
  </section>
</template>
