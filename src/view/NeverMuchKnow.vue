<script setup>
import { ref } from 'vue'
import images from '../components/images.vue'
import { newVh } from '../utils/fixHeight'
</script>

<template>
  <section class="flex flex-wrap justify-center items-center" :style="{ height: newVh }">
    <images />
  </section>
</template>
