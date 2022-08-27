<script setup>
import Nav from './components/Nav.vue'
</script>

<template>
<router-view v-slot="{ Component }">
      <transition name="route">
        <component :is="Component" />
      </transition>
    </router-view>
    <Nav/>
</template>

<style scoped>

</style>
