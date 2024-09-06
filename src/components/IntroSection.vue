<script setup>
import { ref } from 'vue'

const advantages = ref([
  { id: 1, text: 'Более 25 успешно завершенных дел в пользу клиентов, в том числе в деликатных случаях', svg: 'src/assets/law1.svg' },
  { id: 2, text: 'Большой опыт в различных сферах законодательства', svg: 'src/assets/law2.svg'}
]);

</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section-content">
        <div class="intro">
          <div class="photo-wrapper">
            <img class="main-photo" src="../assets/main_photo.PNG" alt="">
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
              <div class="advantage-logo-bg">
                <img class="advantage-logo" :src="advantage.svg" alt="Advantage Logo">
              </div>
            </div>
            <p class="advantage-item__text">
              {{ advantage.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
.intro {
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: 4fr 5fr;
}

@media (max-width: 913px) {
  .intro {
    display: flex;
    flex-direction: column;
  }
}

.photo-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 400px;
  aspect-ratio: 1;
}
.main-photo {
  border: 2px solid var(--vt-c-borders);
  aspect-ratio: 1;
  object-fit: cover;
  object-position: top;
  height: 100%;
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
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  max-height: 500px;
  gap: 30px;
  justify-content: space-evenly;
}
.advantage-item {
  display: flex;
  align-items: center;
  gap: 20px;
  max-height: 200px;
  min-height: 150px;
  max-width: 450px;
  border-radius: 15px;
  border-right: 5px solid var(--vt-c-borders);
  border-bottom: 5px solid var(--vt-c-borders);
  background: var(--vt-c-mywhite);
  padding: 1rem;
  color: var(--vt-c-white-mute);
}
.advantage-item__logo {
  display: flex;
  align-items: center;
  height: 100%;
}

.advantage-logo-bg {
  background: var(--vt-c-borders);
  height: 80px;
  border-radius: 12px;
}

.advantage-logo {
  padding: 5px;
  height: 100%;
}

.advantage-item__text{
  text-align: left;
  font-weight: 500;
}

@media (max-width: 465px) {
  .photo-wrapper {
    height: 300px;
  }
  .slogan {
    font-size: 22px;
  }
}
</style>
