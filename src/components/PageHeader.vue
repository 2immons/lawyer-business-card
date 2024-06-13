<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <header>
    <div class="container container--header">
      <div class="header__logo">
        <div class="logo"></div>
        <h3 class="title">ЮРИСТ ДМИТРИЙ ПОДОРПИГОРА</h3>
      </div>
      <div class="header__nav">
        <a class="nav__item" href="#services">Виды услуг</a>
        <a class="nav__item" href="#payment">Оплата</a>
        <a class="nav__item" href="#about">О юристе</a>
      </div>
      <div class="header__contacts">
        Контакты
      </div>
    </div>
  </header>
</template>

<style lang="less">
header {
  position: fixed;
  top: 0;
  background: #222222;
  border-bottom: 5px solid wheat;
  height: 80px;
  align-content: center;
  color: white;
}
.container--header {
  display: grid;
  grid-template-columns: 3fr 5fr 2fr;
}

.header__logo {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.logo {
  background-image: url("../assets/main_photo.PNG");
  background-position: center;
  background-size: 120%;
  background-position-y: 20%;
  background-position-x: 40%;
  aspect-ratio: 1;
  height: 60px;
  border-radius: 50%;
  margin-left: 10px;
}
.title {
  text-align: center;
}

.header__nav {
  align-content: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
}

.nav {

}
.nav__item {
  color: white;
  font-size: 1.5rem;
  align-content: center;
}

.header__contacts{
  align-content: center;
}
</style>
