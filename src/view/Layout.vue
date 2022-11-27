<script setup>
import { ref } from 'vue'
import { useImgLoad } from '../utils/Loading'
import { useXScroll } from '../utils/scrollControl'
import { useModal } from '../utils/modalControl'
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
// loading
const { imgLoad, imgLoad2, imgLoad3, imgLoad4, a, a1, a2, a3 } = useImgLoad()
useModal(a, a1, a2, a3)
// col wheel
const { colBox } = useXScroll()

const newVh = ref(`${window.innerHeight}px`)

const scrollNext = () => {
  colBox.value.scrollBy({
    left: colBox.value.offsetWidth,
    // left: window.innerWidth / 2,
    behavior: 'smooth',
  })
}

const scrollPrev = () => {
  colBox.value.scrollBy({
    left: -colBox.value.offsetWidth,
    // left: -window.innerWidth / 2,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div>
    <section>
      <section flex items-center :style="{ height: newVh }">
        <div ref="colBox" class="mx-auto relative snap-x h-full pt-24 items-center flex">
          <div class="pr-2 h-full">
            <img class="h-120" :src="List[1].srcUrl" alt="">
          </div>
          <!-- <div class=" bg-gradient-to-r fixed w-24 h-full  from-white" /> -->
          <!-- <div class=" bg-gradient-to-r fixed right-0 w-24 h-full rotate-180 from-white" /> -->
          <div class="w-full items-center text-sm fixed bottom-10 text-center">
            <span hover:bg-black hover:text-white pl-2 pr-2 font-serif @click="scrollPrev">prev</span>
            <span text-xs pl-1 pr-1>/</span>
            <span hover:bg-black hover:text-white pl-2 pr-2 font-serif @click="scrollNext">next</span>
          </div>
        </div>
      </section>
    </section>
    <!-- <section v-show="!(a && a1 && a2 && a3)" class="hp-loading">
      <div class="loading">
        <div />
      </div>
    </section> -->
  </div>
</template>

<style>
</style>
