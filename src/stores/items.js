import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useGeneralStore } from './general'
import DbOperations from './helpers/DbOperations'
const collectionDB = new DbOperations('items')

import sortItems from './helpers/sortItems'

export const useItemsStore = defineStore('items', () => {
  const itemsList = ref(null)
  const currentItem = ref(null)
  const isDataLoaded = ref(false)

  async function loadItemsList() {
    const generalStore = useGeneralStore()
    generalStore.setLoading(true)
    await collectionDB
      .loadItemsList()
      .then((list) => (itemsList.value = list))
      .catch((error) => generalStore.setError(error))
      .finally(() => {
        generalStore.setLoading(false)
        isDataLoaded.value = true
      })
  }
  async function getItemById(itemId) {
    const generalStore = useGeneralStore()
    generalStore.setLoading(true)
    let foundItem = {}
    await collectionDB
      .getItemById(itemId)
      .then((item) => {
        foundItem = item
      })
      .catch((error) => generalStore.setError(error))
      .finally(() => {})

    generalStore.setLoading(false)
    return foundItem
  }
  function clearCurrentItem() {
    currentItem.value = null
  }

  const sortedItemsList = computed(() => {
    if (itemsList.value) return sortItems(itemsList.value)
    else return {}
  })

  return {
    itemsList,
    currentItem,
    loadItemsList,
    sortedItemsList,
    isDataLoaded,
    getItemById,
    clearCurrentItem
  }
})
