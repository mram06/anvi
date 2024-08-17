<template>
  <div class="cart__item">
    <div class="cart__item-img">
      <img :src="item.imgSrc" />
    </div>

    <div class="cart__item-about">
      <div class="cart__item-title">{{ item.title }}</div>
      <div class="cart__item-price">{{ item.price }} ₴</div>
      <div class="cart__item-row">
        <div class="cart__item-count">
          <button @click="cartStore.onCount(item.id, 'decrease')"></button>
          <div>{{ item.count }}</div>
          <button @click="cartStore.onCount(item.id, 'increase')"></button>
        </div>
        <p @click="cartStore.deleteFromCart(item.id)" class="cart__item-clear">Видалити</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import { watch } from 'vue'

const cartStore = useCartStore()

watch(
  cartStore.cartItems,
  () => {
    cartStore.loadCartItems()
  },
  { deep: true }
)

defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>
.cart {
  &__item {
    padding: 16px 0;

    border-bottom: 1px solid #444444;

    display: flex;
    gap: 16px;
    &-img {
      background-color: #f4f4f4;
      width: 96px;
      height: 96px;

      display: flex;
      align-items: center;
      justify-content: center;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }

    &-about {
      flex-grow: 1;
    }

    &-title {
    }

    &-price {
      margin: 8px 0 0 0;
    }

    &-row {
      margin: 12px 0 0 0i;
      display: flex;
      justify-content: space-between;
    }

    &-count {
      width: 88px;
      display: flex;
      justify-content: space-between;
      button {
        background: none;
        width: 24px;
        height: 24px;
        &:first-child {
          background: url('@/assets/icons/minus.svg') no-repeat;
        }
        &:last-child {
          background: url('@/assets/icons/plus.svg') no-repeat;
        }
      }
    }

    &-clear {
      cursor: pointer;
    }
  }
}
</style>
