<script setup>
import {useImgLoad} from '../utils/Loading'
import {useXScroll} from '../utils/scrollControl'
import {useModal} from '../utils/modalControl'
const { imgLoad,imgLoad2,imgLoad3,imgLoad4,a, a1, a2, a3} = useImgLoad()
const {colBox,wheel} = useXScroll()
useModal(a,a1,a2,a3)
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
          <img @load="imgLoad4" class="pic" src="../assets/T_3.webp" alt="" />   
          <img class="pic" src="../assets/T_5.webp" alt="" />
          <img class="pic" src="../assets/T_0000.webp" alt="" />
          <img class="pic" src="../assets/T_28.webp" alt="" />
          <img class="pic" src="../assets/T_23.webp" alt="" />
          <img class="pic" src="../assets/T_10.webp" alt="" />
          <img class="pic" src="../assets/T_15.webp" alt="" />
          <img class="pic" src="../assets/T_4xx.webp" alt="" />
          <img class="pic" src="../assets/T_00000.webp" alt="" />
          <img class="pic" src="../assets/T_6.webp" alt="" />
          <img class="pic-end" src="../assets/T_8.webp" alt="" />
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
