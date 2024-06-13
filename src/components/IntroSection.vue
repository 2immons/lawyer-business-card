<script setup>
import { ref } from 'vue';

const advantages = ref([
  { id: 1, text: 'Более 25 успешно завершенных дел в пользу клиентов, в том числе в деликатных случаях', svg: '123' },
  { id: 2, text: 'Advantage 2', svg: '456'}
]);

</script>

<template>
  <section class="section">
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
          {{ advantage.svg }}
        </div>
        <p class="advantage-item__text">
          {{ advantage.text }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
.section{
  margin-top: 80px;
}
.intro {
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: 4fr 5fr;
  margin: 30px 0px 30px 0px
}
.photo-wrapper {
  width: 100%;
  aspect-ratio: 1;
}
.main-photo {
  background-image: url("../assets/main_photo.PNG");
  background-position: center;
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
}
.advantage-item {
  display: grid;
  grid-template-rows: 3fr 2fr;
  width: 100%;
  background: blanchedalmond;
  border-radius: 2rem;
  padding: 1rem;
  justify-items: center;
}
.advantage-item__logo {
  height: 50px;
  width: 50px;
  background: red;
}
.advantage-item__text{
  text-align: center;
}
</style>
