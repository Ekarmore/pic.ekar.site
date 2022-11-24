<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
const tl = gsap.timeline()
onMounted(() => {
  tl.from('.nav-pc', {
    autoAlpha: 0,
    translateX: -100,
    duration: 0.7,
    ease: 'power1',
  })
})
const navList = ref([
  { item: 1, to: 'Unnoticed', name: 'Unnoticed (Ongoing)' },
  { item: 2, to: 'Turpan', name: 'Turpan' },
  { item: 3, to: 'AnotherLandscape', name: 'Another Landscape (Ongoing)' },
  { item: 4, to: 'NeverKnowhowmuchiloveyou', name: ' Never Know how much i love you (Ongoing)' },
  { item: 5, to: 'about', name: 'About' },
])
</script>

<template>
  <section class="nav-pc" z-10 w-80 hidden md:float-left md:h-screen md:flex md:flex-col>
    <h1 pl-10 text-xl pt-10 mb-5 mt-5>
      <router-link class="linkFont" to="/">
        ekar
      </router-link>
    </h1>
    <hr class="nav-hr">
    <div id="nav-pc-textbox" flex flex-col mt-5 pr-6 pl-6>
      <span v-for="navItem in navList" :key="navItem.item" flex text-xs font-serif m-2 hover:translate-x-1 text-gray-400 hover:text-gray-500 transition-all duration-500 ease-out>
        <div class="special-line">-</div>
        <router-link active-class="active" :to="navItem.to">{{ navItem.name }}</router-link>
      </span>
    </div>
    <footer text-xs font-serif op50 absolute bottom-8 left-8>
      Design and create by <a href="">ekar</a> in 2022
    </footer>
  </section>
</template>

<style>
.linkFont{
font-family:serif;
 font-weight: 900;
}
</style>
