<template>
    <section>
        <div class="relative">
            <div class="container mx-auto px-4 pt-4 pb-12 relative z-[500]">
                <div class="flex justify-between items-center">
                    <div class="relative w-4/10">
                        <div class="w-[334px] h-[429px] overflow-hidden rounded-2xl">
                            <img :src="ServicesHero" class="w-full h-full object-cover object-center" alt="">
                        </div>
                        <div class="absolute inset-0 top-8/12 left-5/10 flex flex-col items-center justify-center h-46 w-56 bg-transparent backdrop-blur-md border-1 border-solid border-green-600 rounded-2xl shadow-md shadow-green-600">
                            <h3 class="text-green-600 text-8xl">2k+</h3>
                            <p class="text-amber-50 text-[16.5px]">Completed Projects</p>
                        </div>
                    </div>
                    <div class="w-6/10 flex flex-wrap justify-end">
                        <h1 class="uppercase text-6xl/19  text-amber-50 font-bold w-[50vw]">Transforming ideas into <span class="bg-green-500 text-black rounded-2xl px-2">digital</span> <span class="xl:block xl:ml-18">realities</span></h1>
                        <p class="text-zinc-50 xl:block xl:ml-18 w-[40vw] text-justify">Providing innovative solutions in branding, marketing, design, and advertising. These agencies often collaborate with clients to develop unique campaigns, visual identities, and digital strategies that resonate with target audiences. Services may include graphic design, content creation, social media management.</p>
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
import ServicesHero from "@/assets/services/images/servicesHero.jpg"

import ServicesBanner from "@/assets/services/video/servicesBanner.mp4"
</script>