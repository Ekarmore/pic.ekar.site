<script setup>

import { ref, defineEmits, watch } from "vue";
const [a, a1, a2, a3] = [ref(false), ref(false), ref(false), ref(false)];
const [imgLoad, imgLoad2, imgLoad3, imgLoad4] = [
  () => {
    a.value = true;
  },
  () => {
    a1.value = true;
  },
  () => {
    a2.value = true;
  },
  () => {
    a3.value = true;
  },
];

const emit = defineEmits(['isShowNav'])

watch([a, a1, a2, a3], () => {
  if (a.value && a1.value && a2.value && a3.value) {
    emit("isShowNav")
  }
})

// 获取 colBox
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
  <div>
    <section v-show="a&&a1&&a2&&a3">
      <section class="picture_container">
        <div ref="colBox" class="col-box" @wheel="wheel">

          <img @load="imgLoad" class="pic" src="../assets/T_1.webp" alt="" />
          <img @load="imgLoad2" class="pic" src="../assets/T_2.webp" alt="" />
          <img @load="imgLoad3" class="pic" src="../assets/T_19.webp" alt="" />    
          <img class="pic" src="../assets/T_4.webp" alt="" />
          <img class="pic" src="../assets/T_0000.webp" alt="" />
          <img class="pic" src="../assets/T_28.webp" alt="" />
          <img class="pic" src="../assets/T_27.webp" alt="" />
          <img class="pic" src="../assets/T_25.webp" alt="" />
          <img class="pic" src="../assets/T_11.webp" alt="" />
          <img class="pic" src="../assets/T_29.webp" alt="" />
          <img class="pic" src="../assets/T_15.webp" alt="" />
          <img class="pic" src="../assets/T_8.webp" alt="" />

        </div>
      </section>
    </section>

    <section class="hp-loading" v-show="!(a&&a1&&a2&&a3)">
      <div class="loading">
        <div></div>
      </div>
    </section>
  </div>
</template>

<style>

</style>
