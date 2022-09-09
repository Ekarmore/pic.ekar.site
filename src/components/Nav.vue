<script setup>

</script>

<template>
<nav class="nav-bar">
<span class="nav-text"> <router-link active-class="active" to="/">Home</router-link></span>
<span class="nav-text"> <router-link active-class="active" to="Unnoticed">Unnoticed</router-link></span>
<span class="nav-text"> <router-link active-class="active" to="/">portrait</router-link></span>
<span class="nav-text"> <router-link active-class="active" to="/">Coming Soon</router-link></span>
</nav>
</template>

<style >    
.nav-bar{
@apply  w-4/5  md:w-4/5 xl:w-2/5 mx-auto text-center m-10 flex flex-col justify-center lg:flex-row
}
.nav-text{
@apply text-xl m-2 font-serif  font-light text-gray-400 hover:text-black transition-all ease-in-out duration-500
}
.active{
@apply text-black
}
</style>
