import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

export function useLazy(target) {
  const lazyLoad = ref(false)
  const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      stop(), 
      lazyLoad.value = true;
    }
  });
  return {lazyLoad}
}
