<script setup>
import { ref,defineEmits,watch, watchEffect } from 'vue'

const emit = defineEmits(['isShowNav'])

watchEffect(()=>{
  emit("isShowNav")
})
</script>
<template>

<section class="me-container">
<p  class="me-text">Hey,我是YEKMAT,来自这颗蓝色星球某一处的氧气呼吸者,前端开发者,网页设计师,自由摄影师。</p><br/>
<p class="me-text">通过偶然的机会,我开始喜欢上编程并开始学习前端以及试图用编程的方式实现一些有趣的想法,这个网站的创建是其中之一,深受开源精神和互联网分享精神的打动,我也收录了一些自己创造的或是收集到的内容在网站内集中分享以作为享受者的回馈,它们当中有的关于前端开发,有的关于设计,希望它们能给你带来一些帮助或成为灵感的来源。</p><br/>
<p class="me-text"> 同时我热爱拍照,如果你也视一些独特的光景为珍宝或仅仅是喜欢拍照,也可以来我的摄影个站看看我在做的一些摄影项目,谈谈你的感受亦或是由于志同道合成为好友,一起聊聊拍照和参与一些摄影社群活动。</p><br/>
<hr class="me-hr" />
<p class="me-text"> 除了这里,你也可以在 Github 或 BiliBili 以及 Ins 找到我
当然,你可以通过邮件与我取得更直接的联系 Earthb0y@outlook.com
最后,祝你度过快乐的一天,再见。</p>
</section>

</template>


<style >
.me-container{
@apply md:pt-20 pt-24 mx-auto w-4/5 lg:w-2/5 md:w-6/12 md:absolute md:left-80 lg:left-1/3  
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
    