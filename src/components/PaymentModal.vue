<template>
  <div class="modal" v-if="isPaymentModalVisible2" @click="closeModal">
    <div class="modal-content" @click.stop>
      <form @submit.prevent="submitForm">
        <h2>{{ subtitle }}</h2>

        <hr>

        <div class="form-component form-component--name">
          <p>Ваше имя:</p>
          <input type="text" class="input-field" v-model="regData.name" placeholder="Иван Иванович">
        </div>

        <div class="form-component form-component--city-select">
          <p>Ваш город:</p>
          <div class="cities-list">
            <input class="input-field" type="text" v-model="citySearch" @input="filterCities" @blur="isCitiesVisible = false" placeholder="Начните ввод...">
            <div v-if="isCitiesVisible" class="cities-wrapper">
              <button type="button" class="city-button" v-for="city in filteredCities" :key="city.id" @click="selectCity(city)">
                {{ city.name }}
              </button>
            </div>
          </div>
        </div>

        <div class="form-component form-component--contacts">
          <p>Способ связи:</p>
          <input type="text" class="input-field" placeholder="Телефон/телеграм/почта">
        </div>

        <div class="form-component form-component--signup">
          <p>Желаете зарегистрироваться?</p>
          <input class="signup-checkbox" type="checkbox" @v-model="isSignupMode" @input="isSignupMode = !isSignupMode">
        </div>

        <div class="form-component form-component--signup-wrapper" v-show="isSignupMode">
          <div class="form-component form-component--signup-field">
            <p>Номер телефона:</p>
            <input type="tel" v-model="regData.login" class="input-field" placeholder="89999999999">
          </div>
          <div class="form-component form-component--signup-field">
            <p>Пароль:</p>
            <input type="text" v-model="regData.password" class="input-field" placeholder="Пароль...">
          </div>
          <div class="form-component form-component--signup-field">
            <p>Подтвердите пароль:</p>
            <input type="text" class="input-field" placeholder="Подтвердите пароль...">
          </div>
        </div>

        <div class="form-component form-component--text">
          <p>Расскажите о вашей задаче:</p>
          <textarea class="textarea-field"
                    maxlength="20000"
                    placeholder="Пример: требуется обжаловать постановление об административном нарушении — несогласованной вырубке дерева."
                    style="height: 64px;">2
        </textarea>
        </div>

        <div class="form-component form-component--price">
          <p>Примерная начальная стоимость услуги: <span class="price__value">от {{ price }} рублей</span></p>
        </div>

        <div class="form-component form-component--payment">
          <p>Переведите 50% в качестве предоплаты: {{ price / 2 }} рублей.</p>
          <p>По номеру телефона: 8 999 999 99 99</p>
        </div>

        <button class="confirm-btn" type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch, computed } from 'vue';
import citiesData from '../assets/russia-cities.json';
import { ordersStore } from '@/store/orders.ts'
import { usersStore } from '@/store/users.ts'

const ordersStoreInstance = ordersStore()
const usersStoreInstance = usersStore()

const cities = ref(citiesData)

const emits = defineEmits([
  "payment",
  "cancel"
]);

const selectedCity = ref('')

const isSignupMode = ref(false)

const selectCity = (city) => {
  selectedCity.value = city
  isCitiesVisible.value = false
  console.log("Выбран город: " + selectedCity.value.name)
}

const citySearch = ref('')

const filterCities = () => {
  isCitiesVisible.value = true
}

const filteredCities = computed(() => {
  let filterCities = cities.value
  if (citySearch.value) {
    console.log(citySearch.value)
    filterCities = filterCities.filter(item => item.name.toString().toLowerCase().includes(citySearch.value.toString().toLowerCase()));
  }
  return filterCities
});

const props = defineProps({
  isPaymentModalVisible: Boolean,
  service: {
    id: Number,
    subtitle: String,
    price: Number
  }
});

const isCitiesVisible = ref(false);

const isPaymentModalVisible2 = ref(props.isPaymentModalVisible);
const service2 = ref(props.service)

