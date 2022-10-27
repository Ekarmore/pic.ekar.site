<script setup>
import { defineEmits, watch,ref } from 'vue'
import {useImgLoad} from '../utils/Loading'
import {useXScroll} from '../utils/scrollControl'
import {useModal} from '../utils/modalControl'
const { imgLoad,imgLoad2,imgLoad3,imgLoad4,a, a1, a2, a3} = useImgLoad()
//移动端100vh
const newVh = ref(window.innerHeight+'px')
//让页面横向滚动
const {colBox,wheel} = useXScroll()
//首次加载
useModal(a,a1,a2,a3)

</script>
<template>
    <main>
        <section v-show="a&&a1">
            <section :style="{height:newVh}" class="picture_container">
                <div ref="colBox" class="col-box" @wheel="wheel">
                    <img @load="imgLoad" class="pic" src="https://s1.vika.cn/space/2022/10/27/511d72c4df3b4ab4aacc169b05478df1?attname=AL_7.webp" alt="" />
                    <img @load="imgLoad2" class="pic" src="https://s1.vika.cn/space/2022/10/27/4c210d6907ae4ec9a340174e61901113?attname=AL_9.webp" alt="" />
                    <img @load="imgLoad3" class="pic" src="https://s1.vika.cn/space/2022/10/27/03595704918442d3823478786ce990cf?attname=AL_11.webp" alt="" />
                    <img @load="imgLoad4" class="pic" src="https://s1.vika.cn/space/2022/10/27/d802f7104cd24aa3bf9f91586e93d9d4?attname=AL_1.webp" alt="" />
                    <img  class="pic" src="https://s1.vika.cn/space/2022/10/27/9d7936985b5242ba9d84b531f0b73bc2?attname=AL_3.webp" alt="" />
                    <img  class="pic" src="https://s1.vika.cn/space/2022/10/27/c9261febfa55467794e2351957777efe?attname=AL_4.webp" alt="" />
                    <img class="pic-end" src="https://s1.vika.cn/space/2022/10/27/7f7ecdd8008f48a4bcdb16b4cbda75b8?attname=AL_5.webp" alt="" />
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
    