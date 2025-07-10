<template>
    <section>
        <div class="bg-black text-amber-50 relative overflow-hidden"> 

            <video 
            autoplay 
            loop 
            muted 
            playsinline 
            :src="ProductsBannerVideo"
            class="absolute top-0 left-0 w-full h-full object-cover z-0"></video>

            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#141414] via-transparent to-[#141414] backdrop-blur-[10px] object-cover z-3"></div>

            <div class="relative z-10"> 
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap justify-center lg:justify-between items-center py-16">

                        <div 
                        class="relative w-full lg:w-6/10 flex flex-wrap lg:justify-start gap-6" 
                        ref="headingText">
                            <h1 class="font-bold text-4xl/13 md:text-6xl/18">
                                Powering
                                <span 
                                class="font-black text-transparent" 
                                style="-webkit-text-stroke: 1px white;">
                                    Growth Through
                                </span>
                                Intelligent Software
                            </h1>

                            <p class="lg:w-[42vw] text-justify">
                                Smart software solutions built for modern businesses. From ERP systems to sales and
                                inventory management tools, our products streamline operations, boost productivity, and
                                support growth — all with user-friendly design and reliable performance.
                            </p>
                        </div>

                        <img 
                        :src="ProductsHeroBanner" 
                        alt="" 
                        class="w-96 animate-[spin_80s_linear_infinite] mt-10 lg:mt-0 mx-auto"
                        ref="bannerImg" />

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

import ProductsHeroBanner from '@/assets/products/images/productsHero.png';
import ProductsBannerVideo from '@/assets/products/video/productsBannerVideo.mp4';

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
