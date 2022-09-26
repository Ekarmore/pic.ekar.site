<script setup >
import { ref } from 'vue';
const isShow = ref(false)


// window.onload =()=>{
//   isShow.value=true
//   console.log('1',isShow.value);
// }

setTimeout(() => {
 isShow.value=true
}, 3000);


</script>
<template>
<div v-show="!isShow" class="loading">Wait a moment please ...</div>
</template>
    
<style >

</style>
    