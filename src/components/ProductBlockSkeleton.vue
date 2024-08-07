<template>
  <div class="product">
    <div class="container">
      <div class="product__body">
        <div class="product__row">
          <div class="product__left">
            <div class="breadcrumbs">
              <div class="breadcrumbs__body">
                <p></p>
              </div>
            </div>
            <div class="slider">
              <div class="slider__body">
                <div class="slider__slide">
                  <div class="slider__img"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="product__about">
            <h2 class="product__about-title"></h2>
            <div class="product__about-for"></div>
            <p class="product__about-about"></p>
            <div class="product__about-fetures">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <h2 class="product__about-price"></h2>
            <div class="product__params">
              <div class="product__params-row">
                <div class="product__params-left"></div>
                <div class="product__params-right"></div>
              </div>
            </div>
            <div class="product__action">
              <div class="product__action-left">
                <div class="product__action-count"></div>
                <p class="product__action-stock"></p>
              </div>
              <div class="product__action-right">
                <button class="product__action-button primary"></button>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.breadcrumbs {
  &__body {
    margin: 32px 0 0 0;
    padding: 0 64px;
    p {
      height: 24px;
      animation: pulse-bg 1s infinite;
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
      height: 48px;
      animation: pulse-bg 1s infinite;
    }

    &-for {
      max-width: 530px;
      height: 24px;
      margin: 16px 0 0 0;
      animation: pulse-bg 1s infinite;
    }

    &-about {
      max-width: 530px;
      height: 48px;
      margin: 16px 0 0 0;
      animation: pulse-bg 1s infinite;
    }

    &-fetures {
      margin: 16px 0 0 0;

      max-width: 530px;

      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      div {
        width: 96px;
        height: 32px;
        color: white;
        padding: 4px 8px;
        animation: pulse-bg 1s infinite;
      }
    }

    &-price {
      width: 128px;
      height: 48px;
      margin: 16px 0 0 0;
      animation: pulse-bg 1s infinite;
    }
  }
  &__params {
    margin: 32px 0 0 0;
    &-row {
      height: 96px;
      display: grid;
      gap: 32px;
      grid-template-columns: 108px 1fr;
    }

    &-choice {
    }
    &-left {
      animation: pulse-bg 1s infinite;
    }

    &-title {
    }

    &-right {
      width: 108px;
      animation: pulse-bg 1s infinite;
    }
  }
  &__action {
    margin: 32px 0 0 0;
    display: grid;
    gap: 32px;
    grid-template-columns: 108px 1fr;

    p {
      margin: 8px 0 0 0;
      animation: pulse-bg 1s infinite;
    }

    &-left {
    }

    &-count {
      padding: 12px 10px;
      height: 50px;

      display: flex;
      animation: pulse-bg 1s infinite;
      div {
        width: 100%;
        background-color: transparent;
        text-align: center;
        font-size: 16px;
      }
    }

    &-decrease {
    }

    &-increase {
    }

    &-stock {
      height: 24px;
      animation: pulse-bg 1s infinite;
    }

    &-right {
      p {
        max-width: 192px;
        height: 24px;
        animation: pulse-bg 1s infinite;
      }
    }

    &-button {
      border: none;
      animation: pulse-bg 1s infinite;
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
