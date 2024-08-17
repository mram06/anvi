<template>
  <div>
    <div class="delivery">
      <div class="delivery__container">
        <select>
          <option value="" disabled selected>Місто*</option>
          <option value="">Київ</option>
          <option value="">Львів</option>
          <option value="">Дніпро</option>
          <option value="">Харків</option>
          <option value="">Одеса</option>
          <option value="">Кропивницький</option>
          <option value="">Полтава</option>
          <option value="">Чернівці</option>
          <option value="">Івано-Франківськ</option>
          <option value="">Вінниця</option>
        </select>
        <select>
          <option value="" disabled selected>Спосіб доставки*</option>
          <option value="">Кур'єром</option>
          <option value="">Нова пошта</option>
          <option value="">Укрпошта</option>
        </select>
        <input type="text" placeholder="Варіанти оплати*" />
        <input type="email" placeholder="Нотатки до замовлення" />
        <div class="delivery__call">
          <label>
            <input type="checkbox" />
            <p>Перетелефонуйте мені</p>
          </label>
        </div>
        <button class="delivery__button primary">Далі</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.delivery {
  margin: 32px 0 0 0;
  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  &__call {
    grid-column: 2 / 3;
    label {
      display: flex;
      gap: 4px;
      align-items: center;
    }
  }

  &__button {
    width: 100%;
    grid-column: 2 / 3;
  }
}
</style>
se
