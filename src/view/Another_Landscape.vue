<script setup>
import { defineEmits, watch } from 'vue'
import {useImgLoad} from '../utils/Loading'
import {useXScroll} from '../utils/scrollControl'
import {useModal} from '../utils/modalControl'
const { imgLoad,imgLoad2,imgLoad3,imgLoad4,a, a1, a2, a3} = useImgLoad()

//让页面横向滚动
const {colBox,wheel} = useXScroll()

useModal(a,a1,a2,a3)
// const emit = defineEmits(['isShowNav'])
// watch([a, a1, a2, a3], () => {
//   if (a.value && a1.value && a2.value && a3.value) {
//     emit("isShowNav",true)
//   }
// })

</script>
<template>
    <main>
        <section v-show="a&&a1">
            <section class="picture_container">
                <div ref="colBox" class="col-box" @wheel="wheel">
                    <img @load="imgLoad" class="pic" src="../assets/AL_2.webp" alt="" />
                    <img @load="imgLoad2" class="pic" src="../assets/AL_9.webp" alt="" />
                    <img @load="imgLoad3" class="pic" src="../assets/AL_11.webp" alt="" />
                    <img @load="imgLoad4" class="pic" src="../assets/AL_1.webp" alt="" />
                    <img  class="pic" src="../assets/AL_3.webp" alt="" />
                    <img  class="pic" src="../assets/AL_4.webp" alt="" />
                    <img class="pic-end" src="../assets/AL_5.webp" alt="" />
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
    