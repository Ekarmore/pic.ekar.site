<script setup>
import { ref } from 'vue'
const imgShow = ref(true)
const item = ref(0)
const List = ref([
  {
    id: 1,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/683cc5c0c1c64c8cb004fe10bc5d1547?attname=Un_1.webp',
  },
  {
    id: 2,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/20fa478eeeac431fb7cc19fdaef29837?attname=Un_7.webp',
  },
  {
    id: 3,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/c2cd5a7ccd4049e98a69171badde3046?attname=Un_4.webp',
  },
  {
    id: 4,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/a7ac57465fa845c9ab895181d20dff20?attname=Un_5.webp',
  },
  {
    id: 5,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/1bfe86b890e14229bb5ffa0f05775471?attname=Un_17.webp',
  },
  {
    id: 6,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/5fa59e5789334087800e2e5820b21765?attname=Un_10.webp',
  },
  {
    id: 7,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/347ce83efd7342289e7d48857949ba42?attname=Un_8.webp',
  },
  {
    id: 8,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/c2c5d531500b4ef9833d1577bd3ab382?attname=Un_12.webp',
  },
  {
    id: 9,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/31595cb2d9364f3cba0b9d07f1a1e606?attname=Un_9.webp',
  },
  {
    id: 10,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/30cad43ca2324c4eba29db244c3c3f19?attname=Un_18.webp',
  },
  {
    id: 11,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/d29f2def1b054035a589784aff0b30fa?attname=Un_14.webp',
  },
  {
    id: 12,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/4d0987f620184863b1935fc59ec00cd3?attname=Un_13.webp',
  },
  {
    id: 13,
    srcUrl: 'https://s1.vika.cn/space/2022/10/27/6c5edc261e9940a1abb149bf03e1b8c6?attname=Un_11.webp',
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

<style lang="postcss">
.text-scroll{
@apply text-center text-xs p-10 font-mono font-normal
}
.un-box{
  @apply flex flex-col justify-center min-w-fit md:mr-5 2xl:pl-12 2xl:pr-12;
}
.un-text{
@apply text-xs leading-8 md:leading-8 md:text-sm pl-10 pr-10 md:pl-16 md:pr-16 lg:pl-32 lg:pr-32 xl:pl-48 xl:pr-48 2xl:pr-96 2xl:pl-96
}
.un-title{
@apply text-base font-mono  mb-5
}
</style>
