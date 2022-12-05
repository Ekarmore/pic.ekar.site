<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
const tl = gsap.timeline()
onMounted(() => {
  tl.from('#toast', {
    autoAlpha: 0,
    translateY: 20,
    duration: 0.6,
    ease: 'power2',
    delay: 0.2,
  })
  tl.to('#toast', {
    autoAlpha: 0,
    translateY: -20,
    duration: 0.6,
    ease: 'power2',
    delay: 2,
  })
})
</script>

<template>
  <div id="toast" class="absolute h-14 bottom-24 w-full md:w-auto md:top-5 md:right-5 z-50 flex flex-col items-center justify-center rounded-lg p-2 ">
    <div id="tips" class="">
      tips
    </div>
    <div class="text-xs font-serif">
      click the images to switch next one
    </div>
  </div>
</template>

<style>
#tips{
font-family: serif;
font-weight: 800;
}
</style>
