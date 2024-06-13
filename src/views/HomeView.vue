<script setup>
import PageHeader from '../components/PageHeader.vue'

import PageFooter from '../components/PageFooter.vue'
import IntroSection from "@/components/IntroSection.vue";
import ServicesSection from "@/components/ServicesSection.vue";
import PaymentSection from "@/components/PaymentSection.vue";
import AboutSection from "@/components/AboutSection.vue";
</script>

<template>
  <PageHeader />
  <main>
    <div class="container">
      <IntroSection />
      <hr>
      <ServicesSection />
      <hr>
      <PaymentSection />
      <hr>
      <AboutSection />
    </div>
  </main>
  <PageFooter />
</template>

<style lang="less">

</style>
