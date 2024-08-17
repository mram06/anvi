<template>
  <main-master-page>
    <div class="order">
      <div class="container">
        <div class="order__body">
          <p @click="$router.push({ name: 'catalogue' })" class="order__continue_shopping">
            Продовжити покупки
          </p>
          <div class="order__container">
            <div class="order__left">
              <h2 class="order__title">Оформлення замовлення</h2>
              <div class="order__tabs">
                <router-link :to="{ name: 'contacts' }"><span>1</span> Особисті дані</router-link>
                <router-link :to="{ name: 'delivery' }"
                  ><span>2</span> Інформація про доставку</router-link
                >
              </div>
              <router-view />
            </div>
            <div class="order__right">
              <div class="order__about">
                <div class="order__about-items">
                  <cart-item v-for="item in cartStore.loadedCart" :key="item.id" :item="item" />
                </div>
                <div class="order__about-row">
                  <p>Доставка</p>
                  <p>За тарифами пошти</p>
                </div>
                <div class="order__about-bottom">
                  <input type="text" placeholder="Введіть промокод чи код сертифікату" />
                  <button class="primary">Дізнатися більше</button>
                  <div class="order__about-summary">
                    <div>Сума</div>
                    <div>{{ cartStore.getCartSummary }} ₴</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main-master-page>
</template>

<script setup>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import CartItem from '@/components/CartItem.vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
</script>

<style lang="scss" scoped>
.order {
  &__body {
    padding: 32px 64px 92px 64px;
  }

  &__continue_shopping {
    background: url('@/assets/icons/chevron_left.svg') 8.98px 50% no-repeat;
    display: inline-block;
    cursor: pointer;
    padding: 0 0 0 32px;
    color: black;
  }

  &__container {
    margin: 32px 0 0 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  &__left {
  }

  &__title {
  }

  &__tabs {
    display: flex;
    gap: 40px;
    margin: 32px 0 0 0;

    a {
      display: flex;
      align-items: center;
      gap: 4px;
      color: #a1a1a1;
      span {
        font-family: 'Raleway';
        font-size: 12px;
        color: white;

        background-color: #a1a1a1;
        border-radius: 50%;
        width: 20px;
        height: 20px;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .router-link-active {
      color: #151515;
      span {
        color: white;

        background-color: #151515;
        border-radius: 50%;
        width: 20px;
        height: 20px;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  &__right {
    margin: 0 auto;
  }

  &__about {
    display: flex;
    flex-direction: column;

    border: 1px solid #444444;
    width: 416px;
    height: 480px;
    padding: 0 16px 16px 16px;
    &-items {
      overflow-y: scroll;
      scrollbar-width: thin;
    }

    &-row {
      padding: 16px 0;
      display: flex;
      justify-content: space-between;
    }

    &-bottom {
      margin-top: auto;
      margin-bottom: 0;

      display: flex;
      flex-direction: column;
      gap: 16px;

      input,
      button {
        width: 100%;
      }
    }

    &-summary {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
