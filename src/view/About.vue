<script setup>
import {defineEmits,watchEffect } from 'vue'

const emit = defineEmits(['isShowNav'])

watchEffect(()=>{
  emit("isShowNav",true)
})
</script>
<template>

<main class="me-container">
<article class="me-box">
<p  class="me-text">Hey,我是YEKMAT,来自这颗蓝色星球某一处的氧气呼吸者,一名自由摄影师。</p><br/>
<p class="me-text"> 同时我热爱拍照,如果你也视一些独特的光景为珍宝或仅仅是喜欢拍照,也可以来我的摄影个站看看我在做的一些摄影项目,谈谈你的感受亦或是由于志同道合成为好友,一起聊聊拍照和参与一些摄影社群活动。</p><br/>
<hr class="me-hr" />

</article>
</main>

</template>


<style >
.me-box{
@apply mx-auto w-full md:w-10/12 xl:w-9/12
}
.me-container{
@apply md:pt-14 pt-24 md:overflow-y-scroll mx-auto md:ml-96 w-4/5 lg:w-3/5 md:w-1/2 h-screen 
}
.me-text{
@apply font-mono text-sm leading-8 
}
.me-text-end{
@apply font-mono text-sm leading-8
}
.me-hr{
@apply border-black mt-10 mb-10 w-48 mx-auto 
}
</style>
    