const price = ref('')
const subtitle = ref('')

watch(() => props.isPaymentModalVisible, (newValue) => {
  isPaymentModalVisible2.value = newValue;
});

watch(() => props.service, (newValue) => {
  service2.value = {...newValue};
  price.value = service2.value.price
  subtitle.value = service2.value.subtitle
});

const closeModal = () => {
  isPaymentModalVisible2.value = false
  emits('cancel')
}

const serviceTitle = ref('')
const clientTask = ref('')
// const clientContacts = ref('')
// const clientName = ref('')
// const clientCity = ref('')

const regData = ref({
  password: '',
  login: '',
  name: ''
})

const clientId = ref(1)

const order = ref({
  serviceTitle: serviceTitle.value,
  clientTask: clientTask.value,
  clientId: clientId.value,
})

const submitForm = async () => {
  if (isSignupMode.value) {
    try {
      await usersStoreInstance.createUser(regData)
    } catch (error) {
      console.error(error)
      return
    }
  }
  try {
    await ordersStoreInstance.createOrder(order.value)
  } catch (error) {
    console.error(error)
  }
}
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  display: flex;
  background: #fff;
  padding: 20px;
  z-index: 6;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  width: 50%;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: black;
  min-width: 370px;
  max-width: 800px;
  border: 1px solid black;
}

form {
  display: flex;
  flex-direction: column;
  color: black;
  width: 100%;
  padding: 20px 10px 20px 10px
}

.form-component {
  display: flex;
  justify-self: start;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;

  p {
    text-align: left;
  }
}

.form-component--name{
  width: 100%;
  align-self: start;
  margin-top: 10px;

  p {
    min-width: 120px;
  }
}

.form-component--contacts{
  width: 100%;
  align-self: start;
  margin-top: 10px;

  p {
    min-width: 120px;
  }
}

.form-component--signup {
  width: 100%;
  margin-top: 10px;
  justify-content: center;

  p {
    font-weight: bold;
    min-width: 230px;
  }
}

.form-component--signup-wrapper{
  display: flex;
  flex-direction: column;
  align-self: start;
  justify-self: start;
  align-items: start;
}

.form-component--signup-field {
  p {
    min-width: 160px;
  }
}

.form-component--price {
  width: 100%;
  align-self: start;
  display: flex;
  flex-direction: row;
}

.form-component--text {
  flex-direction: column;
  align-items: start;
}

.form-component--payment {
  flex-direction: column;
}

.price__value {
  font-weight: bold;
}

.form-component--city-select{
  width: 100%;
  position: relative;
  z-index: 20;

  p {
    min-width: 120px;
  }
}

.cities-list {
  position: relative;
}

.cities-wrapper{
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: start;
  position: absolute;
  width: 100%;
  top: 43px;
  height: 150px;
  z-index: 25;
  color: black;
  background: white;
  border: 1px solid black;
  border-radius: 5px;
}

.city-button {
  border: none;
  color: black;
  background: transparent;
  font-size: inherit;
  font-weight: inherit;
  cursor: pointer;
}

.textarea-field {
  width: 100%;
}

.confirm-btn {
  align-self: center;
  background: transparent;
  width: 50%;
  min-width: 150px;
  max-width: 200px;
  border: 1px solid black;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  padding: 10px 20px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

button:hover {
  background-color: white; /* White background on hover */
  color: #007BFF; /* Primary color for text on hover */
}

button:active {
  background-color: #0056b3; /* Darker shade of primary color for active state */
  border-color: #0056b3;
  color: white;
}

button:disabled {
  background-color: #cccccc; /* Gray background for disabled state */
  border-color: #cccccc;
  color: #666666; /* Gray text for disabled state */
  cursor: not-allowed;
}

input[type="text"], input[type="tel"], textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

input[type="text"]:focus, textarea:focus {
  border-color: #007BFF;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  outline: none;
}

input[type="text"]::placeholder, textarea::placeholder {
  color: #999;
}
</style>
