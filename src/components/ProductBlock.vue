<template>
  <div class="product">
    <div class="container">
      <div class="product__body">
        <div class="product__row">
          <div class="product__left">
            <div class="breadcrumbs">
              <div class="breadcrumbs__body">
                <p>
                  <router-link to="/">Головна</router-link> /
                  <router-link :to="{ name: 'catalogue' }">Каталог</router-link> /
                  <span>{{ currentItem?.title }}</span>
                </p>
              </div>
            </div>
            <div class="slider">
              <div class="slider__body">
                <div class="slider__slide">
                  <div class="slider__img">
                    <img :src="currentItem?.imgSrc" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="product__about">
            <h2 class="product__about-title">{{ currentItem?.title }}</h2>
            <div class="product__about-for">Для сухого ,пористого та кучерявого волосся</div>
            <p class="product__about-about">
              Твердий кондиціонер, який ідеально розплутує волосся та надасть блиск і гладкість.
            </p>
            <div class="product__about-fetures">
              <div>Полегшує розчісування</div>
              <div>Незмивний засіб</div>
              <div>Живить волосся</div>
            </div>
            <h2 class="product__about-price">{{ currentItem?.price }} ₴</h2>
            <div class="product__params">
              <div class="product__params-row">
                <div class="product__params-left">
                  <div class="product__params-title">Вага</div>
                  <div class="product__params-choice">
                    <label>
                      <input type="radio" name="weight" />
                      <div class="bullet"><span></span></div>
                      <p>20 г</p>
                    </label>
                    <label>
                      <input type="radio" name="weight" />
                      <div class="bullet"><span></span></div>
                      <p>50 г</p>
                    </label>
                  </div>
                </div>
                <div class="product__params-right">
                  <div class="product__params-title">Пакування</div>
                  <div class="product__params-choice">
                    <label>
                      <input type="radio" name="package" />
                      <div class="bullet"><span></span></div>
                      <p>картонна коробка</p>
                    </label>
                    <label>
                      <input type="radio" name="package" />
                      <div class="bullet"><span></span></div>
                      <p>алюмінієва банка</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="product__action">
              <div class="product__action-left">
                <div class="product__action-count">
                  <button @click="onCount('decrease')" class="product__action-decrease"></button>
                  <div type="number" min="1">{{ countToBuy }}</div>
                  <button @click="onCount('increase')" class="product__action-increase"></button>
                </div>
                <p class="product__action-stock"><span></span> В наявності!</p>
              </div>
              <div class="product__action-right">
                <button class="product__action-button primary">В кошик</button>
                <p>Термін доставки 3-5 днів</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  currentItem: {
    type: Object,
    default: () => ({})
  }
})
const currentItem = computed(() => props.currentItem)

const countToBuy = ref(1)
function onCount(action) {
  if (action === 'increase') countToBuy.value++
  else if (countToBuy.value > 1) countToBuy.value--
}
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
.product {
  &__body {
    background-color: #f4f4f4;
  }

  &__row {
    min-height: 680px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  &__left {
    border-right: 1px solid #151515;
  }

  &__about {
    padding: 32px 0 0 64px;
    &-title {
      max-width: 530px;
    }

    &-for {
      max-width: 530px;
      margin: 16px 0 0 0;
    }

    &-about {
      max-width: 530px;
      margin: 16px 0 0 0;
    }

    &-fetures {
      margin: 16px 0 0 0;

      max-width: 530px;

      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      div {
        background-color: #151515;
        color: white;
        padding: 4px 8px;
      }
    }

    &-price {
      margin: 16px 0 0 0;
    }
  }
  &__params {
    margin: 32px 0 0 0;
    &-row {
      display: grid;
      gap: 32px;
      grid-template-columns: 108px 1fr;
    }
    label {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;

      .bullet {
        position: relative;
        width: 20px;
        height: 20px;

        border: 1px solid #424242;
        border-radius: 10px;

        span {
        }
      }

      input[type='radio'] {
        display: none;
        &:checked ~ .bullet span {
          display: block;
          position: absolute;
          top: calc(50% - (10px / 2));
          left: calc(50% - (10px / 2));
          width: 10px;
          height: 10px;
          background-color: #424242;
          border-radius: 50%;
        }
      }
    }

    &-choice {
      label {
        &:first-child {
          margin: 16px 0 0 0;
        }
        &:last-child {
          margin: 8px 0 0 0;
        }
      }
    }
    &-left {
    }

    &-title {
    }

    &-right {
    }
  }
  &__action {
    margin: 32px 0 0 0;
    display: grid;
    gap: 32px;
    grid-template-columns: 108px 1fr;

    p {
      margin: 8px 0 0 0;
    }

    &-left {
    }

    &-count {
      padding: 12px 10px;
      height: 50px;
      border: 1px solid #151515;
      display: flex;
      div {
        width: 100%;
        background-color: transparent;
        text-align: center;
        font-size: 16px;
      }
      button {
        width: 24px;
        &:first-child {
          background: url('@/assets/icons/minus.svg') 50% no-repeat;
        }
        &:last-child {
          background: url('@/assets/icons/plus.svg') 50% no-repeat;
        }
      }
    }

    &-decrease {
    }

    &-increase {
    }

    &-stock {
      display: flex;
      align-items: center;
      gap: 4px;
      span {
        background-color: #6ba72f;
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }
    }

    &-right {
    }

    &-button {
    }
  }
}
@keyframes pulse-bg {
  0% {
    background-color: #eee;
  }
  50% {
    background-color: #eaeaea;
  }
  100% {
    background-color: #eee;
  }
}
</style>
