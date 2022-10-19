<script setup>
import { useImgLoad } from "../utils/Loading";
import { useXScroll } from "../utils/scrollControl";
import {useModal} from '../utils/modalControl'
import {ref } from 'vue'
const { imgLoad, imgLoad2, imgLoad3, imgLoad4, a, a1, a2, a3 } = useImgLoad();
const { colBox, wheel } = useXScroll();
useModal(a,a1,a2,a3)
const newVh = ref(window.innerHeight+'px')
console.log(newVh.value)
</script>
<template>
  <main>
    <section v-show="a && a1 && a2 && a3">
      <section :style="{height:newVh}" class="picture_container">
        <div ref="colBox" class="col-box" @wheel="wheel">
          <article class="un-box"><p class="un-text"><p class="un-title">Unnoticed</p>说说我最近常去的江边,起初大概是因为离我的居所很近加之所在的大学城岛也并不大，如果想要出门走走会很快就走到江边。但以前大多都会骑车路过，所以会没有留意到许多。很多次路过环岛的几处江边觉得可能会有自已想要走近看看的风景可也没有真正的停下来去看，之后因为空闲时间变多和去江边实在是容易，会常常在江边徒步。在江边行走几次之后我会感到有些奇怪，江水将岛分割了起来，这让江边成为了岛上不只是地理上的最边缘，被扔在草坪上生产日期是前几个月的食品包装袋或是被植缠满的生锈单车都在说明着这里鲜有被打理的时候。好在它并不就此死寂，当走在江边会看到许多景象，它们由充满生机的部分构成。<p class="text-scroll">向右滑动 ></p> </p></article>
          <img @load="imgLoad" class="pic" src="../assets/Un_1.webp" alt="" />
          <img @load="imgLoad2" class="pic" src="../assets/Un_7.webp" alt="" />
          <img @load="imgLoad3" class="pic" src="../assets/Un_4.webp" alt="" />
          <img @load="imgLoad4" class="pic" src="../assets/Un_5.webp" alt="" />
          <img class="pic" src="../assets/Un_17.webp" alt="" />
          <img class="pic" src="../assets/Un_10.webp" alt="" />
          <img class="pic" src="../assets/Un_8.webp" alt="" />
          <img class="pic" src="../assets/Un_12.webp" alt="" />
          <img class="pic" src="../assets/Un_9.webp" alt="" />
          <img class="pic" src="../assets/Un_18.webp" alt="" />
          <img class="pic" src="../assets/Un_14.webp" alt="" />
          <img class="pic" src="../assets/Un_13.webp" alt="" />
          <img class="pic-end" src="../assets/Un_11.webp" alt="" />
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
