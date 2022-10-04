<script setup>
import { reactive, ref } from "vue";
const showModal = ref(false);
const changeMenu = ref(false);
console.log(changeMenu.value);
const handleModal = () => {
  showModal.value = !showModal.value;
  changeMenu.value = !changeMenu.value;
};
const closeModal = () => {
  showModal.value = !showModal.value;
  changeMenu.value = !changeMenu.value;
};
</script>

<template>
<!-- nav-pc -->
  <section class="nav-pc">
      <h1 class="nav-text2"><router-link to="/">Ekar</router-link></h1>
      <hr class="nav-hr" />
      <div class="nav-pc-textbox">
        <span class="nav-text">
          <router-link active-class="active" to="Unnoticed">Unnoticed</router-link>
        </span>
        <span class="nav-text">
          <router-link active-class="active" to="Turpan">Turpan</router-link>
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
    <footer class="nav-footer">
      Design and create by <a class="footer-link" href="">Ekar</a> in 2022
    </footer>
  </section>
<!-- nav-mobile -->
  <section class="nav-mobile">
    <transition name="fade">
      <div v-show="showModal" class="nav-mobile-modal">
            <div @click="closeModal" class="modal-text-container">
              <span class="modal-text">
                <router-link active-class="active" to="Unnoticed"
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
              <footer class="nav-mobile-footer">
          Design and create by <a class="footer-link" href="">Ekar</a> in 2022
        </footer>
            </div>   
      </div>
    </transition>
    <div class="nav-mobile-bar">
      <span class="nav-mobile-title"><router-link to="/">Ekar</router-link></span>
        <span @click="handleModal" class="nav-mobile-menu">{{
          changeMenu ? "Close" : "Menu"
        }}</span>
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
  @apply  font-thin text-gray-500 font-mono m-1;
}
.nav-mobile-title {
  @apply ml-5 text-sm font-mono;
}
.nav-mobile-menu {
  @apply mr-5 text-sm font-mono;
}
.nav-mobile-footer{
@apply text-center text-xs absolute bottom-5 font-mono
}
.fade-enter-active,
.fade-leave-active {
  @apply opacity-100 duration-300  ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0 duration-75 ease-out ;
}

</style>