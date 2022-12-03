<script setup>
import { defineEmits, watchEffect } from 'vue'

const emit = defineEmits(['isShowNav'])

watchEffect(() => {
  emit('isShowNav', true)
})
</script>

<template>
  <main class="md:pt-24 pt-24 mx-auto md:ml-80 lg:ml-96 xl:ml-80 w-4/5 lg:w-3/5 md:w-1/2">
    <article class="mx-auto w-full md:w-10/12 xl:w-8/12">
      <p class="aboutTitle">
        YEKMAT
      </p>
      <p class="about-content">
        photographer from somewhere on earth
      </p>
      <p class="about-content">
        Here are some photos I took,hope you like it<br>
      </p>
      <p class="about-content">
        maybe you should know me better from the photos here.
      </p>
      <p class="about-content">
        so,<router-link class="getStarted" to="/">
          click here and get started
        </router-link>
      </p>
      <section class="flex flex-col text-sm mt-10 mb-10 justify-between">
        <p class="about-content">
          i'm also here:
        </p>
        <a class="about-link" href="https://www.instagram.com/ekarmore/">· instagram</a>
        <a class="about-link" href="mailto:earthb0y@outlook.com">· earthb0y@outlook.com</a>
        <a class="about-link" href="https://space.bilibili.com/390593000">· bilibili</a>
      </section>
    </article>
  </main>
</template>

<style>
.getStarted{
font-weight: 900;
@apply font-bold border-b border-black font-serif italic
}
.aboutTitle{
font-weight: 900;
@apply text-2xl font-serif italic mb-10
}
.about-content {
  font-weight: 900;
  @apply leading-8 font-serif  text-gray-800 text-xs
}
.about-link {
  font-weight: 900;
  @apply text-sm font-serif mt-2;
}
</style>

