<script setup>
import { ref } from 'vue';

const services = ref([
  {
    id: 1,
    title: 'Уголовное право',
    svg: '123',
    examples: [
      {id: 1, subtitle: 'Защита по уголовным делам'},
      {id: 2, subtitle: 'Представительство в суде'},
      {id: 3, subtitle: 'Консультации по уголовным вопросам'}
    ]
  },
  {
    id: 2,
    title: 'Административное право',
    svg: '456',
    examples: [
      {id: 1, subtitle: 'Защита по уголовным делам'},
      {id: 2, subtitle: 'Представительство в суде'},
      {id: 3, subtitle: 'Консультации по уголовным вопросам'}
    ]
  }
]);
</script>

<template>
  <section class="section section--services" id="services">
    <div class="section-title-wrapper">
      <h2 class="section-title">Виды услуг</h2>
    </div>
    <div class="services-wrapper">
      <div class="categories">

      </div>
      <div class="services">
        <div class="service"
             v-for="service in services"
             :key="service.id">
          <p class="advantage-item__text">
            {{ service.titleg }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less">
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: aliceblue;
  height: fit-content;
  width: 100%;
}
.section-title-wrapper {
  display: flex;
  justify-content: center;
}
.services-wrapper {
  background: #222222;
  width: 100%;
  height: 200px;
}
</style>
