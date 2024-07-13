<script setup>
</script>

<template>
  <section class="section section--services" id="services">
    <div class="container container--services">
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
    <div class="bg-part"></div>
  </section>
</template>

<style lang="less" scoped>
.section--services{
  position: relative;
  display: grid;
  grid-template-columns: 5fr 3fr;
  justify-content: center;
  background: var(--vt-c-mywhite);
  color: white;
  width: 100%;
}

.container--services {
  position: absolute;
  justify-self: center;
  justify-content: center;
  background: var(--vt-c-mywhite);
  display: grid;
  width: 100%;
  grid-template-columns: 7fr 5fr;
  padding: 50px 0 50px 0;
  height: 100%;
}

.bg-part{
  z-index: -1;
  height: 100%;
  background: var(--vt-c-white-soft);
}

.bg-picture-wrapper {
  z-index: 1;
  height: 100%;
  overflow: hidden;
}

.bg-picture {
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Масштабирует изображение так, чтобы оно покрывало весь контейнер, сохраняя пропорции */
}

.content-part {
  height: 100%;
  padding: 0 3% 0 0;
}

.about-wrapper {
  font-size: 20px;
  padding-right: 17%;
}
</style>
