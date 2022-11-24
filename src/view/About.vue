<script setup>
import { defineEmits, watchEffect } from 'vue'

const emit = defineEmits(['isShowNav'])

watchEffect(() => {
  emit('isShowNav', true)
})
</script>

<template>
  <main class="me-container">
    <article class="me-box">
      <p class="me-text-start">
        Hello,yo!
      </p>
      <p class="about-content">
        我是<a p-1 font-serif text-sm font-black class="Ekar" href="">yekmat</a>,来自这颗蓝色星球某一处的氧气呼吸者,前端开发者,自由摄影师。<br>
      </p>
      <p class="about-content">
        我创建了这个网站并在这里放了一些自己拍摄的照片用于归纳与分享,你可以在这里看到我在做的一些摄影项目,希望你会喜欢。<br>
      </p>
      <p class="about-content">
        多说无益,在这里或许你更应该从照片里了解我。
      </p>
      <p class="about-content">
        所以,<router-link class="font-bold font-serif italic p-1" to="/">
          点击我开始观看作品 >
        </router-link>
      </p>
      <hr class="me-hr">
      <section class="about-link-box">
        <p class="about-content">
          除此之外,你也可以通过以下方式找到我:
        </p>
        <a class="about-link" href="https://www.instagram.com/ekarmore/">· instagram</a>
        <a class="about-link" href="mailto:earthb0y@outlook.com">· earthb0y@outlook.com</a>
        <a class="about-link" href="https://space.bilibili.com/390593000">· bilibili</a>
      </section>
    </article>
  </main>
</template>

<style>
.about-content {
  @apply mb-2 font-serif md:mb-5 leading-8 text-gray-800 text-xs
}

.startBox {
  @apply mt-5 mb-5 text-sm
}

.getStart {
  @apply p-0.5 font-serif
}

.about-link {
  @apply text-sm font-serif italic mt-2;
}

.me-box {
  @apply mx-auto w-full md:w-10/12 xl:w-8/12
}

.me-container {
  @apply md:pt-14 pt-24 mx-auto lg:ml-96 xl:ml-80 w-4/5 lg:w-3/5 md:w-1/2
}

.me-text-end {
  @apply font-mono text-sm leading-8
}

.me-hr {
  @apply border-black mt-10 mb-10 w-24 mx-auto
}

.me-text-start {
  @apply font-serif italic text-xl mb-5 font-bold
}

.about-link-box {
  @apply flex flex-col text-sm mb-10 justify-between
}
</style>

