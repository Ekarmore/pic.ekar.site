import { ref } from "vue";

export function useImgLoadNew() {
 const a = ref(false);

  function imgLoad() {
    a.value = true;
  }

  return { imgLoad,a};
}
