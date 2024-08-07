import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useGeneralStore } from './general'
import DbOperations from './helpers/DbOperations'
import { useItemsStore } from './items'
const collectionDB = new DbOperations('bestsellers')

export const useBestsellersStore = defineStore('bestsellers', () => {
  const bestsellersList = ref(null)

  const getBestsellersList = computed(() => bestsellersList.value)

  async function loadItemsList() {
    const generalStore = useGeneralStore()
    const itemsStore = useItemsStore()
    generalStore.setLoading(true)

    try {
      const result = await collectionDB.loadItemsList()
      const itemPromises = result[0].itemsIdsList.map(async (id) => {
        const item = await itemsStore.getItemById(id)
        return { id: id, ...item }
      })
      const foundItems = await Promise.all(itemPromises)
      bestsellersList.value = foundItems
    } catch (error) {
      generalStore.setError(error)
    } finally {
      generalStore.setLoading(false)
    }
  }
  async function getItemById(itemId) {
    const generalStore = useGeneralStore()
    let foundItem = {}
    await collectionDB
      .getItemById(itemId)
      .then((item) => {
        foundItem = item
      })
      .catch((error) => generalStore.setError(error))
      .finally(() => {
        generalStore.setLoading(false)
      })
    return foundItem
  }

  return {
    bestsellersList,
    loadItemsList,
    getBestsellersList,
    getItemById
  }
})
