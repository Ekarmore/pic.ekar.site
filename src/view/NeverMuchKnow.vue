<script setup>
import { ref } from 'vue'
import { useImgLoad } from '../utils/Loading'
import { useXScroll } from '../utils/scrollControl'
import { useModal } from '../utils/modalControl'
const { imgLoad, imgLoad2, imgLoad3, imgLoad4, a, a1, a2, a3 } = useImgLoad()
const { colBox, wheel } = useXScroll()
useModal(a, a1, a2, a3)
const newVh = ref(`${window.innerHeight}px`)
</script>

<template>
  <main>
    <section v-show="a && a1 && a2 && a3">
      <section :style="{ height: newVh }" class="picture_container">
        <div ref="colBox" class="col-box" @wheel="wheel">
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/ab5b28db7d2a45dc913af1fe7ffd351e?attname=Her_1.webp" alt="" @load="imgLoad">
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/a50bdd51a5b548eda9b17cbcec5ae4f5?attname=Her_4.webp" alt="" @load="imgLoad4">
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/80b67c0c38884282a8011ce52a30a50b?attname=Her_3.webp" alt="" @load="imgLoad3">
          <img class="pic-end" src="https://s1.vika.cn/space/2022/10/27/7bd5dc6fbe8745fabc246e3d3a092e57?attname=Her_2.webp" alt="" @load="imgLoad2">
        </div>
      </section>
    </section>
    <section v-show="!(a && a1 && a2 && a3)" class="hp-loading">
      <div class="loading">
        <div />
      </div>
    </section>
  </main>
</template>
