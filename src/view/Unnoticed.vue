<script setup>
import { ref, defineEmits, watch } from 'vue'

const [a, a1, a2, a3] = [ref(false), ref(false), ref(false), ref(false)]

const [imgLoad, imgLoad2, imgLoad3, imgLoad4] = [() => { a.value = true }, () => { a1.value = true }, () => { a2.value = true }, () => { a3.value = true }]

const emit = defineEmits(['isShowNav'])

watch([a, a1, a2, a3], () => {
  if (a.value && a1.value && a2.value && a3.value) {
    emit("isShowNav")
  }
})

const colBox = ref(null);
// 滚轮事件
const wheel = (event) => {

  //阻止默认事件触发
  // event.preventDefault();
  //滚动
  let disX = ref(event.deltaY)
  let scrollX = setInterval(() => {
    colBox.value.scrollLeft += (disX.value) / 2;
  }, 10);
  setTimeout(() => {
    window.clearInterval(scrollX)
  }, 50);
};
</script>
<template>
  <main>
    <section v-show="a&&a1&&a2&&a3">
      <section class="picture_container">
        <div ref="colBox" class="col-box" @wheel="wheel">
          <!-- <div id="pic-about-text" class="pic"><span>Turpan</span></div> -->

          <img @load="imgLoad" class="pic" src="../assets/Un_1.webp" alt="" />
          <img @load="imgLoad2" class="pic" src="../assets/Un_7.webp" alt="" />
          <img @load="imgLoad3" class="pic" src="../assets/Un_4.webp" alt="" />
          <img @load="imgLoad4" class="pic" src="../assets/Un_5.webp" alt="" />
          <img class="pic" src="../assets/Un_10.webp" alt="" />
          <img class="pic" src="../assets/Un_8.webp" alt="" />
          <img class="pic" src="../assets/Un_12.webp" alt="" />
          <img class="pic" src="../assets/Un_9.webp" alt="" />
          <img class="pic" src="../assets/Un_14.webp" alt="" />
          <img class="pic" src="../assets/Un_13.webp" alt="" />
          <img class="pic" src="../assets/Un_11.webp" alt="" />

        </div>
      </section>
    </section>
    <section class="hp-loading" v-show="!(a&&a1&&a2&&a3)">
      <!-- <p class="loading-text">Ekar</p> -->
      <div class="loading">
        <div></div>
      </div>
    </section>
  </main>
</template>

<style >

</style>
