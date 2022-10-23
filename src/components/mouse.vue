<script setup>
import { useMouse } from '@vueuse/core'
import {onMounted, ref, watchEffect } from 'vue'
const mouse = ref(null)
const { x, y} = useMouse()

onMounted(()=>{
watchEffect(()=>{
    mouse.value.style.top = `${y.value-10}px`
    mouse.value.style.left = `${x.value-10}px`
})
})


</script>

<template>

<div class="mouse" ref="mouse">
</div>

</template>

<style>
.mouse{
@apply rounded-full border-black absolute  w-4 h-4  z-50 pointer-events-none backdrop-opacity-100 backdrop-invert
}
</style>