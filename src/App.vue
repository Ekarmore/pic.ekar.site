<script setup>
import Nav from "./components/Nav.vue";
import {ref} from 'vue'
const ShowNav = ref(false)
const isShowNav = () =>{
ShowNav.value = 'true'
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
  @apply md:opacity-100 md:translate-y-0 md:duration-700  md:ease-in-out;
}

.globalAnimate-enter-from,
.globalAnimate-leave-from {
  @apply md:opacity-0 md:translate-y-5 md:duration-700 md:ease-in-out;
}

</style>
