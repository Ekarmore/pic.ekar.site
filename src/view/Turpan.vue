<script setup>
import Nav from "../components/Nav.vue";
import WOW from "wow.js";
import { onMounted, ref } from "vue";

const [a, a1, a2, a3] = [ref(false), ref(false), ref(false), ref(false)];

const [imgLoad, imgLoad2, imgLoad3, imgLoad4] = [
    () => {
        a.value = true;
    },
    () => {
        a1.value = true;
    },
    () => {
        a2.value = true;
    },
    () => {
        a3.value = true;
    },
];
const colBox = ref(null);

//wow init

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
}).init();

const wheel = (event) => {
    //   event.preventDefault();
    colBox.value.scrollLeft += event.deltaY;
};
</script>
<template>
    <section class="navBar">
        <Nav class="Nav-bar" />
    </section>
    <section class="picture_container">
        <div ref="colBox" class="col-box" @wheel="wheel">
            <img @load="imgLoad" class="pic" src="../assets/Turpan_020.jpg" alt="" />

            <img @load="imgLoad" class="pic" src="../assets/Turpan_02.jpg" alt="" />

            <img @load="imgLoad" class="pic" src="../assets/Turpan_01.jpg" alt="" />

            <img @load="imgLoad" class="pic" src="../assets/Turpan_03.jpg" alt="" />

            <img @load="imgLoad" class="pic" src="../assets/Turpan_04.jpg" alt="" />

            <img @load="imgLoad" class="pic" src="../assets/Turpan_05.jpg" alt="" />

            <img @load="imgLoad" class="pic" src="../assets/Turpan_06.jpg" alt="" />

            <img @load="imgLoad" class="pic" src="../assets/Turpan_07.jpg" alt="" />
        </div>
    </section>

    <section class="hp-loading" v-show="false">
        <!-- <p class="loading-text">Ekar</p> -->
        <div class="loading">
            <div></div>
        </div>
    </section>
</template>

<style>

</style>
