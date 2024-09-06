<script setup>
import { ref  } from 'vue';
import PaymentModal from '@/components/PaymentModal.vue'

let visibleServices = ref([])
let isPaymentModalVisible = false

const services = ref([
  {
    id: 1,
    title: 'Административное право',
    svg: '123',
    visible: false,
    examples: [
      {id: 1, subtitle: 'Консультации юристов по административным спорам', price: 4000},
      {id: 2, subtitle: 'Обжалование постановлений об административных правонарушениях', price: 3000},
      {id: 3, subtitle: 'Помощь юристов в административных спорах о неосновательном обогащении', price: 4000},
      {id: 4, subtitle: 'Обжалование административных штрафов', price: 4000},
    ]
  },
  {
    id: 2,
    title: 'Составление и проверка юридических документов',
    svg: '456',
    visible: false,
    examples: [
      {id: 1, subtitle: 'Составление исковых заявлений', price: 3000},
      {id: 2, subtitle: 'Проверка договора купли-продажи', price: 1000},
      {id: 3, subtitle: 'Консультация по юридическим документам', price: 1000},
      {id: 4, subtitle: 'Составление жалоб юристом', price: 2000},
      {id: 4, subtitle: 'Юридическая проверка документов и договоров', price: 2000},
      {id: 4, subtitle: 'Составление кассационных жалоб', price: 5000},
      {id: 4, subtitle: 'Составление ходатайств', price: 500},
      {id: 4, subtitle: 'Юридическая проверка договора аренды', price: 1000},
      {id: 4, subtitle: 'Составление апелляционных жалоб', price: 3000},
    ]
  },
  {
    id: 2,
    title: 'Проверка документов и договоров',
    svg: '456',
    visible: false,
    examples: [
      {id: 1, subtitle: 'Юридическая проверка договоров аренды', price: 3000},
      {id: 2, subtitle: 'Юридическая проверка хозяйственных договоров', price: 3000},
      {id: 3, subtitle: 'Юридическая проверка учредительных документов', price: 3000},
    ]
  },
  {
    id: 2,
    title: 'Арбитражные дела',
    svg: '456',
    visible: false,
    examples: [
      {id: 1, subtitle: 'Консультация юриста по арбитражным спорам', price: 1000},
      {id: 2, subtitle: 'Арбитражные споры по долгам', price: 2000},
      {id: 3, subtitle: 'Защита деловой репутации юридического лица', price: 3000},
      {id: 4, subtitle: 'Арбитражные споры по договорам поставки', price: 1000},
      {id: 4, subtitle: 'Арбитражные споры по аренде и лизингу', price: 2000},
    ]
  },
  {
    id: 2,
    title: 'Защита прав потребителей', // доделать
    svg: '456',
    visible: false,
    examples: [
      {id: 1, subtitle: 'Юридическая проверка договоров аренды', price: 3000},
      {id: 2, subtitle: 'Юридическая проверка хозяйственных договоров', price: 3000},
      {id: 3, subtitle: 'Юридическая проверка учредительных документов', price: 3000},
    ]
  },
  {
    id: 2,
    title: 'Семейное право',
    svg: '456',
    visible: false,
    examples: [
      {id: 1, subtitle: 'Помощь юристов при расторжении брака', price: 1000},
      {id: 2, subtitle: 'Юридические консультации по семейным спорам', price: 1000},
      {id: 3, subtitle: 'Помощь юристов при взыскании алиментов', price: 2000},
      {id: 4, subtitle: 'Помощь юристов при разделе совместно нажитого имущества', price: 3000},
      {id: 4, subtitle: 'Разрешение семейных споров о порядке общения с детьми', price: 2000},
      {id: 3, subtitle: 'Помощь юристов при установлении отцовства', price: 3000},
      {id: 4, subtitle: 'Составление исков об определении порядка общения с детьми', price: 2000},
      {id: 4, subtitle: 'Составление исков о разделе совместного нажитого имущества', price: 3000},
    ]
  },
  {
    id: 2,
    title: 'Взыскание долгов',
    svg: '456',
    visible: false,
    examples: [
      {id: 1, subtitle: 'Взыскание долгов по расписке', price: 3000},
      {id: 2, subtitle: 'Консультация юриста по взысканию долгов', price: 1000},
      {id: 3, subtitle: 'Взыскание долгов по исполнительному листу', price: 3000},
      {id: 2, subtitle: 'Взыскание долгов без расписки', price: 5000},
      {id: 3, subtitle: 'Составление заявления о взыскании долга по расписке', price: 3000},
    ]
  },
  {
    id: 2,
    title: 'Жилищные вопросы',
    svg: '456',
    visible: false,
    examples: [
      {id: 1, subtitle: 'Юридические консультации по жилищным спорам', price: 1000},
      {id: 2, subtitle: 'Помощь юристов с выпиской и выселением из квартиры', price: 1000},
      {id: 3, subtitle: 'Помощь юристов с приватизацией жилья', price: 10000},
      {id: 4, subtitle: 'Споры о праве собственности на недвижимость', price: 2000},
      {id: 4, subtitle: 'Составление исков о порядке пользования квартирой', price: 5000},
    ]
  },
  {
    id: 2,
    title: 'Наследственные дела',
    svg: '456',
    visible: false,
    examples: [
      {id: 1, subtitle: 'Консультация юриста по наследственным спорам', price: 1000},
      {id: 2, subtitle: 'Помощь юриста в восстановлении срока принятия наследства', price: 3000},
      {id: 3, subtitle: 'Помощь юриста в определении долей в наследстве', price: 1000},
      {id: 4, subtitle: 'Составление иска о признании завещания недействительным', price: 3000},
      {id: 4, subtitle: 'Оспаривание наследства', price: 5000},
      {id: 4, subtitle: 'Составление иска об оспаривании наследства', price: 2000},
      {id: 4, subtitle: 'Помощь юриста при взыскании долгов наследодателя с наследников', price: 1000},
    ]
  },
  {
    id: 2,
    title: 'Трудовому право', // доделать
    svg: '456',
    visible: false,
    examples: [
      {id: 1, subtitle: 'Консультации юристов по трудовому законодательству', price: 1000},
      {id: 2, subtitle: 'Юридическое представительство в судах для решения трудовых споров', price: 0},
      {id: 3, subtitle: 'Консультации юристов по трудовым спорам', price: 500},
      {id: 4, subtitle: 'Составление претензий в трудовую инспекцию', price: 1000},
      {id: 4, subtitle: 'Взыскание заработной платы', price: 2000},
    ]
  },
  {
    id: 2,
    title: 'Работа с договорами на выполнение работ',
    svg: '456',
    visible: false,
    examples: [
      {id: 1, subtitle: 'Составление договоров на выполнение работ', price: 5000},
      {id: 2, subtitle: 'Составление договоров на временную работу', price: 7000},
      {id: 3, subtitle: 'Составление актов выполненных работ по договору', price: 2000},
      {id: 4, subtitle: 'Составление договоров на выполнение кадастровых работ', price: 7000},
      {id: 4, subtitle: 'Составление актов приёма-передачи работ по договору подряда', price: 2000},
    ]
  },
  {
    id: 2,
    title: 'Кредитные вопросы',
    svg: '456',
    visible: false,
    examples: [
      {id: 1, subtitle: 'Юридические консультации по кредитным спорам', price: 1000},
      {id: 2, subtitle: 'Помощь юристов при незаконных действиях коллекторов', price: 1000},
      {id: 3, subtitle: 'Помощь юристов при лизинге авто', price: 2000},
      {id: 4, subtitle: 'Расторжение кредитных договоров по инициативе заёмщиков', price: 3000},
      {id: 4, subtitle: 'Составление договоров на лизинг авто', price: 2000},
      {id: 4, subtitle: 'Составление заявлений о расторжении кредитных договоров', price: 1000},
    ]
  },
  {
    id: 2,
    title: 'Земельные вопросы', // ДОДЕЛАТЬ
    svg: '456',
    visible: false,
    examples: [
      {id: 1, subtitle: 'Консультация юриста по арбитражным спорам', price: 1000},
      {id: 2, subtitle: 'Арбитражные споры по долгам', price: 2000},
      {id: 3, subtitle: 'Защита деловой репутации юридического лица', price: 3000},
      {id: 4, subtitle: 'Арбитражные споры по договорам поставки', price: 1000},
      {id: 4, subtitle: 'Арбитражные споры по аренде и лизингу', price: 2000},
    ]
  },
  {
    id: 2,
    title: 'Страховые споры',
    svg: '456',
    visible: false,
    examples: [
      {id: 1, subtitle: 'Споры со страховыми компаниями', price: 2000},
      {id: 2, subtitle: 'Консультация юриста по страховым спорам', price: 1000},
      {id: 3, subtitle: 'Помощь юриста при отказе в страховой выплате', price: 2000},
      {id: 4, subtitle: 'Составление заявления о взыскании страховой выплаты', price: 2000},
      {id: 4, subtitle: 'Взыскание страховых выплат', price: 2000},
      {id: 3, subtitle: 'Взыскание неустойки по страховым спорам', price: 1000},
    ]
  },
  {
    id: 2,
    title: 'Автомобильное право',
    svg: '456',
    visible: false,
    examples: [
      {id: 1, subtitle: 'Консультация юриста по автомобильным спорам', price: 1000},
      {id: 2, subtitle: 'Взыскание ущерба с виновника ДТП', price: 2000},
      {id: 3, subtitle: 'Защита виновника ДТП', price: 5000},
      {id: 4, subtitle: 'Оспаривание автоштрафов', price: 1000},
      {id: 4, subtitle: 'Взыскание материального ущерба при ДТП', price: 1000},
      {id: 4, subtitle: 'Взыскание морального вреда при ДТП', price: 1000},
      {id: 4, subtitle: 'Возмещение ущерба причиненного ДТП с муниципального образования', price: 1000},
    ]
  }
]);

