<script setup>
import Nav from "./components/Nav.vue";
import {onMounted, ref} from 'vue'
import {useTitle} from './utils/title'
import mouse from './components/mouse.vue'
useTitle()
const ShowNav = ref(false)
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
  @apply blur-0 opacity-100 translate-y-0 duration-700 ease-in-out;
}

.globalAnimate-enter-from,
.globalAnimate-leave-from {
  @apply blur-lg opacity-0 translate-y-5 duration-700 ease-in-out;
}

.mouse-control{
@apply hidden md:flex
}
</style>
