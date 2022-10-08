<script setup>
import { ref, defineEmits, watch, onMounted } from 'vue'
import { useImgLoad } from '../utils/Loading'
import {useXScroll} from '../utils/scrollControl'
import {useTitle} from '../utils/title'

onMounted(()=>{
useTitle()
})
const { imgLoad, imgLoad2, imgLoad3, imgLoad4, a, a1, a2, a3 } = useImgLoad()
const {colBox,wheel} = useXScroll()

const emit = defineEmits(['isShowNav'])

watch([a, a1, a2, a3], () => {
  if (a.value && a1.value && a2.value && a3.value) {
    emit("isShowNav")
  }
})

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
          <img class="pic-end" src="../assets/Un_11.webp" alt="" />

        </div>
      </section>
    </section>
    <section class="hp-loading" v-show="!(a&&a1&&a2&&a3)">
      <div class="loading">
        <div></div>
      </div>
    </section>
  </main>
</template>

<style >

</style>
