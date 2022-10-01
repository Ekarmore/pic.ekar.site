<script setup>
import { reactive, ref } from "vue";
const showModal = ref(false);
const changeMenu = ref(false);

const handleModal = () => {
  showModal.value = !showModal.value;
  changeMenu.value = !changeMenu.value;
};
const closeModal = () => {
  showModal.value = !showModal.value;
};
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
          <router-link active-class="active" to="">Turpan</router-link>
        </span>
        <span class="nav-text">
          <router-link active-class="active" to="AnotherLandscape"
            >Another Landscape</router-link
          >
        </span>
        <span class="nav-text">
          <router-link active-class="active" to="about">About</router-link>
        </span>
      </div>
    </nav>
    <footer class="nav-footer">
      Design and create by <a class="footer-link" href="">Ekar</a> in 2022
    </footer>
  </section>

  <section class="nav-mobile">
    <transition name="fade">
      <div v-show="showModal" class="nav-mobile-modal">
        <div @click="closeModal" class="modal-text-container">
          <span class="modal-nav-text">
            <router-link active-class="active" to="/"></router-link>
          </span>
          <span class="modal-text">
            <router-link active-class="active" to="Turpan"
              >Unnoticed</router-link
            >
          </span>
          <span class="modal-text">
            <router-link active-class="active" to="Turpan">Turpan</router-link>
          </span>
          <span class="modal-text">
            <router-link active-class="active" to="AnotherLandscape"
              >Another Landscape</router-link
            >
          </span>
          <span class="modal-text">
            <router-link active-class="active" to="about">About</router-link>
          </span>
        </div>
      </div>
    </transition>
    <div class="nav-mobile-bar">
      <span class="nav-mobile-title">Ekar</span>
      <transition name="menu">
        <span @click="handleModal" class="nav-mobile-menu">{{
          changeMenu ? "Close" : "Menu"
        }}</span>
      </transition>
    </div>
  </section>
</template>

<style>
.nav-mobile {
  @apply bg-white absolute w-full  md:hidden;
}
.nav-mobile-bar {
  @apply bg-white flex justify-between absolute items-center h-16 w-full;
}
.nav-mobile-modal {
  @apply absolute bg-white w-full  h-screen;
}
.modal-text-container {
  @apply flex flex-col items-center mt-28;
}
.modal-text {
  @apply text-xl text-black font-serif m-1;
}
.nav-mobile-title {
  @apply ml-5 font-serif;
}
.nav-mobile-menu {
  @apply mr-5 font-serif;
}

.fade-enter-active,
.fade-leave-active {
  @apply opacity-100 duration-200 ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0 duration-200 ease-in-out;
}

.menu-enter-active,
.menu-leave-active {
  @apply opacity-100 duration-500 ease-in-out;
}

.menu-enter-from,
.menu-leave-to {
  @apply opacity-0 duration-500 ease-in-out;
}
</style>
