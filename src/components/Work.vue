<script setup>
import Nav from './Nav.vue'
</script>

<template>
<div>
<div class="Work-container">
<div class="title-container">
<h1 class="title-text">Unnoticed 1</h1>
<h1 class="title-text2">江边</h1>
<p class="about-text">说说我最近常去的江边，起初大概是因为离我的居所很近加之所在的大学城岛也并不大，如果想要出门走走会很快就走到江边。但以前大多都会骑车路过，所以会没有留意到许多。很多次路过环岛的几处江边觉得可能会有自己想要走近看看的风景可也没有真正的停下来去看，之后因为空闲时间变多和去江边实在是容易，会常常在江边徒步。在江边行走几次之后我会感到有些奇怪，江水将岛分割了起来，这让江边成为了岛上不只是地理上的最边缘，被扔在草坪上生产日期是前几个月的食品包装袋或是被植缠满的生锈单车都在说明着这里鲜有被打理的时候。好在它并不就此死寂，当走在江边会看到许多景象，它们由充满生机的部分构成。</p>
</div>
<div class="pic-container">
<img src="../assets/1.PNG" alt="">
</div>
</div>
</div>
</template>

<style >
.Work-container{
@apply w-full h-full mt-20
}
.title-container{
@apply w-11/12 xl:w-2/5 mx-auto leading-7 italic
}
.title-text{
@apply text-2xl  italic
}
.title-text2{
@apply text-2xl mb-5 italic
}
.pic-container{
@apply w-11/12 h-96 xl:w-2/5 mx-auto mt-10 mb-20
}
</style>
