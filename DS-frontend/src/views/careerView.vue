<template>
  <section>
    <div class="bg-gradient-to-b from-[#000] to-[#141414] overflow-hidden">
      <div class="container mx-auto px-4 py-16">
        <div class="flex flex-col-reverse lg:flex-row lg:justify-between items-center gap-6">
          <img :src="CareerBanner" alt="" class="w-4/10 h-auto" ref="bannerImg">
          <div 
          class="relative w-full lg:w-5/10 flex flex-wrap lg:justify-end text-amber-50 gap-6"
          ref="headingText">
  
            <h1 class="font-bold text-4xl/13 md:text-6xl/18 md:text-end">
              Launching <span class="text-transparent" style="-webkit-text-stroke: 1px white;">Soon</span> 
            </h1>
            <p class="lg:w-[42vw] text-justify">
              Tech doesn't have to feel like a different language. We built schematiq to make sure innovation works for you, your business and you people. We can't wait to innovate with you!
            </p>
          </div>
        </div>
  
      </div>
    </div>
  </section>
</template>

<script setup>

import { onMounted, ref } from 'vue';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import CareerBanner from '@/assets/career/career.png';

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

const headingText = ref(null);
const bannerImg = ref(null);

const bannerAnimation = () => {

    tl.from(headingText.value, {
        x: 50,
        opacity: 0,
        duration: 0.5,
    })

    tl.fromTo(bannerImg.value,
        {
            filter: "blur(40px)"
        },
        {
            filter: "blur(0px)",
        }
    );

}

onMounted(() => {

    bannerAnimation();

})

</script>