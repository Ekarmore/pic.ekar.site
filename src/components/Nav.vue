<script setup>

</script>

<template>
<nav class="nav-bar">
<span class="nav-text"> <router-link active-class="active" to="Unnoticed">Unnoticed</router-link></span>
<span class="nav-text">Unnoticed</span>
<span class="nav-text">Unnoticed</span>
<span class="nav-text">Unnoticed</span>
</nav>
</template>

<style scoped>
.nav-bar{
@apply w-2/5 md:w-4/5 xl:w-2/5 mx-auto text-center m-10 flex flex-wrap justify-center 
}
.nav-text{
@apply text-xl mb-2 md:m-5  md:text-base font-serif  font-light text-gray-400 hover:text-black transition-all ease-in-out duration-500
}
.active{
@apply text-black
}
</style>
