import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', () => {
  const loading = ref(false)
  const error = ref(null)

  const isLoading = computed(() => loading.value)
  const hasError = computed(() => error.value)
  function setLoading(val) {
    loading.value = val
  }
  function setError(val) {
    error.value = val
  }

  return { loading, error, isLoading, hasError, setLoading, setError }
})
