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
          <div id="forBody" class="category">
            <div class="category__row">
              <h2 class="category__title">Для тіла</h2>
              <div class="category__items">
                <template v-if="generalStore.isLoading">
                  <product-item-skeleton v-for="i in 6" :key="i" />
                </template>
                <template v-else>
                  <product-item
                    v-for="item in itemsByCategory.body"
                    :key="item.id"
                    :itemObj="item"
                  />
                </template>
              </div>
            </div>
          </div>

          <div id="forHair" class="category">
            <div class="category__row">
              <h2 class="category__title">Для волосся</h2>
              <div class="category__items">
                <template v-if="generalStore.isLoading">
                  <product-item-skeleton v-for="i in 3" :key="i" />
                </template>
                <template v-else>
                  <product-item
                    v-for="item in itemsByCategory.hair"
                    :key="item.id"
                    :itemObj="item"
                  />
                </template>
              </div>
            </div>
          </div>

          <div id="forFace" class="category">
            <div class="category__row">
              <h2 class="category__title">Для обличчя</h2>
              <div class="category__items">
                <template v-if="generalStore.isLoading">
                  <product-item-skeleton v-for="i in 3" :key="i" />
                </template>
                <template v-else>
                  <product-item
                    v-for="item in itemsByCategory.face"
                    :key="item.id"
                    :itemObj="item"
                  />
                </template>
              </div>
            </div>
          </div>

          <template v-if="recentlyViewed.length">
            <div class="category">
              <div class="category__row">
                <h2 class="category__title">Нещодавно переглянуті</h2>
                <div class="category__items">
                  <product-item v-for="item in recentlyViewed" :key="item.id" :itemObj="item" />
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </main-master-page>
</template>

<script setup>
import ProductItem from '@/components/ProductItem.vue'
import ProductItemSkeleton from '@/components/ProductItemSkeleton.vue'
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import { useGeneralStore } from '@/stores/general'
import { useItemsStore } from '@/stores/items'
import { computed, ref, watch, onMounted } from 'vue'

const itemsStore = useItemsStore()
const generalStore = useGeneralStore()

let itemsByCategory = computed(() => itemsStore.sortedItemsList)

const recentlyViewed = ref([])

onMounted(async () => {
  itemsStore.loadItemsList()

  if (localStorage.getItem('viewedProducts')) {
    const viewedItemsList = JSON.parse(localStorage.getItem('viewedProducts'))
    viewedItemsList.forEach(async (id) => {
      recentlyViewed.value.push({ id: id, ...(await itemsStore.getItemById(id)) })
    })
  }
  if (props.scrollToBlock) {
    document.getElementById(`${props.scrollToBlock}`).scrollIntoView({ behavior: 'smooth' })
  }
})

const props = defineProps({
  scrollToBlock: {
    type: String,
    default: null
  }
})

watch(
  () => props.scrollToBlock,
  () => {
    if (props.scrollToBlock) {
      const element = document.getElementById(`${props.scrollToBlock}`)
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 20
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }
)
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

    padding: 32px 64px 120px 64px;
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