const selectedService = ref('')
const openPaymentModal = (service) => {
  selectedService.value = service
  isPaymentModalVisible = true
}

const searchText = ref('')

// const filteredServices = ref([...services])

const handleSearch = () => {
  if (searchText.value === '') return
  console.log(searchText.value)
}

const toggleServicesVisibility = (service) => {
  // Если нажали на включенную
  if (visibleServices.value === service.examples) {
    visibleServices.value = [];
    service.visible = false
    return
  }
  // Если нажали на выключенную
  if (visibleServices.value.length !== 0) {
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
    <PaymentModal :is-payment-modal-visible="isPaymentModalVisible" :service="selectedService" @cancel="isPaymentModalVisible = false" @payment="console.log(2)" />
    <div class="container">
      <div class="section-content section-content--services">
        <div class="bg-picture-wrapper">
          <img class="bg-picture" src="../assets/photo1.jpg" alt="">
        </div>
        <div class="content-part">
          <div class="section-title-wrapper">
            <h2 class="section-title">Услуги</h2>
          </div>
          <div class="search-wrapper">
            <input type="text" class="service-search" placeholder="Введите название услуги..."
                   @input="handleSearch"
                   v-model="searchText">
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
                  <button class="service-wrapper" @click="openPaymentModal(service)">
                <span class="service-item__subtitle">
                  {{ service.subtitle }}
                </span>
                    <span class="service-item__price">
                  от {{ service.price }} руб.
                </span>
                  </button>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
.section--services{
  justify-content: center;
  background: var(--vt-c-white-mute);
  color: white;
  width: 100%;
  height: fit-content;
}

.section-content--services {
  display: grid;
  grid-template-columns: 5fr 7fr;
}

.bg-picture-wrapper {
  z-index: 1;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 3% 0 0;
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
}

.services {
  max-height: 479px;
  overflow-y: scroll;
}

.search-wrapper {
  margin: 30px 0;
  width: 100%;
}

.service-search {
  min-width: 300px;
  padding: 5px 3px;
  font-size: 14px;
  width: 70%;
  height: 35px;
}

.services-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: 6fr 5fr;
  color: #49505f;
}

.service-wrapper{
  display: grid;
  grid-template-columns: 2fr 1fr;
  border: none;
  padding: 0;
  text-align: left;
  font-weight: inherit;
  font-size: inherit;
  cursor: pointer;
  background: transparent;
}

.section-title{
  color: #49505f
}

.service {
  margin-bottom: 5px;
}

.categories {
  max-width: 395px;
}

.category-item__btn {
  color: inherit;
  background: transparent;
  border: none;
  font-size: 19px;
  cursor: pointer;
  width: fit-content;
  text-decoration: none;
  font-weight: 300;
  transition: font-weight 0.3s ease;
  position: relative;
  text-align: start;
  white-space: pre-wrap;
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

.service-item__price {
  font-size: 18px;
  font-weight: bold;
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

@media screen and (max-width: 1000px) {
  .container--services {
    background: none;
  }

  .section-content--services {
    grid-template-columns: 1fr
  }

  .about-wrapper {
    padding: 0;
  }

  .section--services {
    background: rgb(52, 59, 73);
    background: linear-gradient(115deg, rgba(242,242,242,1) 0%, rgba(242,242,242,0.9444152661064426) 50%, rgba(0,212,255,0.00043767507002800965) 100%), url("/src/assets/photo1.jpg");
    background-size: cover;
    background-position: right;
  }

  .bg-picture-wrapper {
    display: none;
  }
}
</style>
