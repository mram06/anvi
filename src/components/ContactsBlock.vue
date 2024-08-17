<template>
  <div>
    <div class="contacts">
      <div class="contacts__container">
        <input type="text" placeholder="Ваше ім’я*" />
        <input type="text" placeholder="Ваше прізвище*" />
        <input type="text" placeholder="Телефон*" />
        <input type="email" placeholder="E-mail" />
        <button class="contacts__button primary">Далі</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.contacts {
  margin: 32px 0 0 0;
  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  &__button {
    width: 100%;
    grid-column: 2 / 3;
  }
}
.primary {
}
</style>
se
