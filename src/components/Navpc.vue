<template>
  <section class="nav-pc">
    <h1 class="nav-pc-title">
      <router-link to="/">
        Ekar
      </router-link>
    </h1>
    <hr class="nav-hr">
    <div id="nav-pc-textbox" class="nav-pc-textbox">
      <span class="nav-text-special">
        <div class="special-line">-</div>
        <router-link active-class="active" to="Unnoticed">Unnoticed (Ongoing)</router-link>
      </span>
      <span class="nav-text-special">
        <div class="special-line">-</div>
        <router-link active-class="active" to="Turpan">Turpan</router-link>
      </span>
      <span class="nav-text-special">
        <div class="special-line">-</div>
        <router-link active-class="active" to="AnotherLandscape">Another Landscape (Ongoing)</router-link>
      </span>
      <!-- <span class="nav-text-special">
        <div class="special-line">-</div><router-link active-class="active" to="NeverKnowhowmuchiloveyou"> Never Know how much i love you (Ongoing)</router-link>
      </span> -->
      <span class="nav-text-special">
        <div class="special-line">-</div>
        <router-link active-class="active" to="about">About</router-link>
      </span>
    </div>
    <footer class="nav-footer">
      Design and create by <a class="footer-link" href="">Ekar</a> in 2022
    </footer>
  </section>
</template>

