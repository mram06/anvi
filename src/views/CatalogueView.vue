<template>
  <main-master-page>
    <div class="breadcrumbs">
      <div class="container">
        <div class="breadcrumbs__body">
          <p><router-link to="/">Головна</router-link> / <span>Каталог</span></p>
        </div>
      </div>
    </div>
    <div class="catalogue">
      <div class="container">
        <div class="catalogue__body">
          <div class="category">
            <div class="category__row">
              <h2 class="category__title">Для тіла</h2>
              <div class="category__items">
                <template v-if="isDataLoaded"
                  ><product-item
                    v-for="item in itemsByCategory.body"
                    :key="item.id"
                    :itemObj="item"
                /></template>
              </div>
            </div>
          </div>

          <div class="category">
            <div class="category__row">
              <h2 class="category__title">Для волосся</h2>
              <div class="category__items">
                <template v-if="isDataLoaded"
                  ><product-item
                    v-for="item in itemsByCategory.hair"
                    :key="item.id"
                    :itemObj="item"
                /></template>
              </div>
            </div>
          </div>

          <div class="category">
            <div class="category__row">
              <h2 class="category__title">Для обличчя</h2>
              <div class="category__items">
                <template v-if="isDataLoaded"
                  ><product-item
                    v-for="item in itemsByCategory.face"
                    :key="item.id"
                    :itemObj="item"
                /></template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main-master-page>
</template>

<script setup>
import ProductItem from '@/components/ProductItem.vue'
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import { useItemsStore } from '@/stores/items'
import { computed, onMounted } from 'vue'

const itemsStore = useItemsStore()
const isDataLoaded = computed(() => itemsStore.isDataLoaded)

let itemsByCategory = computed(() => itemsStore.sortedItemsList)

onMounted(() => {
  itemsStore.loadItemsList()
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
.catalogue {
  &__body {
    display: flex;
    flex-direction: column;
    gap: 64px;

    margin: 32px 0 0 0;
    padding: 0 64px;
  }
}
.category {
  &__row {
    display: flex;
    justify-content: space-between;
  }

  &__title {
  }

  &__items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    row-gap: 64px;
  }
}
</style>
