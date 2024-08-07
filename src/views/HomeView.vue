<template>
  <main-master-page>
    <div class="hero">
      <div class="container">
        <div class="hero__body">
          <div class="hero__img">
            <img src="@/assets/img/hero.jpg" />
          </div>
          <div class="hero__about">
            <h1 class="hero__about-title">Косметика з турботою про тебе та планету</h1>
            <div class="hero__about-text">
              <p>Осмислено</p>
              <p>Ефективно</p>
              <p>Натурально</p>
            </div>
            <button @click="toCatologue" class="hero__button primary">До каталогу</button>
          </div>
          <div class="hero__spinner"></div>
        </div>
      </div>
    </div>
    <div class="about">
      <div class="container">
        <div class="about__body">
          <h2 class="about__title">Про ANVI</h2>
          <p class="about__text">
            ANVI - український бренд еко косметики філософія якого у піклуванні. Поєднуючи веганську
            косметику та кращі активними інгредієнтами, ми піклуємось про вас. Використовуючи
            натуральні тари, ми піклуємось про довкілля.
          </p>
          <button class="about__button primary">Дізнатися більше</button>
        </div>
      </div>
    </div>
    <bestsellers-panel />
    <div class="categories">
      <div class="container">
        <div class="categories__body">
          <div class="categories__top">
            <h2 class="categories__title">Категорії</h2>
            <div @click="toCatologue" class="categories__to_catalogue">До каталогу</div>
          </div>
          <div class="categories__row">
            <div class="categories__category">
              <div class="categories__category-img">
                <img src="@/assets/img/body.jpg" />
              </div>
              <router-link :to="{ name: 'catalogueToBody' }">
                <button class="categories__category-button secondary">Для тіла</button>
              </router-link>
            </div>
            <div class="categories__category">
              <div class="categories__category-img">
                <img src="@/assets/img/face.jpg" />
              </div>
              <router-link :to="{ name: 'catalogueToFace' }">
                <button class="categories__category-button secondary">Для обличчя</button>
              </router-link>
            </div>
            <div class="categories__category">
              <div class="categories__category-img">
                <img src="@/assets/img/hair.jpg" />
              </div>
              <router-link :to="{ name: 'catalogueToHair' }">
                <button class="categories__category-button secondary">Для волосся</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="how">
      <div class="container">
        <div class="how__body">
          <h2 class="how__title">Як ми це робимо</h2>
          <div class="how__container">
            <div class="how__item">
              <div class="how__item-img">
                <img src="@/assets/icons/flower.svg" />
              </div>
              <p class="how__item-text">
                Ми використовуємо натуральні інгредієнти, що вирощені на землях України
              </p>
            </div>
            <div class="how__item">
              <div class="how__item-img">
                <img src="@/assets/icons/woman.svg" />
              </div>
              <p class="how__item-text">
                Ефективно. Наші клієнти залишають позитивні відгуки та повертаються до нас знову
              </p>
            </div>
            <div class="how__item">
              <div class="how__item-img">
                <img src="@/assets/icons/ecology.svg" />
              </div>
              <p class="how__item-text">
                Наше пакування придатне до переробки та компостування в домашніх умовах
              </p>
            </div>
            <div class="how__item">
              <div class="how__item-img">
                <img src="@/assets/icons/eco-friendly.svg" />
              </div>
              <p class="how__item-text">
                Наше виробництво на 100% етичне та веганське. Ви можете бути впевнені, що наша
                косметика не несе шкоди планеті
              </p>
            </div>
          </div>
          <p class="how__button">Детальніше</p>
        </div>
      </div>
    </div>
    <div class="novelty">
      <div class="container">
        <div class="novelty__body">
          <div class="novelty__subtitle">Новинка</div>
          <h2 class="novelty__title">Крем-ліпід для рук та тіла</h2>
          <p class="novelty__text">
            Крем з комплексом екстрактів «Українськи злаків» що лягідно доглядає, відновлює ліпідний
            барєр. Вбирається за лічені секунди, зволожує на цілий день. Наш крафтовий продукт,
            виготовлений з уважністю до людини та природи, відповідально і чесно.
          </p>
          <button class="novelty__button primary">Дізнатися більше</button>
        </div>
      </div>
    </div>
    <div class="reviews">
      <div class="container">
        <div class="reviews__body">
          <h2 class="reviews__title">Про нас говорять</h2>
          <div class="reviews__column">
            <div class="review">
              <div class="review__img">
                <img src="@/assets/img/avatar1.png" />
              </div>
              <div class="review__about">
                <div class="review__about-title">Валентина, 12 березня, 2023</div>
                <p class="review__about-text">
                  Цей бальзам для губ - справжній скарб для моїх сухих губ. Він надзвичайно зволожує
                  і пом'якшує шкіру, має приємний натуральний смак і аромат. Завжди тримаю його з
                  собою, він став моїм незамінним спутником.
                </p>
              </div>
            </div>
            <div class="review">
              <div class="review__img">
                <img src="@/assets/img/avatar2.png" />
              </div>
              <div class="review__about">
                <div class="review__about-title">Анна, 26 червня 2023</div>
                <p class="review__about-text">
                  Фізіологічний дезодорант Forest. Чудовий дезодорант ! Він ефективно контролює
                  запах протягом усього дня, не містить шкідливих речовин і має приємний аромат.
                  Відчуваю себе комфортно і впевнено використовуючи його щодня.
                </p>
              </div>
            </div>
            <div class="review">
              <div class="review__img">
                <img src="@/assets/img/avatar3.png" />
              </div>
              <div class="review__about">
                <div class="review__about-title">Віолетта, 17 травня 2023</div>
                <p class="review__about-text">
                  Я вже давно шукала ефективний та екологічний спосіб догляду за своїм волоссям, і
                  нарешті знайшла його у твердому кондиціонері від ANVI! Цей продукт - справжня
                  магія для мого волосся.
                </p>
              </div>
            </div>
            <div class="review">
              <div class="review__img">
                <img src="@/assets/img/avatar4.png" />
              </div>
              <div class="review__about">
                <div class="review__about-title">Катерина, 3 липня 2023</div>
                <p class="review__about-text">
                  Я вражена тим, як він дбає про волосся та захищає його від негативних впливів
                  навколишнього середовища. Плюс, відсутність силіконів і барвників робить його ще
                  більш привабливим для мене.
                </p>
              </div>
            </div>
          </div>
          <div class="reviews__bottom">
            <p class="reviews__more">
              <img src="@/assets/icons/reload.svg" /> <span>Більше відгуків</span>
            </p>
            <button class="reviews__comment primary">Залишити відгук</button>
          </div>
        </div>
      </div>
    </div>
    <div class="gift">
      <div class="container">
        <div class="gift__body">
          <div class="gift__row">
            <div class="gift__left">
              <div class="gift__left-body">
                <div class="gift__left-spinner"></div>
                <div class="gift__left-subtitle">Подарунковий сертифікат</div>
                <h1 class="gift__left-title">ANVI</h1>
                <p class="gift__left-text">З турботою про тебе та планету</p>
              </div>
            </div>
            <div class="gift__right">
              <div class="gift__right-body">
                <h2 class="gift__right-title">Подарункова картка</h2>
                <p class="gift__right-text">
                  Ви не помилитесь із вибором подарунку завдяки подарунковій картці. Оберіть
                  потрібну суму та додайте повідомлення - саме так подарунок стане по-справжньому
                  незабутнім.
                </p>
                <button class="gift__right-button primary">Дізнатися більше</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="opinion">
      <div class="container">
        <div class="opinion__body">
          <div class="opinion__row">
            <div class="opinion__left">
              <h2 class="opinion__left-title">Думка від Юлії Марченко про її бренд</h2>
              <p class="opinion__left-text">
                Так сталось, що активний етап розвитку мого бренду, довелось реалізовувати в
                найважчі часи для всіх українців!Віра, яка надихає і мотивує - є важливою для
                бізнесу на старті. Незабаром ми зможемо змінити споживацьке ставлення до косметичної
                продукції та її вплив на довкілля. І найголовніше - разом працювати заради перемоги
                та розквіту нашої України!
              </p>
              <button class="opinion__left-button primary">Дізнатися більше</button>
            </div>
            <div class="opinion__right"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="insta">
      <div class="container">
        <div class="insta__body">
          <h2 class="insta__title">
            Наш Instagram <a href="https://www.instagram.com/anvi_bodycare/">@anvi_bodycare</a>
          </h2>
          <div class="insta__row">
            <div class="insta__img">
              <img src="@/assets/img/insta1.jpg" />
            </div>
            <div class="insta__img">
              <img src="@/assets/img/insta2.jpg" />
            </div>
            <div class="insta__img">
              <img src="@/assets/img/insta3.jpg" />
            </div>
            <div class="insta__img">
              <img src="@/assets/img/insta4.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main-master-page>
