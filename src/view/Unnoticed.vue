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
          <!-- <article class="un-box"><p class="un-text"><p class="un-title">Unnoticed</p>说说我最近常去的江边,起初大概是因为离我的居所很近加之所在的大学城岛也并不大，如果想要出门走走会很快就走到江边。但以前大多都会骑车路过，所以会没有留意到许多。很多次路过环岛的几处江边觉得可能会有自已想要走近看看的风景可也没有真正的停下来去看，之后因为空闲时间变多和去江边实在是容易，会常常在江边徒步。在江边行走几次之后我会感到有些奇怪，江水将岛分割了起来，这让江边成为了岛上不只是地理上的最边缘，被扔在草坪上生产日期是前几个月的食品包装袋或是被植缠满的生锈单车都在说明着这里鲜有被打理的时候。好在它并不就此死寂，当走在江边会看到许多景象，它们由充满生机的部分构成。<p class="text-scroll">向右滑动 ></p> </p></article> -->
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/683cc5c0c1c64c8cb004fe10bc5d1547?attname=Un_1.webp" alt="" @load="imgLoad">
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/20fa478eeeac431fb7cc19fdaef29837?attname=Un_7.webp" alt="" @load="imgLoad2">
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/c2cd5a7ccd4049e98a69171badde3046?attname=Un_4.webp" alt="" @load="imgLoad3">
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/a7ac57465fa845c9ab895181d20dff20?attname=Un_5.webp" alt="" @load="imgLoad4">
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/1bfe86b890e14229bb5ffa0f05775471?attname=Un_17.webp" alt="">
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/5fa59e5789334087800e2e5820b21765?attname=Un_10.webp" alt="">
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/347ce83efd7342289e7d48857949ba42?attname=Un_8.webp" alt="">
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/c2c5d531500b4ef9833d1577bd3ab382?attname=Un_12.webp" alt="">
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/31595cb2d9364f3cba0b9d07f1a1e606?attname=Un_9.webp" alt="">
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/30cad43ca2324c4eba29db244c3c3f19?attname=Un_18.webp" alt="">
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/d29f2def1b054035a589784aff0b30fa?attname=Un_14.webp" alt="">
          <img class="pic" src="https://s1.vika.cn/space/2022/10/27/4d0987f620184863b1935fc59ec00cd3?attname=Un_13.webp" alt="">
          <img class="pic-end" src="https://s1.vika.cn/space/2022/10/27/6c5edc261e9940a1abb149bf03e1b8c6?attname=Un_11.webp" alt="">
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
