<script setup>
import Nav from "./components/Nav.vue";
import {ref} from 'vue'
import {useTitle} from './utils/title'
 
useTitle()

const ShowNav = ref(false)
const isShowNav = (isTrue) =>{
ShowNav.value = isTrue
}

</script>
<template>
  <div v-show="ShowNav" class="nav">
    <Nav />
  </div>
  <router-view @isShowNav="isShowNav" v-slot="{ Component }">
    <transition name="globalAnimate">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<style>
.globalAnimate-enter-active,
.globalAnimate-leave-active {
  @apply md:opacity-100 md:translate-y-0 md:duration-700 ease-in-out;
}

.globalAnimate-enter-from,
.globalAnimate-leave-from {
  @apply md:opacity-0 md:translate-y-5 md:duration-700 ease-in-out;
}

</style>
