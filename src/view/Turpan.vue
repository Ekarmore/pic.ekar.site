<script setup>
import { ref } from 'vue'
const imgShow = ref(true)
const item = ref(0)
const List = ref([
  {
    id: 1,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/ad3faf323fd4485cb6fd1e2e42792e29?attname=T_1.webp',
  },
  {
    id: 2,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/125351ac55ae42e386805e902a3031f8?attname=T_2.webp',
  },
  {
    id: 3,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/2d791558f6e14965a7cb6410bbba5130?attname=T_19.webp',
  },
  {
    id: 4,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/945a6c76f91b4c38861ce9925e77fd1c?attname=T_24.webp',
  },
  {
    id: 5,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/db17c2f40aae43c8a2fbbb138004f179?attname=T_4.webp',
  },
  {
    id: 6,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/4ad7bc0c47a74bd4a8c1fa8499018db8?attname=T_3.webp',
  },
  {
    id: 7,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/ef58359b583546038b552e02857baae4?attname=T_272.webp',
  },
  {
    id: 8,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/985a64f8d11c4843a19f9dd9d7c108e0?attname=T_37.webp',
  },
  {
    id: 9,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/51d5af04282c43ac99fe03c77ed5f16b?attname=T_32.webp',
  },
  {
    id: 10,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/750d50c5567441a0acd0a0bb6d9f07b7?attname=T_0000.webp',
  },
  {
    id: 11,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/72b62b8d33b54431beef252b8bda8e3f?attname=T_5.webp',
  },
  {
    id: 12,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/1c20e90872b0444ca7e550de137e45da?attname=T_28.webp',
  },
  {
    id: 13,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/23f2591003c94f3398d4897ef121b8b5?attname=T_36.webp',
  },
  {
    id: 14,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/55c30e130afc447e9560d8756d638f8c?attname=T_15.webp',
  },
  {
    id: 15,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/10ef8b3e74c7403f927c4144d5583109?attname=T_4xx.webp',
  },
  {
    id: 16,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/67be24f4443e44029cd11f90ac6839ca?attname=T_10.webp',
  },
  {
    id: 17,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/304e384f563b42fbac57264365da648a?attname=T_35.webp',
  },
  {
    id: 18,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/7af45e21f24844968c2d6d9ab5f774ca?attname=T_6.webp',
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
    <div class="text-center absolute bottom-7 items-center text-xs">
      <span md:hover:bg-black md:hover:text-white pl-2 pr-2 font-serif @click="Prev">Prev</span>
      <span text-xs pl-1 pr-1>/</span>
      <span md:hover:bg-black md:hover:text-white pl-2 pr-2 font-serif @click="Next">Next</span>
      <span font-serif font-xs pl-2>({{ List[item].id }} of {{ List.length }})</span>
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
