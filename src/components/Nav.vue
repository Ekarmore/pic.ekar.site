<script setup>

</script>

<template>
    <nav class="nav-bar">
        <h1 class="nav-text2">Ekar</h1>
        <hr class="nav-hr" />
        <span class="nav-text">
            <router-link active-class="active" to="/">Catalog</router-link>
        </span>
        <span class="nav-text">
            <router-link active-class="active" to="Unnoticed">Unnoticed</router-link>
        </span>
        <span class="nav-text">
            <router-link active-class="active" to="Turpan">Turpan</router-link>
        </span>
        <span class="nav-text">
            <router-link active-class="active" to="AnotherLandscape">Another Landscape</router-link>
        </span>
        <span class="nav-text">
            <router-link active-class="active" to="/">Coming Soon</router-link>
        </span>
    </nav>
    <footer class="nav-footer">Design and create by <a class="footer-link" href="">Ekar</a> in 2022</footer>
</template>

<style >
.nav-bar {
 @apply flex flex-col justify-center  h-96 p-5 
}

.nav-text {
@apply text-lg m-2 font-serif font-light text-gray-400 hover:text-black transition-all ease-in-out duration-500
    }

.nav-text2 {
@apply text-2xl m-2 font-serif 
    }

.active {
@apply text-black
    }
.nav-hr{
@apply mb-5 border-black
      }
.nav-footer{
@apply text-sm xl:opacity-70 m-5 xl:absolute xl:bottom-5 opacity-0 
}
</style>
