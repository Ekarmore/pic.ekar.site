<script setup>
import Nav from "./components/Nav.vue";
import {onMounted, ref} from 'vue'
import {useTitle} from './utils/title'
import mouse from './components/mouse.vue'
useTitle()
const ShowNav = ref(true)
const isShowNav = (isTrue) =>{
ShowNav.value = isTrue
}
</script>
<template>
  <teleport to="body">
    <mouse class="mouse-control" />
  </teleport>

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
  @apply md:blur-0 md:opacity-100 md:translate-y-0 md:duration-700 ease-in-out;
}

.globalAnimate-enter-from,
.globalAnimate-leave-from {
  @apply md:blur-lg md:opacity-0 md:translate-y-5 md:duration-700 ease-in-out;
}

.mouse-control{
@apply hidden md:flex
}
</style>
