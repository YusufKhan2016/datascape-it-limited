<template>
  
  <HeroBanner />
  <HeroVideoBanner />
  <ServicesSingle />
  <TechStacks />
  <WhyChooseUs />
  <SatisfiedClients />
  
</template>

<script setup>

  import HeroBanner from '@/components/heroBanner.vue';
  import HeroVideoBanner from '@/components/heroVideoBanner.vue';
  import SatisfiedClients from '@/components/home/satisfiedClients.vue';
  import WhyChooseUs from '@/components/home/whyChooseUs.vue';

  import ServicesSingle from '@/components/services/servicesSingle.vue';
  import TechStacks from '@/components/services/techStacks.vue';

</script>