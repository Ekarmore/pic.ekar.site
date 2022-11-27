<script setup>
import { ref } from 'vue'
const imgShow = ref(true)
const item = ref(0)
const List = ref([
  {
    id: 1,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/ab5b28db7d2a45dc913af1fe7ffd351e?attname=Her_1.webp',
  },
  {
    id: 2,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/a50bdd51a5b548eda9b17cbcec5ae4f5?attname=Her_4.webp',
  },
  {
    id: 3,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/80b67c0c38884282a8011ce52a30a50b?attname=Her_3.webp',
  },
  {
    id: 4,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/7bd5dc6fbe8745fabc246e3d3a092e57?attname=Her_2.webp',
  },
])
const newVh = ref(`${window.innerHeight}px`)

const Next = () => {
  imgShow.value = false
  setTimeout(() => {
    imgShow.value = true
    if (item.value < List.value.length - 1)
      item.value++
    else
      item.value = 0
  }, 200)
}

const Prev = () => {
  imgShow.value = false
  setTimeout(() => {
    imgShow.value = true
    if (item.value >= 1)
      item.value--
    else
      item.value = List.value.length - 1
  }, 100)
}
</script>

<template>
  <section class="flex flex-wrap justify-center items-center" :style="{ height: newVh }">
    <div class="items-center flex">
      <transition name="imgAnimate">
        <img v-show="imgShow" class="max-h-md md:max-h-xl 2xl:max-h-2xl max-w-full p-2" :src="List[item].srcUrl" alt="" @click="Next">
      </transition>
    </div>
    <div class="text-center absolute bottom-7 items-center text-xs">
      <span hover:bg-black hover:text-white pl-2 pr-2 font-serif @click="Prev">Prev</span>
      <span text-xs pl-1 pr-1>/</span>
      <span hover:bg-black hover:text-white pl-2 pr-2 font-serif @click="Next">Next</span>
      <span font-serif font-xs pl-2>({{ List[item].id }} of {{ List.length }})</span>
    </div>
  </section>
</template>
