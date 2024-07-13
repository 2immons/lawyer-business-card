<script setup>
import { ref  } from 'vue';

let visibleServices = ref([])

const services = ref([
  {
    id: 1,
    title: 'Уголовное право',
    svg: '123',
    visible: false,
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
    visible: false,
    examples: [
      {id: 1, subtitle: 'Защита по уголовным делам'},
      {id: 2, subtitle: 'Представительство в суде'},
      {id: 3, subtitle: 'Консультации по уголовным вопросам222'},
      {id: 4, subtitle: 'Консультации по уголовным вопросам222'},
      {id: 5, subtitle: 'Консультации по уголовным вопросам222'}
    ]
  }
]);

const toggleServicesVisibility = (service) => {
  // Если нажали на включенную
  if (visibleServices.value === service.examples) {
    visibleServices.value = [];
    service.visible = false
    return
  }
  // Если нажали на выключенную
  if (visibleServices.value.length != 0) {
    visibleServices.value = [];
    services.value.forEach((item) => {
      item.visible = false
    })
    setTimeout(() => {
      visibleServices.value = service.examples;
      service.visible = true
    }, 400)
    return
  }
  // Если все выключены
  visibleServices.value = service.examples;
  service.visible = true
};
</script>

<template>
  <section class="section section--services" id="services">
    <div class="container container--services">
      <div class="content-part">
        <div class="section-title-wrapper">
          <h2 class="section-title">Оплата</h2>
        </div>
        <div class="services-wrapper">
          <div class="categories">
            <div class="service"
                 v-for="service in services"
                 :key="service.id">
              <button
                :class="{'category-item__btn': true, 'active': service.visible}"
                @click="toggleServicesVisibility(service)">
                {{ service.title }}
              </button>
            </div>
          </div>
          <Transition name="slide-fade">
            <div class="services" v-if="visibleServices.length > 0">
              <div class="service"
                   v-for="service in visibleServices"
                   :key="service.id">
                <p class="service-item__subtitle">
                  {{ service.subtitle }}
                </p>
              </div>
            </div>
          </Transition>
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

.services-wrapper {
  width: 90%;
  display: grid;
  grid-template-columns: 4fr 5fr;
}

.category-item__btn {
  color: inherit;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 300;
  transition: font-weight 0.3s ease;
  position: relative;
}

.category-item__btn::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.category-item__btn.active {
  font-weight: 600;
}

.category-item__btn.active::after {
  transform: scaleX(1);
}

.service-item__subtitle {
  font-size: 18px;
}

// Transition effects
.slide-fade-enter-active {
  transition: 0.3s ease, opacity 0.2s
}

.slide-fade-leave-active {
  transition: 0.3s ease-in, opacity 0.1s
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-25%);
  opacity: 0;
}
</style>
