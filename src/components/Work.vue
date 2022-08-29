<script >
import Nav from './Nav.vue'
import WOW from "wow.js";

export default {
    mounted() {
        var wow = new WOW({
            boxClass: "wow", // animated element css class (default is wow)
            animateClass: "animated", // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
            callback: function (box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null, // optional scroll container selector, otherwise use window,
            resetAnimation: true, // reset animation on end (default is true)
        });
        wow.init();
    },
};


</script>

<template>
    <div>
        <div class="Work-container">
            <div class="title-container">
                <h1 class="title-text">Unnoticed 1</h1>
                <h1 class="title-text2">江边</h1>
                <p class="about-text">
                    说说我最近常去的江边，起初大概是因为离我的居所很近加之所在的大学城岛也并不大，如果想要出门走走会很快就走到江边。但以前大多都会骑车路过，所以会没有留意到许多。很多次路过环岛的几处江边觉得可能会有自己想要走近看看的风景可也没有真正的停下来去看，之后因为空闲时间变多和去江边实在是容易，会常常在江边徒步。在江边行走几次之后我会感到有些奇怪，江水将岛分割了起来，这让江边成为了岛上不只是地理上的最边缘，被扔在草坪上生产日期是前几个月的食品包装袋或是被植缠满的生锈单车都在说明着这里鲜有被打理的时候。好在它并不就此死寂，当走在江边会看到许多景象，它们由充满生机的部分构成。
                </p>
            </div>
            <div class="wow fadeInLeft" data-wow-duration="2s">
                <div class="pic-container">
                    <img class="pic" src="../assets/002.jpg" alt="">
                </div>
            </div>
            <div class="wow fadeInLeft" data-wow-duration="2s">
                <div class="pic-container">
                    <img class="pic" src="../assets/002.jpg" alt="">
                </div>
            </div>  <div class="wow fadeInLeft" data-wow-duration="2s">
                <div class="pic-container">
                    <img class="pic" src="../assets/002.jpg" alt="">
                </div>
            </div>  <div class="wow fadeInLeft" data-wow-duration="2s">
                <div class="pic-container">
                    <img class="pic" src="../assets/002.jpg" alt="">
                </div>
            </div>  <div class="wow fadeInLeft" data-wow-duration="2s">
                <div class="pic-container">
                    <img class="pic" src="../assets/002.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style >
.Work-container {
    @apply w-full h-full mt-20
}

.title-container {
    @apply w-11/12 xl:w-2/5 mx-auto leading-7 italic
}

.title-text {
    @apply text-2xl italic
}

.title-text2 {
    @apply text-2xl mb-5 italic
}

.pic-container {
    @apply  w-11/12 mx-auto mt-5
}
.pic{
@apply mx-auto 
}
</style>
