import { watch,ref } from "vue";
import { useImgLoad } from "./Loading";

export function useWatchA(){
    const num = ref(10)

    setInterval(() => {
        num.value += 1
    }, 500);

    return {num}
}
