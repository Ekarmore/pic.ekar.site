<script setup>
import { ref } from 'vue'
import { anotherLandscapeList, item, neverKnowList, turpanList, unnoticedList } from '../utils/imgList'
const props = defineProps(
  ['list'],
)

const imgShow = ref(true)
const Next = () => {
  imgShow.value = false
  setTimeout(() => {
    if (item.value < props.list.length - 1)
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
      item.value = props.list.length - 1
  }, 100)
}
</script>

<template>
  <div class="text-center absolute bottom-7 items-center text-xs">
    <span md:hover:bg-black md:hover:text-white pl-2 pr-2 font-serif @click="Prev">Prev</span>
    <span text-xs pl-1 pr-1>/</span>
    <span md:hover:bg-black md:hover:text-white pl-2 pr-2 font-serif @click="Next">Next</span>
    <slot />
  </div>
</template>
