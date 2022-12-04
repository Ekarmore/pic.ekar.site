<script setup>
import { computed } from '@vue/reactivity'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { anotherLandscapeList, neverKnowList, turpanList, unnoticedList } from '../utils/imgList'
import toggleImg from '../components/ToggleImg.vue'
import { newVh } from '../utils/fixHeight'
const imgShow = ref(false)
const item = ref(0)
const routerInfo = useRouter()
const dynamicList = computed(() => {
  if (routerInfo.currentRoute.value.fullPath === '/')
    return neverKnowList.value
  if (routerInfo.currentRoute.value.fullPath === '/Turpan')
    return turpanList.value
  if (routerInfo.currentRoute.value.fullPath === '/Unnoticed')
    return unnoticedList.value
  if (routerInfo.currentRoute.value.fullPath === '/AnotherLandscape')
    return anotherLandscapeList.value
  if (routerInfo.currentRoute.value.fullPath === '/NeverKnowhowmuchiloveyou')
    return neverKnowList.value
})

const pageCurrent = (cur) => {
  item.value = cur
}
const handleImgShow = (show) => {
  imgShow.value = show
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
        <img v-show="imgShow" class="max-h-md md:max-h-xl 2xl:max-h-2xl max-w-full p-2" :src="dynamicList[item].srcUrl" alt="" @load="imgLoad" @click="Next">
      </transition>
    </div>
    <toggleImg
      :info="dynamicList"
      @page-current="pageCurrent"
      @handle-img="handleImgShow"
    >
      <span font-serif font-xs pl-2>({{ dynamicList[item].id }} of {{ dynamicList.length }})</span>
    </toggleImg>
  </section>
</template>

<style>
.imgAnimate-enter-active,
.imgAnimate-leave-active {
  @apply opacity-100 translate-y-0 duration-700 ease-in-out;
}

.imgAnimate-enter-from,
.imgAnimate-leave-from {
  @apply opacity-0 translate-y-3  duration-700 ease-in-out;
}
</style>
