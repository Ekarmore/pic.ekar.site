<script setup>
import { defineEmits, watch } from 'vue'
import {useImgLoad} from '../utils/Loading'
import {useXScroll} from '../utils/scrollControl'
const { imgLoad,imgLoad2,a, a1, a2, a3} = useImgLoad()

//让页面横向滚动
const {colBox,wheel} = useXScroll()

const emit = defineEmits(['isShowNav'])
watch([a, a1, a2, a3], () => {
  if (a.value && a1.value) {
    emit("isShowNav",true)
  }
})

</script>
<template>
    <main>
        <section v-show="a&&a1">
            <section class="picture_container">
                <div ref="colBox" class="col-box" @wheel="wheel">
                    <!-- <div id="pic-about-text" class="pic"><span>Turpan</span></div> -->

                    <img @load="imgLoad" class="pic" src="../assets/AL_2.webp" alt="" />
                    <img @load="imgLoad2" class="pic-end" src="../assets/AL_1.webp" alt="" />
                </div>
            </section>
        </section>
        <section class="hp-loading" v-show="!(a&&a1)">
            <!-- <p class="loading-text">Ekar</p> -->
            <div class="loading">
                <div></div>
            </div>
        </section>
    </main>
</template>
    
<style >

</style>
    