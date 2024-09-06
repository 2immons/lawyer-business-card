<script setup>
</script>

<template>
  <section class="section section--about" id="about">
    <div class="container">
      <div class="section-content section-content--about">
        <div class="content-part">
          <div class="section-title-wrapper">
            <h2 class="section-title">Обо мне</h2>
          </div>
          <div class="about-wrapper">
            <p>Доброго времени суток, дорогой клиент. Меня зовут Дмитрий. Я юрист. Окончил два высших образовательных учреждения: КГУ им. Н.А. Некрасова (экономика, финансы и кредит); ФГБОУВО "КГУ", ЮИН им. Ю.П. Новицкого (юрист в судебных и правоохранительных органах).</p>
            <br>
            <p>Имею большой опыт юридической практики. Работаю с делами любой сложности, в различных сферах законодательства.</p>
            <br>
            <p>Я гарантирую:</p>
            <ul>
              <li>ответственный и индивидуальный подход к решению ваших вопросов;</li>
              <li>лучший способ защиты ваших интересов и права;</li>
              <li>оказание услуг по доступной цене;</li>
              <li>анонимность;</li>
              <li>вежливость и оперативность.</li>
            </ul>

            <p>Жду вашего звонка и заранее рад сотрудничеству!</p>
          </div>
        </div>
        <div class="bg-picture-wrapper">
          <img class="bg-picture" src="../assets/photo1.jpg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
.section--about{
  justify-content: center;
  background: var(--vt-c-mywhite);
  color: white;
  width: 100%;
  height: fit-content;
}

.section-content--about {
  display: grid;
  grid-template-columns: 7fr 5fr;
}

.bg-picture-wrapper {
  z-index: 1;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.bg-picture {
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden; /* Масштабирует изображение так, чтобы оно покрывало весь контейнер, сохраняя пропорции */
}

.content-part {
  height: 100%;
  padding: 0 3% 0 0;
}

.about-wrapper {
  font-size: 20px;
  padding-right: 17%;
}

@media screen and (max-width: 1350px) {
  .about-wrapper {
    font-size: 18px;
  }
}

@media screen and (max-width: 1000px) {
  .container--about {
    background: none;
  }

  .section-content--about {
    grid-template-columns: 1fr
  }

  .about-wrapper {
    padding: 0;
  }

  .section--about {
    background: rgb(52, 59, 73);
    background: linear-gradient(115deg, rgba(52, 59, 73, 1) 0%, rgba(52, 59, 73, 0.9420063025210083) 66%, rgba(0, 212, 255, 0.00043767507002800965) 100%), url("/src/assets/photo1.jpg");
    background-size: cover;
    background-position: right;
  }

  .bg-picture-wrapper {
    display: none;
  }
}

@media screen and (max-width: 850px) {
  .about-wrapper {
    font-size: 18px;
  }
}


@media screen and (max-width: 620px) {
  .about-wrapper {
    padding-right: 0;
    font-size: 17px;
  }
}

@media screen and (max-width: 450px) {
  .about-wrapper {
    font-size: 16px;
  }
}
</style>
