import { ref } from 'vue'

export function useImgLoad() {
  const [a, a1, a2, a3] = [ref(false), ref(false), ref(false), ref(false)]

  function imgLoad() {
    a.value = true
  }
  function imgLoad2() {
    a1.value = true
  }
  function imgLoad3() {
    a2.value = true
  }
  function imgLoad4() {
    a3.value = true
  }

  return { imgLoad, imgLoad2, imgLoad3, imgLoad4, a, a1, a2, a3 }
}
