import { getCurrentInstance } from "vue";


export function useModal(){

const emit = getCurrentInstance().emit

 emit('isShowNav',true)

}

