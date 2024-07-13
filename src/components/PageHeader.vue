<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const headerRef = ref(null);

const handleScroll = () => {
  if (headerRef.value) {
    const headerHeight = headerRef.value.offsetHeight;
    if (window.scrollY > headerHeight) {
      headerRef.value.classList.add('scrolled');
    } else {
      headerRef.value.classList.remove('scrolled');
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
  <header ref="headerRef">
    <div class="container container--header">
      <div class="header__logo">
        <div class="logo"></div>
        <h3 class="title">ЮРИСТ ДМИТРИЙ ПОДОРПИГОРА</h3>
      </div>
      <div class="header__nav">
        <a class="nav__item" href="#about">Обо мне</a>
        <a class="nav__item" href="#services">Виды услуг</a>
        <a class="nav__item" href="#payment">Оплата</a>
      </div>
      <div class="header__contacts">
        <a class="telephone" href="tel:+79372220012">+7 (937) 222 00 12</a>
        <a class="email" href="mailto:podoprigorada@gmail.com">podoprigorada@gmail.com</a>
      </div>
    </div>
  </header>
</template>

<style lang="less" scoped>
header {
  position: fixed;
  z-index: 2;
  top: 0;
  background: var(--vt-c-myblack);
  border-bottom: 2px solid var(--vt-c-borders);
  height: 80px;
  align-content: center;
  color: var(--vt-c-mytext-on-black);
  width: 100%;
  transition: background 0.3s, border-bottom 0.3s;
}
header.scrolled {
  background: white;
  color: black;
  border-bottom: 2px solid var(--vt-c-borders);
}
.container--header {
  position: relative;
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
  font-size: 1.5rem;
  align-content: center;
}

.header__contacts{
  position: absolute;
  display: grid;
  line-height: 25px;
  grid-template-rows: 1fr 1fr;
  right: 3%;
  align-self: center;
  align-content: center;
}

.telephone {
  color: #ebc6a6;
  font-weight: 700;
  font-size: 26px;
}
.email {
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: 600;
  text-align: right;
}

@media screen and (max-width: 1500px) {
  .nav__item {
    font-size: 20px;
  }

  a.telephone {
    font-size: 23px;
  }
}

@media screen and (max-width: 1000px) {
  .title {
    font-size: 15px;
    display: flex;
    align-items: center;
  }

  .nav__item {
    font-size: 18px;
  }

  a.telephone {
    font-size: 20px;
  }

  a.email {
    font-size: 13px;
  }
}

@media screen and (max-width: 800px) {
  .container--header {
    grid-template-columns: 5fr 2fr;
  }

  .header__logo{
    grid-template-columns: 1fr 2fr;

    .logo {
      margin: 0;
    }
  }

  .header__nav {
    display: none;
  }

  .title {
    font-size: 16px;
  }

  a.telephone {
    font-size: 15px;
  }

  a.email {
    font-size: 9px;
  }
}
</style>
