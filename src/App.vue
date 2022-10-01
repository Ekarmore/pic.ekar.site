<script setup>
import Nav from './components/Nav.vue'
</script>
<template>

        <Nav />
    <router-view v-slot="{ Component }">
    <transition name="globalAnimate">
        <component :is="Component" />
    </transition>
    </router-view>
</template>
<style>

.globalAnimate-enter-active,
.globalAnimate-leave-active
{
@apply opacity-100 md:translate-y-0 duration-700  ease-in-out;
}

.globalAnimate-enter-from,
.globalAnimate-leave-from {
  @apply opacity-0 md:translate-y-10 duration-700 ease-in-out ;
}
</style>
