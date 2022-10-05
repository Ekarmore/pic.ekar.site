<script setup>
import { ref,defineEmits, reactive,watch, watchEffect} from "vue";
const [a,a1,a2,a3] = [ref(false), ref(false), ref(false), ref(false)];
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

watch([a,a1,a2,a3],()=>{
if(a.value&&a1.value&&a2.value&&a3.value){
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
          <!-- <div id="pic-about-text" class="pic"><span>Turpan</span></div> -->

          <img @load="imgLoad" class="pic" src="../assets/Turpan_020.jpg" alt="" />

          <img @load="imgLoad2" class="pic" src="../assets/Turpan_02.jpg" alt="" />

          <img @load="imgLoad3" class="pic" src="../assets/Turpan_01.jpg" alt="" />

          <img @load="imgLoad4" class="pic" src="../assets/Turpan_03.jpg" alt="" />

          <img class="pic" src="../assets/Turpan_04.jpg" alt="" />

          <img  class="pic" src="../assets/Turpan_05.jpg" alt="" />

          <img  class="pic" src="../assets/Turpan_06.jpg" alt="" />

          <img  class="pic" src="../assets/Turpan_07.jpg" alt="" />

          <img  class="pic" src="../assets/Turpan_08.jpg" alt="" />

          <img  class="pic" src="../assets/Turpan_010.jpg" alt="" />

          <img  class="pic" src="../assets/Turpan_011.jpg" alt="" />

          <img  class="pic" src="../assets/Turpan_013.jpg" alt="" />

          <img  class="pic" src="../assets/Turpan_014.jpg" alt="" />

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
