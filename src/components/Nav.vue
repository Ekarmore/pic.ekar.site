<script setup>
import {ref} from 'vue'
const showModal = ref(false)

const handleModal = ()=>{
showModal.value = !showModal.value
}
</script>

<template>
    <section class="nav-pc">
        <nav class="nav-pc">
        <h1 class="nav-text2">Ekar</h1>
        <hr class="nav-hr" />
        <div class="nav-pc-textbox">
        <span class="nav-text">
            <router-link active-class="active" to="/"></router-link>
        </span>
        <span class="nav-text">
            <router-link active-class="active" to="Turpan">Unnoticed</router-link>
        </span>
        <span class="nav-text">
            <router-link active-class="active" to="Turpan">Turpan</router-link>
        </span>
        <span class="nav-text">
            <router-link active-class="active" to="AnotherLandscape">Another Landscape</router-link>
        </span>
        <span class="nav-text">
            <router-link active-class="active" to="about">About</router-link>
        </span>
    </div>
    </nav>
    <footer class="nav-footer">Design and create by <a class="footer-link" href="">Ekar</a> in 2022</footer>
    </section>

    <section class="nav-mobile">
    <div class="nav-mobile-bar">
    <span class="nav-mobile-title">Ekar</span>
    <span @click="handleModal" class="nav-mobile-menu">menu</span>
    </div>
    <div v-show="showModal" class="nav-mobile-modal">
        <div class="modal-text-container">
        <span class="modal-nav-text">
            <router-link active-class="active" to="/"></router-link>
        </span>
        <span class="modal-text">
            <router-link active-class="active" to="Turpan">Unnoticed</router-link>
        </span>
        <span class="modal-text">
            <router-link active-class="active" to="Turpan">Turpan</router-link>
        </span>
        <span class="modal-text">
            <router-link active-class="active" to="AnotherLandscape">Another Landscape</router-link>
        </span>
        <span class="modal-text">
            <router-link active-class="active" to="about">About</router-link>
        </span>
    </div>
    </div>
    </section>
</template>

<style >
.nav-mobile{
@apply bg-white absolute w-full  lg:hidden 
}
.nav-mobile-bar{
@apply flex justify-between  items-center h-16
}
.nav-mobile-modal{
height:80vh;
@apply absolute bg-white  w-full 
}
.modal-text-container{
@apply flex flex-col items-center mt-10
}
.modal-text{
@apply text-xl text-black font-serif m-1 
}
.nav-mobile-title{
@apply text-xl ml-2 font-serif
}
.nav-mobile-menu{
@apply text-xl mr-2
}
</style>
