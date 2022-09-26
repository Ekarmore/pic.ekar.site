<template>
  <div  v-show='a&&a1&&a2&&a3'>
    <main>
      <header class="header">
        <router-link to="Work">Ekar</router-link>
        <p class="title-two">Photographer</p>
      </header>
      <section class="catalog">
        <div class="img-a">
          <router-link class="link" to="Unnoticed">Unnoticed</router-link><img @load="imgLoad" class="img-card" src="../assets/Pic1.jpg"
            alt="">
        </div>
        <div class="img-a">
          <router-link class="link" to="Turpan">Turpan</router-link><img @load="imgLoad2" class="img-card" src="../assets/002.jpg" alt="">
        </div>
      </section>
      <div class="catalog-2">
        <div class="img-a">
          <router-link class="link" to="AnotherLandscape">Another Landscape</router-link><img @load="imgLoad3" class="img-card" src="../assets/Pic2.jpg"
            alt="">
        </div>
        <div class="img-a">
          <router-link class="link" to="page">Coming Soon</router-link><img @load="imgLoad4" class="img-card" src="../assets/Zw.jpg" alt="">
        </div>
      </div>
      <footer class="footer">Design and create by <a class="footer-link" href="https://ekar.site">Ekar</a> in 2022
      </footer>
    </main>
  </div>
    <div class="hp-loading" v-show="!(a&&a1&&a2&&a3)"><p>Ekar Photograph</p></div>
</template> 

<script setup>
import Load from '../components/Load.vue'
import {ref} from 'vue'
const isShow = ref(false)
const a =ref(false)
const a1 =ref(false)
const a2 =ref(false)
const a3 =ref(false)

const imgLoad =()=>{
a.value = true
}
const imgLoad2 =()=>{
console.log(a.value);
a1.value =true
}
const imgLoad3 =()=>{
a2.value = true
}
const imgLoad4 =()=>{
a3.value = true
}


</script>
