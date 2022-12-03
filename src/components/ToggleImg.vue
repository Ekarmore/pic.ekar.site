<script setup>
import { ref } from 'vue'
import { turpanList } from '../utils/imgList'
const props = defineProps(
  {
    list: turpanList,
  },
)
const imgShow = ref(true)
const item = ref(0)
const Next = (List) => {
  imgShow.value = false
  setTimeout(() => {
    if (item.value < List.length - 1)
      item.value++
    else
      item.value = 0
  }, 200)
}

const Prev = (List) => {
  imgShow.value = false
  setTimeout(() => {
    if (item.value >= 1)
      item.value--
    else
      item.value = List.length - 1
  }, 100)
}
</script>

<template>
  <div class="text-center absolute bottom-7 items-center text-xs">
    <span md:hover:bg-black md:hover:text-white pl-2 pr-2 font-serif @click="Prev(props.list)">Prev</span>
    <span text-xs pl-1 pr-1>/</span>
    <span md:hover:bg-black md:hover:text-white pl-2 pr-2 font-serif @click="Next(props.list)">Next</span>
    <!-- <span font-serif font-xs pl-2>({{ List[item].id }} of {{ List.length }})</span> -->
  </div>
</template>
