<template>
  <div class="overlay">
    <div class="cart">
      <div class="cart__body">
        <div class="cart__top">
          <div class="cart__top-title">Кошик ({{ cartStore.getCartItemsCount }})</div>
          <div @click="$emit('closeCart')" class="cart__top-button"></div>
        </div>
        <div class="cart__container">
          <template v-if="cartStore.loadedCart.length">
            <cart-item v-for="item in cartStore.loadedCart" :key="item.id" :item="item" />
          </template>
          <div v-else>Ви ще нічого не додали до кошика</div>
        </div>
        <div class="cart__bottom">
          <div class="cart__bottom__summary">
            <div class="cart__bottom__summary-title">Сума</div>
            <div class="cart__bottom__summary-price">{{ cartStore.getCartSummary }} ₴</div>
          </div>
          <button @click="onOrder" class="cart__bottom-button primary">Оформити замовлення</button>
          <p @click="$router.push({ name: 'catalogue' })" class="cart__bottom-continue">
            Продовжити покупки
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import { onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import CartItem from '@/components/CartItem.vue'

const cartStore = useCartStore()
onMounted(() => {
  cartStore.loadCartItems()
})
watch(
  cartStore.cartItems,
  () => {
    cartStore.loadCartItems()
  },
  { deep: true }
)

const router = useRouter()
function onOrder() {
  if (cartStore.cartItems.length) router.push({ name: 'contacts' })
}
</script>

<style lang="scss" scoped>
.cart {
  &__body {
    display: flex;
    flex-direction: column;

    height: 856px;
    padding: 32px;

    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    background-color: white;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    &-title {
    }

    &-button {
      cursor: pointer;
      width: 24px;
      height: 24px;
      background: url('@/assets/icons/close.svg') no-repeat;
    }
  }

  &__container {
    margin: 16px 0 0 0;
    border-top: 1px solid #444444;
    overflow-y: scroll;
    scrollbar-width: thin;
  }

  &__bottom {
    border-top: 1px solid #444444;

    padding: 17px 0 0 0;

    margin-top: auto;
    margin-bottom: 0;
    &__summary {
      display: flex;
      justify-content: space-between;
      &-price {
      }
    }

    &-button {
      margin: 16px 0 0 0;
      width: 100%;
    }

    &-continue {
      cursor: pointer;
      margin: 16px 0 0 0;
      color: black;
      text-align: center;
    }
  }
}
.overlay {
  display: none;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);

  z-index: 99;
  width: 100vw;
  height: 100vh;
}
</style>
