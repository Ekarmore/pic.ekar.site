<script setup>
import { ref } from 'vue'
const props = defineProps(
  ['info'],
)
const emit = defineEmits(['pageCurrent', 'handleImg'])
const item = ref(0)
const imgShow = ref(false)
const Next = () => {
  imgShow.value = false
  emit('handleImg', imgShow.value)
  setTimeout(() => {
    if (item.value < props.info.length - 1) {
      item.value++
      emit('pageCurrent', item.value)
    }
    else {
      item.value = 0
      emit('pageCurrent', item.value)
    }
  }, 200)
}
const Prev = () => {
  imgShow.value = false
  emit('handleImg', imgShow.value)
  setTimeout(() => {
    if (item.value >= 1) {
      item.value--
      emit('pageCurrent', item.value)
    }
    else {
      item.value = props.info.length - 1
      emit('pageCurrent', item.value)
    }
  }, 200)
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
