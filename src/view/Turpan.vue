<script setup>
import { defineProps, onMounted, ref, watch } from 'vue'
import images from '../components/images.vue'
const newVh = ref(`${window.innerHeight}px`)
</script>

<template>
  <section class=" flex flex-wrap justify-center items-center" :style="{ height: newVh }">
    <images />
  </section>
</template>

