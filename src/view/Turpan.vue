<script setup>
    import Nav from '../components/Nav.vue'
    import WOW from "wow.js";
    import { ref } from 'vue'
    
    const [a, a1, a2, a3] = [ref(false), ref(false), ref(false), ref(false)]
    
    const [imgLoad, imgLoad2, imgLoad3, imgLoad4] = [() => { a.value = true }, () => { a1.value = true }, () => { a2.value = true }, () => { a3.value = true }]
    
    new WOW({
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
    }).init()
    
    
    </script>
    <template>
        <section v-show="true">
            <main class="Work-container">
                <div class="title-container">
                    <h1 class="title-text"><span>
                            <router-link to="/"></router-link>
                        </span> Unnoticed</h1>
                    <p class="about-text">
                        说说我最近常去的江边，起初大概是因为离我的居所很近加之所在的大学城岛也并不大，如果想要出门走走会很快就走到江边。但以前大多都会骑车路过，所以会没有留意到许多。很多次路过环岛的几处江边觉得可能会有自己想要走近看看的风景可也没有真正的停下来去看，之后因为空闲时间变多和去江边实在是容易，会常常在江边徒步。在江边行走几次之后我会感到有些奇怪，江水将岛分割了起来，这让江边成为了岛上不只是地理上的最边缘，被扔在草坪上生产日期是前几个月的食品包装袋或是被植缠满的生锈单车都在说明着这里鲜有被打理的时候。好在它并不就此死寂，当走在江边会看到许多景象，它们由充满生机的部分构成。
                    </p>
                    <h1 class="title-text3">2021/5</h1>
                </div>
                <section class="pic-box">
                    <div class="pic-container">
                        <img @load="imgLoad" class="pic" src="../assets/turpan_01.jpg" alt="">
                    </div>
                    <div class="wow fadeIn" data-wow-duration="1s">
                        <div class="pic-container">
                            <img @load="imgLoad2" class="pic" src="../assets/turpan_02.jpg" alt="">
                        </div>
                    </div>
                </section>
            </main>
            <footer class="footer-work">
                <div class="wow fadeInLeft" data-wow-duration="2s">
                    <Nav />
                </div>
            </footer>
        </section>
        <section class="hp-loading" v-show="false">
            <!-- <p class="loading-text">Ekar</p> -->
            <div class="loading">
                <div></div>
            </div>
        </section>
    </template>
    
    <style >
    
    </style>
    