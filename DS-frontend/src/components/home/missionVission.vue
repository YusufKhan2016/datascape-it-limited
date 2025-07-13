<template>
    <section>
        <div class="bg-[#141414] overflow-hidden">
            <div class="container mx-auto py-14 px-4">

                <p class="p-8">
                    <AnimatedTitle
                    firstPart="What Drives Us" 
                    middlePart="Forward" 
                    />
                </p>

                <div>
                    <div
                    v-for="(data, index) in datas"
                    :key="index"
                    >

                        <div 
                        v-if="index%2"
                        class="flex flex-col md:flex-row items-center md:justify-between py-16"
                        >
                            <div class="relative">
                                <img 
                                :src="data.image" 
                                :alt="data.title"
                                class="md:absolute h-32 md:h-76 shadow-2xl rounded-2xl z-[20] p-2 mb-4"
                                ref="animateImg"
                                >
                                <div 
                                class="md:block hidden h-86 w-76 blur-3xl animate-pulse" 
                                :class="data.shadow_color"></div>
                            </div>
                            <div 
                            class="flex flex-col gap-8 justify-center items-center md:items-end text-justify sm:w-sm lg:w-md xl:w-2xl"
                            ref="banners">
                                <div class="relative">
                                    <h3 class="absolute text-5xl lg:text-7xl text-transparent font-bold blur-[6px] bottom-4 right-4 z-0" style="-webkit-text-stroke: 2px green;">{{ data.title }}</h3>
                                    <h3 class="relative text-5xl lg:text-7xl font-bold text-amber-50 glow-text">{{ data.title }}</h3>
                                </div>  
                                <p class="md:text-end text-justify text-amber-50">{{ data.subtitle }}</p>
                            </div> 
                        </div>

                        <div    
                        v-else
                        class="flex flex-col-reverse md:flex-row items-center md:justify-between py-16"
                        >   
                            <div 
                            class="flex flex-col gap-8 md:justify-center items-center md:items-start text-justify sm:w-sm lg:w-md xl:w-2xl"
                            ref="banners">
                                <div class="relative">
                                    <h3 class="absolute text-5xl lg:text-7xl blur-[6px] text-transparent font-bold bottom-4 left-4 z-0" style="-webkit-text-stroke: 2px green;">{{ data.title }}</h3>
                                    <h3 class="relative text-5xl lg:text-7xl font-bold text-amber-50 glow-text">{{ data.title }}</h3>
                                </div>  
                                <p class="text-amber-50">{{ data.subtitle }}</p>
                            </div>
                            <div class="relative">
                                <img 
                                :src="data.image" 
                                :alt="data.title"
                                class="md:absolute h-32 md:h-76 shadow-2xl rounded-2xl z-[20] p-2 mb-4"
                                ref="animateImg">
                                <div 
                                class="hidden md:block h-86 w-76 blur-3xl animate-pulse" 
                                :class="data.shadow_color"></div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>

import { nextTick, onMounted, ref } from 'vue';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import AnimatedTitle from '../headings/animatedTitle.vue';

import Values from '@/assets/about/missionVission/values.webp';
import Mission from '@/assets/about/missionVission/mission.png';
import Vision from '@/assets/about/missionVission/vision.png';

const datas = ref([

    {
        title: "Values",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quam enim, natus iure impedit repudiandae accusamus veniam alias odio vero labore fuga sunt dolorum eum repellat modi amet. Voluptates, excepturi.",
        image: Values,
        shadow_color: "bg-blue-600"
    },
    {
        title: "Mission",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quam enim, natus iure impedit repudiandae accusamus veniam alias odio vero labore fuga sunt dolorum eum repellat modi amet. Voluptates, excepturi.",
        image: Mission,
        shadow_color: "bg-red-500"
    },
    {
        title: "Vision",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quam enim, natus iure impedit repudiandae accusamus veniam alias odio vero labore fuga sunt dolorum eum repellat modi amet. Voluptates, excepturi.",
        image: Vision,
        shadow_color: "bg-yellow-600"
    },

])  

const banners = ref(null);
const animateImg = ref(null);

gsap.registerPlugin(ScrollTrigger)

const animation = () => {
    banners.value.map((texts, index) => {

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: texts,
                start: "top 90%",
                end: "top 60%",
                scrub: 1,
                // markers: true,
            }
        });
        tl.from(texts, {
            x: index%2 ? -100: 100,
            opacity: 0,
            // duration:1,
        })
        tl.from(animateImg.value[index], {
            filter: "blur(40px)",
            // duration: 0.5,
        })

    })
}

onMounted( async() => {
    
    console.log(window.innerWidth)
    await nextTick();
    (window.innerWidth >= 1280) && animation();
    
})

</script>

<style scoped>

.glow-text {
    text-shadow: 0 0 5px #4aedac52, 0 0 10px #4aedac38, 0 0 15px #4aedac7b;
}

</style>