import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

export function useTitle() {
  const pageTitle = useRoute()
  watchEffect(() => {
    document.title = pageTitle.meta.title
  })
}

