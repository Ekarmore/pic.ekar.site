<script setup>
import { useImgLoad } from "../utils/Loading";
import { useXScroll } from "../utils/scrollControl";
import {useModal} from '../utils/modalControl'
import {ref } from 'vue'
const { imgLoad, imgLoad2, imgLoad3, imgLoad4, a, a1, a2, a3 } = useImgLoad();
const { colBox, wheel } = useXScroll();
useModal(a,a1,a2,a3)
const newVh = ref(window.innerHeight+'px')
</script>
<template>
  <main>
    <section v-show="a && a1 && a2 && a3">
      <section :style="{height:newVh}" class="picture_container">
        <div ref="colBox" class="col-box" @wheel="wheel">
          <img @load="imgLoad" class="pic" src="../assets/Her_1.webp" alt="" />
          <img @load="imgLoad4" class="pic" src="../assets/Her_4.webp" alt="" />
          <img @load="imgLoad3" class="pic" src="../assets/Her_3.webp" alt="" />
          <img @load="imgLoad" class="pic" src="https://i.postimg.cc/VN7gqG2v/DSC-6230.jpg" alt="" />
          <img @load="imgLoad2" class="pic-end" src="../assets/Her_2.webp" alt="" />
        </div>
      </section>
    </section>
    <section class="hp-loading" v-show="!(a && a1 && a2 && a3)">
      <div class="loading">
        <div></div>
      </div>
    </section>
  </main>
</template>

<style>
.text-scroll{
@apply text-center text-xs p-10 font-mono font-normal 
}
.un-box{
  @apply flex flex-col justify-center min-w-fit md:mr-5 2xl:pl-12 2xl:pr-12; 
}
.un-text{
@apply text-xs leading-8 md:leading-8 md:text-sm pl-10 pr-10 md:pl-16 md:pr-16 lg:pl-32 lg:pr-32 xl:pl-48 xl:pr-48 2xl:pr-96 2xl:pl-96
}
.un-title{
@apply text-base font-mono  mb-5 
}
</style>
