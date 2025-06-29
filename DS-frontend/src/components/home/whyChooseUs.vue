<template>
    <section>
        <div class="bg-[#141414]">
            <div class="container px-4 py-14 mx-auto">

                <!-- section for screen-size >= 1280px -->

                <div class="hidden xl:grid grid-cols-1 md:grid-cols-3">

                    <!-- heading -->

                    <div 
                    class="max-w-md"
                    ref="headingRef"
                    >
                        <AnimatedTitle 
                            firstPart = "Why Choose"
                            middlePart = "us?"
                        />
                    </div>
                    
                    <!-- content section  -->

                    <div class="flex flex-col md:col-span-2">
                        <div 
                        v-for="(data, index) in datas"
                        :key="index"
                        :ref="el=> stackCards[index] = el"
                        class="flex flex-row gap-6 justify-between items-center p-4 my-2 rounded-2xl text-amber-50 border-1 border-solid border-green-800 bg-black shadow-lg shadow-green-900"
                        >
                            <div class="space-y-3">
                                <h2 class="font-semibold text-2xl">{{ data.title }}</h2>
                                <p class="md:min-w-xl text-justify">
                                    {{ data.Description }}
                                </p>
                            </div>
                            <img :src="data.image" class="h-46" alt="">
                        </div>
                    </div>

                </div>

                <!-- section for screen-size < 1280px  -->

                <div class="xl:hidden">

                    <p class="p-8">
                        <AnimatedTitle 
                            firstPart = "Why Choose"
                            middlePart = "us?"
                        />
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div 
                            v-for="(data, index) in datas"
                            :key="index"
                            class="flex flex-col-reverse rounded-xl text-amber-50    gap-5 p-4"
                            >
                            <div class="space-y-3 text-center">
                                <h2 class="font-semibold text-2xl">{{ data.title }}</h2>
                            </div>
                            <img :src="data.image" class="m-auto h-32" alt="">
                            
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<script setup>

import { ref, onMounted, nextTick } from 'vue';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import AnimatedTitle from '../headings/animatedTitle.vue';

import ClientCentric from "@/assets/whyChooseUs/client-centric.png"
import InnovativeExcellence from "@/assets/whyChooseUs/innovative-excellence.png"
import Integrity from "@/assets/whyChooseUs/integrity.png"
import Synergy from "@/assets/whyChooseUs/synergy.png"

const datas = [

    {
        title: "Our Innovative Excellence",
        Description: "Embracing cutting-edge technologies, we strive for innovative solutions that propel our clients ahead in the digital landscape.",
        image: InnovativeExcellence,
    },
    {
        title: "Client-Centric Commitment",
        Description: "Placing our clients at the forefront, we are dedicated to understanding and fulfilling their unique needs, ensuring their success is our priority.",
        image: ClientCentric,
    },
    {
        title: "Integrity and Transparency",
        Description: "Upholding the highest standards of ethics, we conduct business with transparency, honesty, and integrity in all our interactions.",
        image: Integrity,
    },
    {
        title: "Collaborative Synergy",
        Description: "Fostering a culture of collaboration, we believe in the collective strength of our team, working seamlessly together to achieve outstanding results for our clients. Our approach emphasizes open communication, mutual respect, and shared goals, creating an environment where innovative ideas can flourish. By leveraging diverse perspectives and expertise, we harness the power of synergy to deliver exceptional outcomes. Our team’s dedication to collaboration ensures that we consistently deliver high-quality solutions, tailored to meet the unique needs of each client. We are committed to building strong, long-lasting partnerships that thrive on trust, cooperation, and a shared vision for success.",
        image: Synergy,
    },
    
]

const headingRef = ref(null)
const stackCards = ref([])

gsap.registerPlugin(ScrollTrigger)

onMounted( async() => {

    await nextTick();

    const cards = stackCards.value;

    // let stickDistance = 0;

    const lastCardST = ScrollTrigger.create({
        trigger: cards[cards.length - 1],
        start: "center center"
    })

    cards.forEach((card,index) => {
        const cardDown = gsap.to(card, {
            scale: index!== cards.length-1 ? 0.90 : 1,
            duration: 2,
            ease: "slow(0.7,0.7,false)",
        })

        ScrollTrigger.create({
            trigger: card,
            start: "center center",
            end: () => lastCardST.start,
            pin: true,
            animation: cardDown,
            scrub:2,
            toggleActions: "restart none none reverse"
        })
    })

    ScrollTrigger.create({
        trigger: cards[0], 
        start: "center center",
        endTrigger: cards[cards.length - 1],
        end: "center center", 
        pin: headingRef.value, 
        pinSpacing: false, 
        toggleActions: "restart none none reverse"
    })
});

</script>