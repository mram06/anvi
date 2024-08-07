<template>
  <div class="overlay">
    <div class="cart">
      <div class="cart__body">
        <div class="cart__top">
          <div class="cart__top-title">Кошик (1)</div>
          <div @click="$emit('closeCart')" class="cart__top-button"></div>
        </div>
        <div class="cart__container">
          <div class="cart__item">
            <div class="cart__item-img">
              <img src="@/assets/img/balzam.png" />
            </div>
            <div class="cart__item-about">
              <div class="cart__item-title">Твердий бальзам Silk - 20 г</div>
              <div class="cart__item-price">130 ₴</div>
              <div class="cart__item-row">
                <div class="cart__item-count">
                  <button></button>
                  <div>1</div>
                  <button></button>
                </div>
                <p class="cart__item-clear">Видалити</p>
              </div>
            </div>
          </div>
        </div>
        <div class="cart__bottom">
          <div class="cart__bottom__summary">
            <div class="cart__bottom__summary-title">Сума</div>
            <div class="cart__bottom__summary-price">130 ₴</div>
          </div>
          <button class="cart__bottom-button primary">Оформити замовлення</button>
          <p class="cart__bottom-continue">Продовжити покупки</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
  }

  &__item {
    margin: 16px 0 0;
    padding: 16px 0;

    border-top: 1px solid #444444;
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
  background-color: rgba(129, 129, 129, 0.51);

  z-index: 99;
  width: 100vw;
  height: 100vh;
}
</style>
