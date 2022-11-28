<script setup>
import { ref } from 'vue'
const imgShow = ref(true)
const item = ref(0)
const List = ref([
  {
    id: 1,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/511d72c4df3b4ab4aacc169b05478df1?attname=AL_7.webp',
  },
  {
    id: 2,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/4c210d6907ae4ec9a340174e61901113?attname=AL_9.webp',
  },
  {
    id: 3,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/03595704918442d3823478786ce990cf?attname=AL_11.webp',
  },
  {
    id: 4,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/d802f7104cd24aa3bf9f91586e93d9d4?attname=AL_1.webp',
  },
  {
    id: 5,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/9d7936985b5242ba9d84b531f0b73bc2?attname=AL_3.webp',
  },
  {
    id: 6,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/c9261febfa55467794e2351957777efe?attname=AL_4.webp',
  },
  {
    id: 7,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/7f7ecdd8008f48a4bcdb16b4cbda75b8?attname=AL_5.webp',
  },
])
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
        <img v-show="imgShow" class="max-h-md md:max-h-xl 2xl:max-h-2xl max-w-full p-2" :src="List[item].srcUrl" alt="" @load="imgLoad" @click="Next">
      </transition>
    </div>
    <div class="text-center absolute bottom-7 -z-10 items-center text-xs">
      <span md:hover:bg-black md:hover:text-white pl-2 pr-2 font-serif @click="Prev">Prev</span>
      <span text-xs pl-1 pr-1>/</span>
      <span md:hover:bg-black md:hover:text-white pl-2 pr-2 font-serif @click="Next">Next</span>
      <span font-serif font-xs pl-2>({{ List[item].id }} of {{ List.length }})</span>
    </div>
  </section>
</template>

<style>

</style>

