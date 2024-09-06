<script setup>
import { ref } from 'vue'
import { usersStore } from '@/store/users.ts'

const usersStoreInstance = usersStore()

const emit = defineEmits(["close-modal"])

const loginData = ref({
  login: '',
  password: '',
})

const regData = ref({
  name: '',
  login: '',
  password: '',
  repeatPassword: ''
})

const isSignUpMode = ref(false)
const isLoginMode = ref(true)
const movingDirection = ref('right')

const switcherClass = ref("switcher__drag-left")
const switcherText = ref("Авторизация")
const switcherTextClass = ref("switcher__text-left")

// switchForms переключает формы: запускает сдвиг форм, переключателя и текста переключателя
const switchForms = () => {
  // Переключаем формы
  isSignUpMode.value = isLoginMode.value
  isLoginMode.value = !isLoginMode.value

  // Определяем направление
  if (isSignUpMode.value) {
    switcherText.value = "Регистрация"
    switcherClass.value = "switcher__drag-right"
    switcherTextClass.value = "switcher__text-right"
    movingDirection.value = 'left'
  } else {
    switcherText.value = "Авторизация"
    switcherClass.value = "switcher__drag-left"
    switcherTextClass.value = "switcher__text-left"
    movingDirection.value = 'right'
  }
}

const login = async () => {
  try {
    await usersStoreInstance.loginUser(loginData.value)
    emit('close-modal')
  } catch (error) {
    console.error(error)
  }
}

const signUp = async () => {
  try {
    await usersStoreInstance.createUser(regData.value)
    emit('close-modal')
  } catch (error) {
    console.error(error)
  }
}

</script>

<template>
  <div class="auth-bg" @click="$emit('close-modal')">
    <div class="container">
      <div class="auth-modal" @click.stop>

        <div class="form-container" :class="movingDirection">
          <!-- Форма авторизации -->
          <form class="login-form">
            <h1>Авторизация</h1>
            <div class="inputs-group">
              <div class="input-wrapper">
                <label for="">Логин:</label>
                <input type="text" v-model="loginData.login">
              </div>
              <div class="input-wrapper">
                <label for="">Пароль:</label>
                <input type="text" v-model="loginData.password">
              </div>
            </div>
            <button class="auth-btn" type="button" @click="login">Войти</button>
          </form>

          <!-- Форма регистрации -->
          <form class="signup-form">
            <h1>Регистрация</h1>
            <div class="inputs-group">
              <div class="input-wrapper">
                <label for="">Как к вам обращаться:</label>
                <input type="text" v-model="regData.name">
              </div>
              <div class="input-wrapper">
                <label for="">Логин:</label>
                <input type="text" v-model="regData.login">
              </div>
              <div class="input-wrapper">
                <label for="">Пароль:</label>
                <input type="text" v-model="regData.password">
              </div>
              <div class="input-wrapper">
                <label for="">Подтвердите пароль:</label>
                <input type="text" v-model="regData.repeatPassword">
              </div>
            </div>
            <button class="auth-btn" type="button" @click="signUp">Зарегистрироваться</button>
          </form>
        </div>

        <!-- Переключатель -->
        <div class="switcher-wrapper">
          <button class="switcher" @click="switchForms">
            <span :class="switcherClass"></span>
            <span :class="switcherTextClass">{{ switcherText }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.auth-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.3);
  color: black;
}

.auth-modal {
  background: white;
  min-width: 300px;
  width: 400px;
  padding: 30px 20px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid var(--vt-c-borders);
  box-shadow: 0 0 30px rgba(0,0,0,0.5);
}

.form-container {
  display: flex;
  width: 220%;
  transition: transform 0.4s ease;
  gap: 10%;
}

.form-container.right {
  transform: translateX(0);
}

.form-container.left {
  transform: translateX(-55%);
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.inputs-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  width: 100%;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
}

input {
  height: 35px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid black;
}

.auth-btn {
  background: var(--vt-c-white-mute);
  border-radius: 12px;
  border: 1px solid var(--vt-c-borders);
  padding: 5px 15px;
  font-size: 18px;
  height: 50px;
  cursor: pointer;
  transition: 0.2s ease;
}

.auth-btn:hover {
  background: var(--vt-c-white);
  scale: 1.05;
}

/* Переключатель */
.switcher-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 40px;
  margin-top: 30px;
}

.switcher {
  position: relative;
  background: var(--vt-c-white-mute);
  height: 40px;
  width: 140px;
  border-radius: 40px;
  border: 1px solid black;
  cursor: pointer;
}

.switcher__drag-left,
.switcher__drag-right {
  position: absolute;
  background: var(--vt-c-myblue);
  height: 30px;
  width: 30px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  transition: left 0.2s ease;
}

.switcher__drag-left {
  left: 5px;
}

.switcher__drag-right {
  left: 105px;
}

.switcher__text-left,
.switcher__text-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  color: var(--vt-c-mywhite);
  font-weight: 600;
  font-size: 14px;
  transition: left 0.2s ease;
}

.switcher__text-left {
  left: 40px;
}

.switcher__text-right {
  left: 10px;
}

</style>
