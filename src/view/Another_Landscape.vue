<script >
import Nav from '../components/Nav.vue'
import WOW from "wow.js";


export default {
    mounted() {
        var wow = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: true,
            live: true,
            callback: function (box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null,
            resetAnimation: true, // reset animation on end (default is true)
        });
        wow.init();
    },
    components: { Nav }
};


</script>
<template>
    <div>
        <main class="Work-container">
            <div class="title-container">
                <div class="wow fadeInLeft" data-wow-duration="2s">
                <h1 class="title-text"><span>
                    </span> Another Landscape</h1>
                </div>
                    <div class="wow fadeInLeft" data-wow-duration="2s">
                    <p class="text-lg mx-auto pb-40 pt-40 text-center border-2  border-black">
                   Coming Soon
                </p>
                </div>
                <div class="wow fadeInRight" data-wow-duration="2s">
                <h1 class="title-text3">2021-Now</h1>
                </div>
            </div>
            <!-- <section class="pic-box">
                <div class="pic-container">
                    <img class="pic" src="../assets/B1.jpg" alt="">
                </div>
                <div class="wow fadeIn" data-wow-duration="1s">
                    <div class="pic-container">
                        <img class="pic" src="../assets/B2.jpg" alt="">
                    </div>
                </div>
                <div class="wow fadeIn" data-wow-duration="1s">
                    <div class="pic-container">
                        <img class="pic" src="../assets/B3.jpg" alt="">
                    </div>
                </div>
                <div class="wow fadeIn" data-wow-duration="1s">
                    <div class="pic-container">
                        <img class="pic" src="../assets/B10.jpg" alt="">
                    </div>
                </div>
                <div class="wow fadeIn" data-wow-duration="1s">
                    <div class="pic-container">
                        <img class="pic" src="../assets/B5.jpg" alt="">
                    </div>   
                </div>
                <div class="wow fadeIn" data-wow-duration="1s">
                    <div class="pic-container">
                        <img class="pic" src="../assets/B6.jpg" alt="">
                    </div>   
                </div>
                <div class="wow fadeIn" data-wow-duration="1s">
                    <div class="pic-container">
                        <img class="pic" src="../assets/B7.jpg" alt="">
                    </div>   
                </div>
            </section> -->
        </main>
        <footer class="footer-work">
            <div class="wow fadeInLeft" data-wow-duration="2s">
                <Nav />
            </div>
        </footer>
    </div>
</template>

<style >

</style>
