<script setup>
import { ref, watchEffect, watch, onMounted, reactive } from 'vue'
import { useImgLoad } from '../utils/Loading'
import { useXScroll } from '../utils/scrollControl'
import { useModal } from '../utils/modalControl'
import {useLazy} from '../utils/lazyLoad'
// loading
const { imgLoad, imgLoad2, imgLoad3, imgLoad4, a, a1, a2, a3 } = useImgLoad()
useModal(a, a1, a2, a3)
// col wheel
const { colBox, wheel } = useXScroll()

const picture = ref(null)

const {lazyLoad} = useLazy(picture)

watch(lazyLoad,()=>{
  console.log(lazyLoad.value);
})
const newVh = ref(window.innerHeight+'px')
</script>

<template>
  <div>
    <section v-show="a&&a1&&a2&&a3">
      <section class="picture_container" :style="{height:newVh}">
        <div ref="colBox" class="col-box" @wheel="wheel">
          <img @load="imgLoad" class="pic" src="https://s1.vika.cn/space/2022/10/27/ad3faf323fd4485cb6fd1e2e42792e29?attname=T_1.webp" alt="" />
          <img @load="imgLoad2" class="pic" src="https://s1.vika.cn/space/2022/10/27/125351ac55ae42e386805e902a3031f8?attname=T_2.webp" alt="" />
          <img @load="imgLoad3" class="pic" src="https://s1.vika.cn/space/2022/10/27/2d791558f6e14965a7cb6410bbba5130?attname=T_19.webp" alt="" />
          <img @load="imgLoad4" class="pic" src="https://s1.vika.cn/space/2022/10/27/945a6c76f91b4c38861ce9925e77fd1c?attname=T_24.webp" alt="" />
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/db17c2f40aae43c8a2fbbb138004f179?attname=T_4.webp" alt="" />
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/4ad7bc0c47a74bd4a8c1fa8499018db8?attname=T_3.webp" alt="" />
          <img ref="picture" class="pic" src="https://s1.vika.cn/space/2022/10/27/ef58359b583546038b552e02857baae4?attname=T_272.webp" alt="" />
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/985a64f8d11c4843a19f9dd9d7c108e0?attname=T_37.webp" alt="" />
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/51d5af04282c43ac99fe03c77ed5f16b?attname=T_32.webp" alt="" />
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/750d50c5567441a0acd0a0bb6d9f07b7?attname=T_0000.webp" alt="" />
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/72b62b8d33b54431beef252b8bda8e3f?attname=T_5.webp" alt="" />
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/1c20e90872b0444ca7e550de137e45da?attname=T_28.webp" alt="" />
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/23f2591003c94f3398d4897ef121b8b5?attname=T_36.webp" alt="" />
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/55c30e130afc447e9560d8756d638f8c?attname=T_15.webp" alt="" />
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/10ef8b3e74c7403f927c4144d5583109?attname=T_4xx.webp" alt="" />
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/67be24f4443e44029cd11f90ac6839ca?attname=T_10.webp" alt="" />
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/304e384f563b42fbac57264365da648a?attname=T_35.webp" alt="" />
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/2ea3021edd054286ae8e5fee383ec228?attname=T_00000.webp" alt="" />
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/ce01d1cad8284075a837731bf1d3e230?attname=T_25.webp" alt="" />
          <img class="pic-end" src="https://s1.vika.cn/space/2022/10/27/7af45e21f24844968c2d6d9ab5f774ca?attname=T_6.webp" alt="" />
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
