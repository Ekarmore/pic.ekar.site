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
    let scrollX = setInterval(() => {
      colBox.value.scrollLeft += disX.value;
    }, 10);
    setTimeout(() => {
      window.clearInterval(scrollX);
    }, 20);
  }
  return { colBox, wheel };
}
