import { ref } from 'vue'

export function useImgLoadNew() {
  const a = ref(false)

  function imgLoad() {
    a.value = true
    console.log('imgload')
  }

  return { imgLoad, a }
}
