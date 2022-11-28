<script setup>
import { ref } from 'vue'
const imgShow = ref(true)
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
</script>

<template>
  <div class="text-center absolute bottom-7 items-center text-xs">
    <span md:hover:bg-black md:hover:text-white pl-2 pr-2 font-serif @click="Prev">Prev</span>
    <span text-xs pl-1 pr-1>/</span>
    <span md:hover:bg-black md:hover:text-white pl-2 pr-2 font-serif @click="Next">Next</span>
    <span font-serif font-xs pl-2>({{ List[item].id }} of {{ List.length }})</span>
  </div>
</template>