</template>

<script setup>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import BestsellersPanel from '@/components/BestsellersPanel.vue'

import { useRouter } from 'vue-router'
const router = useRouter()
function toCatologue() {
  router.push({ name: 'catalogue' })
}
</script>

<style lang="scss" scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.hero {
  &__body {
    position: relative;
    background-color: #ecddbd;
    display: flex;
  }

  &__img {
    padding: 64px;
    border-right: 1px solid black;
  }

  &__about {
    padding: 135px 64px 64px 64px;
    &-title {
      max-width: 416px;
    }

    &-text {
      margin: 16px 0 0 0;
      display: flex;
      p {
        color: #151515;
        &:not(:first-child) {
          padding: 0 0 0 32px;
          background: url('@/assets/icons/dash.svg') 8px 50% no-repeat;
        }
      }
    }
  }
  &__button {
    margin: 40px 0 0 0;
  }
  &__spinner {
    position: absolute;
    right: 64px;
    bottom: -84px;
    z-index: 10;

    width: 250px;
    height: 250px;
    background: url('@/assets/icons/spinner.svg') no-repeat;

    animation: spin 15s linear 0s infinite;
  }
}
.about {
  &__body {
    padding: 140px 0;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
  }

  &__text {
    max-width: 640px;
    text-align: center;
    margin: 24px;
  }

  &__button {
    margin: 40px 0 0 0;
  }
}
.categories {
  &__body {
    margin: 128px 0 0 0;
    padding: 0 64px;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
  }

  &__to_catalogue {
    cursor: pointer;

    border-bottom: 1px solid black;
  }

  &__row {
    margin: 24px 0 0 0;

    display: flex;
    justify-content: space-between;
  }

  &__category {
    &-img {
    }

    &-button {
      margin: 16px 0 0 0;
      width: 100%;
    }
  }
}
.how {
  &__body {
    margin: 0 auto;
    margin-top: 120px;
    max-width: 850px;

    text-align: center;
  }

  &__title {
  }

  &__container {
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 1fr;

    margin: 40px 0 0 0;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 16px;
    &-img {
    }

    &-text {
    }
  }

  &__button {
    cursor: pointer;

    display: inline-block;
    text-align: center;
    margin: 40px 0 0 0;
    border-bottom: 1px solid #444444;
  }
}
.novelty {
  &__body {
    background:
      url('@/assets/img/creme.png') 50% no-repeat,
      url('@/assets/img/novelty.png') 100% no-repeat,
      linear-gradient(90deg, rgb(236, 221, 189) 34.641%, rgba(236, 221, 189, 0) 89.175%);

    margin: 124px 0 0 0;
    padding: 107px 64px;
  }

  &__subtitle {
  }

  &__title {
    max-width: 416px;
    margin: 16px 0 0 0;
  }

  &__text {
    max-width: 480px;
    margin: 16px 0 0 0;
  }

  &__button {
    margin: 40px 0 0 0;
  }
}
.reviews {
  &__body {
    margin: 0 auto;
    margin-top: 120px;
    max-width: 864px;
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 40px 0 0 0;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0 0 0;
  }

  &__more {
    cursor: pointer;
    span {
      border-bottom: 1px solid #151515;
    }
  }

  &__comment {
  }
  &__title {
    text-align: center;
  }
}
.review {
  display: flex;
  gap: 16px;

  &:not(:last-child) &__about {
    padding: 0 0 24px 0;
    border-bottom: 1px solid #444444;
  }
  &__img {
    border-radius: 48px;
  }

  &__about {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-title {
    }

    &-text {
      margin: 8px 0 0 0;
    }
  }
}
.gift {
  &__body {
    margin: 120px 0 0 0;
  }

  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  &__left {
    background: url('@/assets/img/background_gift.jpg') no-repeat;
    padding: 97px 64px;
    &-body {
      min-height: 492px;
      position: relative;
      padding: 51px 0 0 0;
      background:
        url('@/assets/icons/line_gift.svg') 247px 100% no-repeat,
        #f5f2eb;
    }

    &-subtitle {
      text-align: center;
    }

    &-title {
      position: absolute;
      right: 108px;
      bottom: 181px;
    }

    &-text {
      position: absolute;
      right: 108px;
      bottom: 117px;

      max-width: 170px;
    }
    &-spinner {
      position: absolute;
      left: -67px;
      bottom: 60px;
      z-index: 10;

      width: 250px;
      height: 250px;
      background: url('@/assets/icons/spinner_gift.svg') no-repeat;

      animation: spin 15s linear 0s infinite;
    }
  }

  &__right {
    &-body {
      height: 686px;
      padding: 195px 0 0 128px;
      background-color: #f4f4f4;
    }

    &-title {
      max-width: 416px;
    }

    &-text {
      margin: 16px 0 0 0;
      max-width: 416px;
    }

    &-button {
      margin: 40px 0 0 0;
    }
  }
}
.opinion {
  &__body {
  }

  &__row {
    height: 686px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  &__left {
    background-color: #f4f4f4;
    padding: 123px 0 0 176px;
    &-title {
      max-width: 416px;
    }

    &-text {
      max-width: 416px;
      margin: 16px 0 0 0;
    }

    &-button {
      margin: 40px 0 0 0;
    }
  }

  &__right {
    background: url('@/assets/img/background_opnion.jpg') no-repeat;
  }
}
.insta {
  &__body {
    padding: 120px 64px;
  }

  &__title {
    text-align: center;
    span {
      border-bottom: 1px solid black;
    }
  }

  &__row {
    margin: 24px 0 0 0;
    display: flex;
    gap: 32px;
  }

  &__img {
  }
}
</style>
