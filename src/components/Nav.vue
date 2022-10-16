<script setup>
import { reactive, ref } from "vue";
const showModal = ref(false);
const changeMenu = ref(false);
const [openL1,openL2,openL3] = [ref('openL1'),ref('openL2'),ref('openL3')]
const [closeL1,closeL2,closeL3] = [ref('closeL1'),ref('closeL2'),ref('closeL3')]
const [line1,line2,line3] = [ref('line1'),ref('line2'),ref('line3')]

const handleModal = () => {
  showModal.value = !showModal.value;
  changeMenu.value = !changeMenu.value;
};
//唤起或关闭Modal
const closeModal = () => {
  showModal.value = false
  changeMenu.value = false;
};
//Modal框不可以拖动
const touchMove = (event)=>{
  event.preventDefault()
}
</script>

<template>
<main>
<!-- nav-pc -->
  <section class="nav-pc">
      <h1 class="nav-pc-title"><router-link to="/">Ekar</router-link></h1>
      <hr class="nav-hr" />
      <div class="nav-pc-textbox">
        <span class="nav-text">
          <router-link active-class="active" to="Unnoticed">- Unnoticed (Ongoing)</router-link>
        </span>
        <span class="nav-text">
          <router-link active-class="active" to="Turpan">- Turpan</router-link>
        </span>
        <span class="nav-text">
          <router-link active-class="active" to="AnotherLandscape"
            >- Another Landscape (Ongoing)</router-link
          >
        </span>
        <span class="nav-text">
          <router-link active-class="active" to="about">- About</router-link>
        </span>
      </div>
    <footer class="nav-footer">
      Design and create by <a class="footer-link" href="">Ekar</a> in 2022
    </footer>
  </section>
<!-- nav-mobile -->
  <section class="nav-mobile">
    <transition name="fade">
      <div ref="mobileModal" @touchmove="touchMove" v-show="showModal" class="nav-mobile-modal">
            <div @click="closeModal" class="modal-text-container">
              <span class="modal-text">
                <router-link active-class="active" to="Unnoticed"
                  >Unnoticed (Ongoing)</router-link
                >
              </span>
              <span class="modal-text">
                <router-link active-class="active" to="Turpan">Turpan</router-link>
              </span>
              <span class="modal-text">
                <router-link active-class="active" to="AnotherLandscape"
                  >Another Landscape (Ongoing)</router-link
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
      <span @click="closeModal" class="nav-mobile-title"><router-link to="/">Ekar</router-link></span>
        <span @click="handleModal" class="nav-icon">
          <span :class='[changeMenu? openL1:closeL1,line1]' ></span>
          <span :class='[changeMenu? openL2:closeL2,line2]' ></span>
          <span :class='[changeMenu? openL3:closeL3,line3]'></span>
        </span>
    </div>
  </section>
</main>
</template>

<style>
/* icon container */
.nav-icon{
@apply relative h-5 w-7 mr-5;
}
/* icon initial */
.line1{
@apply h-0.5 bg-black w-full  absolute  
}
.line2{
@apply h-0.5 bg-black w-full  absolute top-2 
}
.line3{
@apply h-0.5 bg-black w-full  absolute
}
/* when modal close,nav-icon */
.openL1{
@apply transform rotate-45 top-2 ease-in-out duration-500 !important;
}
.openL2{
@apply translate-x-2 opacity-0 ease-in-out duration-300
}
.openL3{
@apply  transform  -rotate-45 top-2 ease-in-out duration-500 !important;
}
/* when modal open,nav-icon */
.closeL1{
@apply transform rotate-0 top-0 ease-in-out duration-500 !important;
}
.closeL2{
@apply  translate-x-0 opacity-100 ease-in-out duration-300 delay-200
}
.closeL3{
@apply  transform rotate-0 top-4 ease-in-out duration-500 !important;
}
.nav-mobile {
@apply w-full md:hidden;
}
.nav-mobile-bar {
@apply bg-white flex justify-between fixed items-center h-16 w-full;
}
.nav-mobile-modal {
  @apply absolute bg-white w-full h-screen;
}
.modal-text-container {
  @apply flex flex-col items-center mt-28;
}
.modal-text {
  @apply  font-thin text-gray-500 font-mono m-1;
}
.nav-mobile-title {
  @apply ml-5 font-mono;
}
.nav-mobile-footer{
@apply text-center text-xs absolute bottom-5 font-mono
}
.fade-enter-active,
.fade-leave-active {
  @apply opacity-100 translate-y-0 blur-0 duration-500  rounded-none ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  @apply opacity-0 blur-xl -translate-y-7 rounded-3xl duration-500 ease-in-out ;
}


</style>