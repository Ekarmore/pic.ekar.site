// import { getCurrentInstance } from "vue";


// export function useModal(){

// const emit = getCurrentInstance().emit

//  emit('isShowNav',true)

// }

import { defineEmits, onMounted  } from "vue";
export function useModal () {
onMounted(()=>{
    console.log('1');
})

}