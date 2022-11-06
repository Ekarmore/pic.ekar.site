import { ref } from 'vue'
// import { useDebounceFn } from '@vueuse/core'
export function useXScroll() {
  // 获取 colBox
  const colBox = ref(null)
  // 防抖
  // const debouncedFn = useDebounceFn((event) => {
  //   const disX = ref(event.deltaY)
  //   colBox.value.scrollLeft += disX.value * 25
  //   // console.log('!',disX.value);
  // }, 100)

  // 滚轮事件
  const wheel = (event) => {
    // debouncedFn(event)
    const disX = ref(event.deltaY)
    colBox.value.scrollLeft += disX.value * 2
  }
  return { colBox, wheel }
}
