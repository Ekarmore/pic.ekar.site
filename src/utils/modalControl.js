import { defineEmits, watch } from 'vue'
import {useImgLoad} from '../utils/Loading'

export function useModalControl(){
const {a,a1,a2,a3} = useImgLoad()

const emit = defineEmits(['isShowNav'])

watch([a, a1, a2, a3], () => {
    if (a.value && a1.value && a2.value && a3.value) {
        emit("isShowNav")
    }
})
}