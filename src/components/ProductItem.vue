<template>
  <div class="item">
    <template v-if="itemObj.novelty"><div class="item__novelty">Новинка</div></template>
    <div @click="onProduct" class="item__img">
      <img :src="itemObj.imgSrc" />
    </div>
    <div @click="onProduct" class="item__title">{{ itemObj?.title }}</div>
    <div class="item__about">
      <div class="item__about-price">{{ itemObj.price }} ₴</div>
      <p class="item__about-volume">{{ itemObj.volume }}</p>
    </div>
    <button @click="onProduct" class="item__button secondary">
      <span><img src="@/assets/icons/plus.svg" /> </span>Обрати опції
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  itemObj: {
    type: Object,
    default: () => ({})
  }
})

const router = useRouter()
function onProduct() {
  router.push({ name: 'product', params: { id: props.itemObj.id } })
}
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  width: 304px;
  &__novelty {
    background-color: #151515;
    position: absolute;
    top: 8px;
    left: 8px;
    padding: 4px 8px;

    color: white;
  }
  &__img {
    cursor: pointer;
    height: 360px;
    background-color: #f4f4f4;
    img {
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    cursor: pointer;
    margin: 16px 0 0 0;
  }

  &__about {
    display: flex;
    justify-content: space-between;
    margin: 8px 0 0 0;
    &-price {
    }

    &-volume {
    }
  }

  &__button {
    width: 100%;
    margin: 16px 0 0 0;
  }
}
</style>
