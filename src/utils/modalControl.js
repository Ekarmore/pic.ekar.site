import { getCurrentInstance, ref, watch } from "vue";

export function useModal(a, a1, a2, a3) {
  const emit = getCurrentInstance().emit;

  watch([a, a1, a2, a3], () => {
    if ((a.value&&a1.value&&a2.value&&a3.value)) {
      emit("isShowNav", true);
    }
  });
}
