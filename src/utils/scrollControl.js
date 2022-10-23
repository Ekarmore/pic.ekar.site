import { ref } from "vue";

export function useXScroll() {
  // 获取 colBox
  const colBox = ref(null);
  // 滚轮事件
  function wheel(event) {
    //阻止默认事件触发
    // event.preventDefault();
    //滚动
    let disX = ref(event.deltaY);
    colBox.value.scrollLeft += disX.value*2;
  }
  return { colBox, wheel };
}
