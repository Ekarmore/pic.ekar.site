<script setup >
import { onMounted, ref } from 'vue';
const isShow = ref(false)


</script>
<template>
<div v-show="!isShow" class="loading">Wait a moment please ...</div>
</template>
    
<style >

</style>
    