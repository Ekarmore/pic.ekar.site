<template>

    <!-- <main  v-show='!a&&!a1&&a2&&a3'> -->
      <main  v-show='true'>
      <header class="header">
        <router-link to="/">Ekar</router-link>
        <p class="title-two">Photographer</p>
      </header>
      <section class="catalog">
        <div class="img-a">
          <router-link class="link" to="Unnoticed">Unnoticed</router-link><img @load="imgLoad" class="img-card" src="../assets/Unnoticed/Pic1.jpg"
            alt="">
        </div>
        <div class="img-a">
          <router-link class="link" to="Turpan">Turpan</router-link><img @load="imgLoad2" class="img-card" src="../assets/Turpan/001.jpg" alt="">
        </div>
      </section>
      <section class="catalog-2">
        <div class="img-a">
          <router-link class="link" to="AnotherLandscape">Another Landscape</router-link><img @load="imgLoad3" class="img-card" src="../assets/Pic2.jpg"
            alt="">
        </div>
        <div class="img-a">
          <router-link class="link" to="page">Coming Soon</router-link><img @load="imgLoad4" class="img-card" src="../assets/Zw.jpg" alt="">
        </div>
      </section>
      <footer class="footer">Design and create by <a class="footer-link" href="">Ekar</a> in 2022
      </footer>
    </main>
    <section class="hp-loading" v-show="(a&&a1&&a2&&a3)">
      <!-- <p>Ekar Photograph</p> -->
      <div class="loading">
            <div></div>
        </div>
    </section>
</template> 

<script setup>
import {ref} from 'vue'

// 判断照片是否加载完成
const [a,a1,a2,a3] = [ref(false),ref(false),ref(false),ref(false)]
const [imgLoad, imgLoad2, imgLoad3, imgLoad4] = [() => { a.value = true }, () => { a1.value = true }, () => { a2.value = true }, () => { a3.value = true }]


</script>
