<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { usersStore } from '@/store/users.ts';
import AuthModal from '@/components/AuthModal.vue'

const headerRef = ref(null);

const handleScroll = () => {
  closeAuthMenu()
  if (headerRef.value) {
    const headerHeight = headerRef.value.offsetHeight;
    if (window.scrollY > headerHeight) {
      headerRef.value.classList.add('scrolled');
    } else {
      headerRef.value.classList.remove('scrolled');
    }
  }
};

const isAuthModalVisible = ref(false)

const authBtnText = computed(() => {
  return usersStore().displayName || 'Войти';
});

const openAuthMenu = () => {
  if (usersStore().displayName) {
    isAuthMenuVisible.value = !isAuthMenuVisible.value
  } else {
    isAuthModalVisible.value = true
  }
}

const closeAuthModal = () => {
  isAuthModalVisible.value = false
}

const closeAuthMenu = () => {
  isAuthMenuVisible.value = false
}

const logout = async () => {
  await usersStore().logout()
  closeAuthMenu()
}

const isAuthMenuVisible = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
});

</script>

<template>
  <header ref="headerRef">
    <AuthModal v-if="isAuthModalVisible" @close-modal="closeAuthModal" style="position: absolute;" />
    <div class="container">
      <div class="header-content">
        <div class="header__logo">
          <img class="logo" src="../assets/main_photo.PNG" alt="">
          <h3 class="title">ЮРИСТ ДМИТРИЙ<br>ПОДОРПИГОРА</h3>
        </div>
        <div class="header__nav">
          <a class="nav__item" href="#about">Обо мне</a>
          <a class="nav__item" href="#services">Услуги</a>
        </div>
        <div class="header__contacts">
          <a class="telephone" href="tel:+79372220012">+7 (937) 222 00 12</a>
          <a class="email" href="mailto:podoprigorada@gmail.com">podoprigorada@gmail.com</a>
        </div>
        <div class="auth-btn-wrapper">
          <button class="auth-btn" @click="openAuthMenu">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.3999 19.5124C1.3999 15.7369 4.55419 12.6762 10.9999 12.6762C17.4456 12.6762 20.5999 15.7369 20.5999 19.5124C20.5999 20.1131 20.1617 20.6 19.6211 20.6H2.37873C1.83814 20.6 1.3999 20.1131 1.3999 19.5124Z" stroke="black" stroke-width="2"/>
              <path d="M14.5999 5.00002C14.5999 6.98825 12.9881 8.60002 10.9999 8.60002C9.01168 8.60002 7.3999 6.98825 7.3999 5.00002C7.3999 3.0118 9.01168 1.40002 10.9999 1.40002C12.9881 1.40002 14.5999 3.0118 14.5999 5.00002Z" stroke="black" stroke-width="2"/>
            </svg>
            {{ authBtnText }}
          </button>
          <div class="profile-menu" v-if="isAuthMenuVisible">
            <hr>
            <button class="profile-menu__btn">Профиль</button>
            <button class="profile-menu__btn" @click="logout">Выйти</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="less" scoped>
header {
  position: sticky;
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
.header-content {
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
}

.header__logo {
  height: 100%;
  align-items: center;
  display: flex;
  gap: 10px;
}
.logo {
  height: 60px;
  border-radius: 50%;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: top;
}
.title {
  text-align: center;
  white-space: nowrap;
  font-weight: 600;
}

.header__nav {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 50px;
  margin: 0 7%;
  width: 100%;
}

hr {
  border: 1px solid var(--vt-c-borders);
  width: 100%;
}

.nav__item {
  font-size: 1.5rem;
  align-content: center;
  white-space: nowrap;
}

.auth-btn-wrapper {
  background: var(--vt-c-white-soft);
  z-index: 2;
  position: absolute;
  right: 0;
  bottom: -34px;
  padding: 5px 20px;
  border: 1px solid var(--vt-c-borders);
}

.profile-menu {
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--vt-c-white-soft);
  height: fit-content;
  width: 102%;
  min-width: fit-content;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  top: 0;
  margin: 32px 0 0 0;
  gap: 7px;
  border: 1px solid var(--vt-c-borders);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

.profile-menu__btn {
  background: var(--vt-c-white-soft);
  border: none;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
}

.profile-menu__btn:hover {
  font-weight: 600;
}

.auth-btn {
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 10px;
  background: none;
  border: none;
  color: var(--vt-c-myblue);
  padding: 0;
  cursor: pointer;
  font-size: 16px;
}

.header__contacts{
  height: 50px;
  display: grid;
  justify-self: end;
  line-height: 25px;
  grid-template-rows: 1fr 1fr;
}

.telephone {
  color: #ebc6a6;
  font-weight: 700;
  font-size: 26px;
  white-space: nowrap;
}
.email {
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: 600;
  text-align: right;
  white-space: nowrap;
}

@media (max-width: 880px) {
  .title {
    font-size: 15px;
  }
  .telephone {
    font-size: 21px;
  }
  .email {
    font-size: 13px;
  }
  .nav__item {
    font-size: 1.2rem;
  }
}

@media (max-width: 750px) {
  .header__nav {
    display: none;
  }
  .header-content {
    justify-content: space-between;
  }
}

@media (max-width: 470px) {
  .title {
    display: none;
  }
}
</style>
