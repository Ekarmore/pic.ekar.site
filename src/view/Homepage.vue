<template>
  <div v-show="isShow">
    <main>
      <header class="header">
        <router-link to="Work">Ekar</router-link>
        <p class="title-two">Photographer</p>
      </header>
      <section class="catalog">
        <div class="img-a">
          <router-link class="link" to="Unnoticed">Unnoticed</router-link><img class="img-card" src="../assets/Pic1.jpg"
            alt="">
        </div>
        <div class="img-a">
          <router-link class="link" to="Turpan">Turpan</router-link><img class="img-card" src="../assets/002.jpg" alt="">
        </div>
      </section>
      <div class="catalog-2">
        <div class="img-a">
          <router-link class="link" to="AnotherLandscape">Another Landscape</router-link><img class="img-card" src="../assets/Pic2.jpg"
            alt="">
        </div>
        <div class="img-a">
          <router-link class="link" to="page">Coming Soon</router-link><img class="img-card" src="../assets/Zw.jpg" alt="">
        </div>
      </div>
      <footer class="footer">Design and create by <a class="footer-link" href="https://ekar.site">Ekar</a> in 2022
      </footer>
    </main>
  </div>
  <div class="loading" v-show="!isShow">Wait Please ...</div>
</template> 

<script setup>
import { ref, onMounted, computed } from 'vue';
const isShow = ref(false)

// onMounted(() => {
//   isShow.value=true
// });

window.onload = ()=>{
  isShow.value=true
  return isShow.value
}
console.log(isShow.value);


</script>
