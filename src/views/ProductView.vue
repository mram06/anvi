<template>
  <main-master-page>
    <product-block-skeleton v-if="generalStore.isLoading" />
    <product-view-component v-else :currentItem="currentItem" />
  </main-master-page>
</template>

<script setup>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import ProductViewComponent from '@/components/ProductBlock.vue'
import ProductBlockSkeleton from '@/components/ProductBlockSkeleton.vue'

import { useItemsStore } from '@/stores/items'
import { onBeforeMount, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useGeneralStore } from '@/stores/general'
const itemsStore = useItemsStore()
const generalStore = useGeneralStore()

const route = useRoute()
function updateRecentlyViewed(productId) {
  let viewedProducts = JSON.parse(localStorage.getItem('viewedProducts')) || []
  viewedProducts = viewedProducts.filter((id) => id !== productId)
  viewedProducts.unshift(productId)

  if (viewedProducts.length > 3) {
    viewedProducts.pop()
  }
  localStorage.setItem('viewedProducts', JSON.stringify(viewedProducts))
}
const currentItem = ref(null)
onBeforeMount(async () => {
  currentItem.value = await itemsStore.getItemById(route.params.id)
  updateRecentlyViewed(route.params.id)
})
onUnmounted(() => {
  itemsStore.clearCurrentItem()
})
</script>

<style lang="scss" scoped>
.breadcrumbs {
  &__body {
    margin: 32px 0 0 0;
    padding: 0 64px;
    span {
      color: #8b8b8b;
    }
  }
}
</style>
