<script setup>
import PageHeader from '../components/PageHeader.vue'

import PageFooter from '../components/PageFooter.vue'
import IntroSection from "@/components/IntroSection.vue";
import ServicesSection from "@/components/ServicesSection.vue";
// import PaymentSection from "@/components/PaymentSection.vue";
import AboutSection from "@/components/AboutSection.vue";
</script>

<template>
  <PageHeader />
  <main>
    <IntroSection />
    <AboutSection />
    <ServicesSection />
<!--    <PaymentSection />-->
  </main>
</template>

<style lang="less">

</style>
