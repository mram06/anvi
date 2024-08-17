import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useItemsStore } from './items'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref(JSON.parse(localStorage.getItem('cartItems')) || [])
  const loadedCart = ref([])

  const loadCartItems = async () => {
    const itemsStore = useItemsStore()
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    const items = await Promise.all(
      cartItems.map(async (item) => {
        const itemDetails = await itemsStore.getItemById(item.id)
        return {
          id: item.id,
          count: item.count,
          ...itemDetails
        }
      })
    )
    loadedCart.value = items
  }
  const getCartSummary = computed(() =>
    loadedCart.value.reduce((prevVal, item) => prevVal + item.count * item.price, 0)
  )

  const getCartItemsCount = computed(() =>
    cartItems.value.reduce((prevVal, item) => prevVal + item.count, 0)
  )

  function onAddToCart(itemId, count) {
    const itemIds = JSON.parse(localStorage.getItem('cartItems')) || []
    const itemIndex = itemIds.findIndex((item) => item.id === itemId)
    if (itemIndex !== -1) {
      cartItems.value[itemIndex].count += count
    } else {
      cartItems.value.push({ id: itemId, count: count })
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems.value))
  }
  function deleteFromCart(itemId) {
    cartItems.value = cartItems.value.filter((item) => item.id !== itemId)
    loadedCart.value = loadedCart.value.filter((item) => item.id !== itemId)
    localStorage.setItem('cartItems', JSON.stringify(cartItems.value))
  }
  function onCount(itemId, operation) {
    const itemIds = JSON.parse(localStorage.getItem('cartItems')) || []
    const itemIndex = itemIds.findIndex((item) => item.id === itemId)
    if (operation === 'increase') {
      cartItems.value[itemIndex].count += 1
      loadedCart.value[itemIndex].count += 1
    } else if (operation === 'decrease' && cartItems.value[itemIndex].count > 1) {
      cartItems.value[itemIndex].count -= 1
      loadedCart.value[itemIndex].count -= 1
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems.value))
  }

  return {
    cartItems,
    onAddToCart,
    getCartItemsCount,
    loadCartItems,
    loadedCart,
    getCartSummary,
    deleteFromCart,
    onCount
  }
})
