<script setup>
import { useMouse } from '@vueuse/core'
import { onMounted, ref, watchEffect } from 'vue'
const mouse = ref(null)
const { x, y } = useMouse()
onMounted(() => {
  watchEffect(() => {
    mouse.value.style.top = `${y.value - 8}px`
    mouse.value.style.left = `${x.value - 8}px`
  })
})
</script>

<template>
  <Teleport to=".nav-pc">
    <div ref="mouse" class="mouse" @click="changeMouse" />
  </Teleport>
</template>

<style>
.mouse{
@apply hidden md:flex justify-center items-center transition-transform duration-200 ease-in-out rounded-full absolute  w-3 h-3  pointer-events-none backdrop-opacity-100 backdrop-invert
}
</style>
