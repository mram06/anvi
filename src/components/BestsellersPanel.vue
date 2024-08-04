<template>
  <div class="bestsellers">
    <div class="container">
      <div class="bestsellers__body">
        <div class="bestsellers__top">
          <h2 class="bestsellers__title">Бестселери</h2>
          <div @click="toCatologue" class="bestsellers__to_catalogue">До каталогу</div>
        </div>
        <div class="bestsellers__items-row">
          <product-item />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductItem from '@/components/ProductItem.vue'

import { useRouter } from 'vue-router'
const router = useRouter()
function toCatologue() {
  router.push({ name: 'catalogue' })
}
</script>

<style lang="scss" scoped>
.bestsellers {
  &__body {
    padding: 0 64px;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
  }

  &__to_catalogue {
    cursor: pointer;

    line-height: 150%;
    border-bottom: 1px solid black;
  }
  &__items-row {
    margin: 24px 0 0 0;

    display: flex;
    gap: 32px;
  }
}
</style>
