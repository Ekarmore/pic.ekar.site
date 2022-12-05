<script setup>
import { useMouse } from '@vueuse/core'
import { onMounted, ref, watchEffect } from 'vue'
const cursor = ref(null)
const { x, y } = useMouse()
onMounted(() => {
  watchEffect(() => {
    cursor.value.style.top = `${y.value - 8}px`
    cursor.value.style.left = `${x.value - 8}px`
  })
})
</script>

<template>
  <Teleport to=".nav-pc">
    <div ref="cursor" class="cursor" @click="changeMouse" />
  </Teleport>
</template>

<style>
.cursor{
@apply hidden md:flex z-50 justify-center items-center transition-transform duration-200 ease-in-out rounded-full absolute  w-3 h-3  pointer-events-none backdrop-opacity-100 backdrop-invert
}
</style>
