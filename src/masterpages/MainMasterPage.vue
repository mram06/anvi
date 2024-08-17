<template>
  <div
    :class="[
      'wrapper',
      {
        cart: isCartOpen
      }
    ]"
  >
    <cart-component @close-cart="onOpenCart" />
    <p class="discount">Даруємо знижку -10% на перше замовлення</p>
    <header class="header">
      <div class="container">
        <div class="header__body">
          <div class="header__logo">
            <router-link to="/">
              <img src="@/assets/icons/logo.svg" />
            </router-link>
          </div>
          <nav class="header__menu">
            <router-link :to="{ name: 'catalogue' }">Каталог</router-link>
            <router-link :to="{ name: 'catalogueToBody' }">Для тіла</router-link>
            <router-link :to="{ name: 'catalogueToHair' }">Для волосся</router-link>
            <router-link :to="{ name: 'catalogueToFace' }">Для обличчя</router-link>
            <router-link :to="{ name: 'catalogue' }">Про ANVI</router-link>
          </nav>
          <div @click="onOpenCart" class="header__tools">
            <div class="header__tools-cart">
              <img src="@/assets/icons/cart.svg" />
            </div>
            <div class="header__tools-count">{{ cartStore.getCartItemsCount }}</div>
          </div>
        </div>
      </div>
    </header>

    <main class="content">
      <slot></slot>
    </main>

    <footer class="footer">
      <div class="footer__body">
        <div class="footer__logo"><img src="@/assets/icons/logo_white.svg" /></div>
        <div class="footer__menu">
          <div class="footer__menu-block">
            <p class="footer__menu-title">Підписатися на наші новини:</p>
            <div class="footer__menu-email">
              <input type="email" placeholder="Введіть свій email" />
              <div class="footer__menu-button"></div>
            </div>
            <div class="footer__menu-socials"></div>
          </div>
          <div class="footer__menu-block">
            <p class="footer__menu-title">Каталог</p>
            <p class="footer__menu-ref">
              <router-link :to="{ name: 'catalogueToBody' }">Для тіла</router-link>
            </p>
            <p class="footer__menu-ref">
              <router-link :to="{ name: 'catalogueToHair' }">Для волосся</router-link>
            </p>
            <p class="footer__menu-ref">
              <router-link :to="{ name: 'catalogueToFace' }">Для обличчя</router-link>
            </p>
            <p class="footer__menu-ref"><router-link to="/">Подарункова картка</router-link></p>
          </div>
          <div class="footer__menu-block">
            <p class="footer__menu-title">Інфо</p>
            <p class="footer__menu-ref"><router-link to="/">Доставка і оплата</router-link></p>
            <p class="footer__menu-ref"><router-link to="/">Обмін і повернення</router-link></p>
            <p class="footer__menu-ref"><router-link to="/">Програма лояльності</router-link></p>
            <p class="footer__menu-ref"><router-link to="/">FAQ</router-link></p>
          </div>
          <div class="footer__menu-block">
            <p class="footer__menu-title">ANVI</p>
            <p class="footer__menu-ref"><router-link to="/">Про ANVI</router-link></p>
            <p class="footer__menu-ref"><router-link to="/">Блог</router-link></p>
            <p class="footer__menu-ref"><router-link to="/">Контакти</router-link></p>
            <p class="footer__menu-ref"><router-link to="/">Магазини-парнери</router-link></p>
          </div>
        </div>
        <div class="footer__copyright">
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>© 2023 ANVI. All Right Reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import CartComponent from '@/components/CartComponent.vue'
import { useCartStore } from '@/stores/cart'
import { computed, ref } from 'vue'

const isCartOpen = ref(false)
function onOpenCart() {
  isCartOpen.value = !isCartOpen.value
}

const cartStore = useCartStore()
</script>

<style lang="scss" scoped>
.wrapper.cart .overlay {
  display: block;
}
.discount {
  color: white;
  text-align: center;
  background: rgb(21, 21, 21);
}
.header {
  &__body {
    padding: 0 64px;
    height: 64px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
  }

  &__tools {
    cursor: pointer;
    display: flex;
    gap: 4px;
    &-cart {
    }

    &-count {
      font-family: 'Raleway';
      font-size: 12px;
      color: white;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 10px;
      background-color: black;
      width: 20px;
      height: 20px;
    }
  }
  &__menu {
    font-weight: 500;
    color: black;
    display: flex;
    gap: 40px;
  }
}
.footer {
  position: relative;
  &__body {
    padding: 32px 64px;
    background-color: #151515;
  }

  &__logo {
    position: absolute;
    left: calc(50% - (81px / 2));
    bottom: 32px;
  }

  &__menu {
    display: flex;
    justify-content: space-between;
    &-title {
      font-family: 'Kyiv Type Sans';
      font-weight: 500;
      color: #ffffff;
    }
    & p:nth-child(2) {
      margin: 16px 0 0 0;
    }
    &-ref {
      margin: 8px 0 0 0;
      a {
        color: #d0d0d0;
      }
    }
    &-email {
      margin: 16px 0 0 0;
      display: flex;
      input {
        width: 368px;
        background-color: transparent;
        border: 1px solid white;
        color: #d0d0d0;
        &::placeholder {
          color: #d0d0d0;
        }
        &:focus {
          font-size: 16px;
        }
      }
    }
    &-button {
      cursor: pointer;
      background: url('@/assets/icons/arrow_right.svg') 50% no-repeat;
      border: 1px solid white;
      border-left: none;
      width: 48px;
      height: 48px;
    }
  }
  &__copyright {
    margin: 68px 0 0 0;
    display: flex;
    gap: 48px;
    p {
      color: #d0d0d0;
    }
    & :last-child {
      margin-left: auto;
    }
  }
}
</style>
