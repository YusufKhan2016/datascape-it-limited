<template>
    <section>
        <div class="relative">

            <div class="container mx-auto px-4 pt-4 pb-12 relative z-[500] overflow-hidden">
                <div class="flex lg:flex-row flex-col-reverse justify-between gap-9 items-center py-10 lg:py-0">

                    <div class="relative flex justify-between gap-8 lg:flex-col w-full lg:w-4/10" ref="bannerImg">
                        
                        <div class="hidden md:block w-[334px] h-[429px] overflow-hidden rounded-2xl">
                            <img 
                            :src="ServicesHero" 
                            class="w-full h-full object-cover object-center">
                        </div>
                        <div class="lg:absolute inset-0 top-8/12 left-5/10 p-8 md:p-0 flex flex-col items-center justify-center lg:h-46 w-full md:w-[334px] lg:w-56 bg-transparent backdrop-blur-md border-1 border-solid border-green-600 rounded-2xl shadow-md shadow-green-600">
                            <h3 class="text-green-600 text-8xl">2K+</h3>
                            <p class="text-amber-50 text-[17px]">Completed Projects</p>
                        </div>

                    </div>

                    <div 
                    class="w-full lg:w-6/10 flex flex-wrap lg:justify-end gap-6"
                    ref="headingText">
                        
                        <h1 class="uppercase text-4xl/13 md:text-6xl/19  text-amber-50 font-semibold lg:w-[60vw] lg:text-end">                            
                            <span
                            >Transforming ideas</span> 
                            <span class="text-transparent rounded-lg lg:pl-3 mr-2" style="-webkit-text-stroke: 1px white;">
                                into digital
                            </span> 
                            realities
                        </h1>
                        <p class="text-amber-50 lg:w-[42vw] text-justify">Providing innovative solutions in branding, marketing, design, and advertising. These agencies often collaborate with clients to develop unique campaigns, visual identities, and digital strategies that resonate with target audiences. Services may include graphic design, content creation, social media management.</p>
                        
                    </div>

                </div>
            </div>

            <div class="absolute inset-0 w-full h-full object-cover z-[20] backdrop-blur-[2px] bg-gradient-to-b from-black via-transparent to-[#141414]"></div>
            <video 
            autoplay 
            muted 
            loop 
            playsinline
            :src="ServicesBanner"
            class="absolute inset-0 w-full h-full object-cover z-0"></video>

        </div>
    </section>
</template>

<script setup>

import { ref, onMounted } from "vue";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import ServicesHero from "@/assets/services/images/servicesHero.jpg"
import ServicesBanner from "@/assets/services/video/servicesBanner.mp4"

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