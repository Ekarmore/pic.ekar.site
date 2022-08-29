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
@apply xl:w-2/5 mx-auto text-center m-10
}
.nav-text{
@apply text-base font-serif m-5 font-light text-gray-400 hover:text-black transition-all ease-in-out duration-500
}
.active{
@apply text-black
}
</style>
