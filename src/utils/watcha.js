import { watch,ref } from "vue";
import { useImgLoad } from "./Loading";

export function useWatchA(){

    const {imgLoad,imgLoad2,imgLoad3,imgLoad4,a,a1,a2,a3} = useImgLoad()

    console.log(a.value,a1.value,a2.value,a3.value);
    setTimeout(() => {
        console.log(a1.value,a2.value,a3.value);
      }, 2000);
}
