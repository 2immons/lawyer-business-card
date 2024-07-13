<script setup>
import { onMounted, ref } from 'vue'

const advantages = ref([
  { id: 1, text: 'Более 25 успешно завершенных дел в пользу клиентов, в том числе в деликатных случаях', svg: 'src/assets/law1.svg' },
  { id: 2, text: 'Advantage 2', svg: 'src/assets/law2.svg'}
]);

</script>

<template>
  <section class="section section--header">
    <div class="container container--header">
      <div class="intro">
        <div class="photo-wrapper">
          <div class="main-photo"></div>
        </div>
        <div class="slogan-wrapper">
          <h3 class="slogan">Защищу ваше право на справедливость. Надежный советник и защитник в сложных юридических вопросах.</h3>
        </div>
      </div>
      <div class="advantages">
        <div class="advantage-item"
            v-for="advantage in advantages"
            :key="advantage.id">
          <div class="advantage-item__logo">
            <img :src="advantage.svg" alt="Advantage Logo">
          </div>
          <p class="advantage-item__text">
            {{ advantage.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
.section--header{
  margin-top: 110px;
  margin-bottom: 30px;
  height: calc(100vh - 130px)
}

.container--header {
  display: grid;
  height: 100%;
  grid-template-rows: 2fr 1fr;
}

.intro {
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: 4fr 5fr;
  margin: 30px 0 30px 0
}
.photo-wrapper {
  width: 100%;
  aspect-ratio: 1;
}
.main-photo {
  background-image: url("../assets/main_photo.PNG");
  background-position: center;
  border: 2px solid var(--vt-c-borders);
  background-size: 120%;
  background-position-y: 20%;
  background-position-x: 40%;
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
.slogan-wrapper {
  align-self: center;
  justify-content: center;
}
.slogan {
  text-align: center;
  padding: 10%;
  font-size: 2em;
}
.advantages {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5%;
  justify-items: center;
  margin-bottom: 1%;
}
.advantage-item {
  display: grid;
  grid-template-rows: 1.5fr 1fr;
  width: 100%;
  border-radius: 15px;
  border-right: 5px solid var(--vt-c-borders);
  border-bottom: 5px solid var(--vt-c-borders);
  background: var(--vt-c-mywhite);
  padding: 1rem;
  justify-items: center;
  color: var(--vt-c-white-mute);
}
.advantage-item__logo {
  background: var(--vt-c-borders);
  height: 100%;
  aspect-ratio: 1;
  padding: 2.5%;
  border-radius: 35%;
}
.advantage-item__text{
  text-align: center;
  font-weight: 500;
}

@media screen and (max-width: 850px) {
  .intro {
    display: block;
  }

  .photo-wrapper {
    display: flex;
    justify-content: center;
    max-height: 200px;
  }

  .main-photo {
    width: auto;
    aspect-ratio: 1;
  }

  .slogan-wrapper {
    max-height: 200px;
  }

  .slogan {
    font-size: 1.2rem;
    padding: 20px;
  }

  .advantages {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }

  .advantage-item {
    display: grid;
    grid-template-rows: 1fr 1fr;
    max-width: 330px;
  }
}
</style>
