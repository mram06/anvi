<template>
  <div class="item">
    <div class="item__img"></div>
    <div class="item__title"></div>
    <div class="item__about">
      <div class="item__about-price"></div>
      <p class="item__about-volume"></p>
    </div>
    <button class="item__button secondary"></button>
  </div>
</template>

<script setup></script>

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
    height: 360px;
    animation: pulse-bg 1s infinite;
  }

  &__title {
    animation: pulse-bg 1s infinite;
    height: 24px;
    margin: 16px 0 0 0;
  }

  &__about {
    height: 24px;
    display: flex;
    justify-content: space-between;
    margin: 8px 0 0 0;
    &-price {
      width: 50px;
      animation: pulse-bg 1s infinite;
    }

    &-volume {
      width: 50px;
      animation: pulse-bg 1s infinite;
    }
  }

  &__button {
    border: none;
    &:hover {
      border: none;
    }
    height: 50px;
    animation: pulse-bg 1s infinite;
    width: 100%;
    margin: 16px 0 0 0;
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
