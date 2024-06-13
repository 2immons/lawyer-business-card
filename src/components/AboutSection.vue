<script setup>

</script>

<template>
  <section class="section" id="about">
    <div class="section-title-wrapper">
      <h2 class="section-title">О юристе</h2>
    </div>
    <div class="about-wrapper">
      <p>Lorem Lorem Lorem</p>
      <p>Lorem Lorem Lorem</p>
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
.about-wrapper {
  display: flex;
  align-self: start;
  flex-direction: column;
}
html {
  scroll-behavior: smooth;
}
</style>
