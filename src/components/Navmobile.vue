<script setup>
import { reactive, ref } from 'vue'
const showModal = ref(false)
const changeMenu = ref(false)
const [openL1, openL2, openL3] = [ref('openL1'), ref('openL2'), ref('openL3')]
const [closeL1, closeL2, closeL3] = [ref('closeL1'), ref('closeL2'), ref('closeL3')]
const [line1, line2, line3] = [ref('line1'), ref('line2'), ref('line3')]
const newVh = ref(`${window.innerHeight}px`)
const navList = ref([
  { item: 1, to: 'Unnoticed', name: 'Unnoticed (Ongoing)' },
  { item: 2, to: 'Turpan', name: 'Turpan' },
  { item: 3, to: 'AnotherLandscape', name: 'Another Landscape (Ongoing)' },
  { item: 4, to: 'NeverKnowhowmuchiloveyou', name: ' Never Know how much i love you (Ongoing)' },
  { item: 5, to: 'about', name: 'About' },
])
const handleModal = () => {
  showModal.value = !showModal.value
  changeMenu.value = !changeMenu.value
}
// 唤起或关闭Modal
const closeModal = () => {
  showModal.value = false
  changeMenu.value = false
}
// Modal框不可以拖动
const touchMove = (event) => {
  event.preventDefault()
}
</script>

<template>
  <main>
    <!-- nav-mobile -->
    <section class="nav-mobile">
      <div bg-white absolute flex justify-between z-50 items-center h-16 w-full>
        <span ml-5 font-serif text-lg @click="closeModal"><router-link to="/">Ekar</router-link></span>
        <span class="nav-icon" @click="handleModal">
          <span :class="[changeMenu ? openL1 : closeL1, line1]" />
          <span :class="[changeMenu ? openL2 : closeL2, line2]" />
          <span :class="[changeMenu ? openL3 : closeL3, line3]" />
        </span>
      </div>
      <transition name="fade">
        <div v-show="showModal" ref="mobileModal" :style="{ height: newVh }" class="nav-mobile-modal" @touchmove="touchMove">
          <div class="modal-text-container" @click="closeModal">
            <span v-for="navItem in navList" :key="navItem.item" flex text-sm font-serif m-2 text-gray-400>
              <router-link active-class="active" :to="navItem.to">{{ navItem.name }}</router-link>
            </span>
            <footer text-xs font-serif op50 absolute bottom-8>
              Design and create by <a href="">Ekar</a> in 2022
            </footer>
          </div>
        </div>
      </transition>
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
@apply  w-full md:hidden z-50;
}
.nav-mobile-bar {
@apply bg-white absolute flex justify-between z-50 items-center h-16 w-full;
}
.nav-mobile-modal {
  @apply absolute top-0 bg-white w-full z-10 ;
}
.modal-text-container {
  @apply flex flex-col items-center mt-24;
}
.modal-text {
  @apply  font-thin text-gray-500 text-center font-mono m-2;
}
.nav-mobile-title {
  @apply ml-5 font-mono;
}
.nav-mobile-footer{
@apply text-center text-xs text-gray-500 absolute bottom-5 font-mono
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
