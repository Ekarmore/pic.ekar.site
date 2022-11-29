<script setup>
import Navmobile from './components/Navmobile.vue'
import Navpc from './components/Navpc.vue'
import { useTitle } from './utils/title'
import mouse from './components/corsur.vue'

useTitle()
</script>

<template>
  <Navpc />
  <mouse class="mouse-control" />
  <router-view v-slot="{ Component }">
    <transition name="globalAnimate">
      <component :is="Component" />
    </transition>
  </router-view>
  <Navmobile />
</template>

<style>
#nav-pc-textbox:hover ~.cursor{
@apply scale-150 transition-transform duration-200 ease-in-out
}
.globalAnimate-enter-active,
.globalAnimate-leave-active {
  @apply blur-0 opacity-100 translate-y-0 duration-700 ease-in-out;
}

.globalAnimate-enter-from,
.globalAnimate-leave-from {
  @apply blur-lg opacity-0 translate-y-5 duration-700 ease-in-out;
}
</style>
