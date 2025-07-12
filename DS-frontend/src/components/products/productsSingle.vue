<template>
    <section>
        <div class="bg-[#141414] overflow-hidden">
            <div class="container px-4 pt-24 mx-auto">

                <div class="px-18 py-14">

                    <BaseTitle>Our Products</BaseTitle>
                    <BaseSubtitle>Premium tech solutions to empower your brand and drive success.</BaseSubtitle>

                </div>

                <div 
                v-for="(data, index) in datas"
                :key="index"
                class="xl:h-[365px] flex flex-col-reverse lg:flex-row justify-between gap-8 border-t-1 border-solid border-t-green-600 py-3">
                    <div class="flex flex-col lg:flex-row justify-between gap-8 md:w-7/10">

                        <div class="relative flex max-w-4xl lg:py-8 w-sm group">
                            <h1 class="text-3xl font-semibold text-amber-50" ref="titleBlurEffect">{{ data.title }}</h1>
                        </div>
                        <div class="text-justify text-zinc-200 flex flex-col items-start justify-between gap-8 md:w-lg lg:py-8">
                            <p ref="SubtitleBlurEffect">{{ data.subtitle }}</p>
                            <button
                                class="text-amber-50 cursor-pointer tracking-widest font-[500px] transition-all duration-300 ease-in-out delay-[100ms] transform group-hover:translate-y-0 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                                ref="SubtitleBlurEffect">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div 
                    class="xl:max-w-[300px] w-full h-[300px] lg:h-auto relative rounded-2xl overflow-hidden group">
                        <div class="hidden xl:block absolute z-1 bg-[#141414] translate-y-0 h-full w-full" ref="imgShapeAnime"></div>
                        <img 
                        :src="data.img_path" 
                        class="h-full w-full object-cover" 
                        alt="">
                        
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import SplitType from 'split-type'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


import BaseSubtitle from '../headings/baseSubtitle.vue';
import BaseTitle from '../headings/baseTitle.vue';

const datas = [
    {
        title: "Digital Marketing Solutions",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea placeat molestiae, reprehenderit saepe ad hic laborum cum! Qui, possimus et tenetur, molestias ipsam nisi tempore voluptatem, ducimus exercitationem velit quasi ipsa? Nesciunt ipsum magni, dolorem aliquam sit inventore dolorum.",
        img_path: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg",
    },
    {
        title: "ERP Software Solutions",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea placeat molestiae, reprehenderit saepe ad hic laborum cum! Qui, possimus et tenetur, molestias ipsam nisi tempore voluptatem, ducimus exercitationem velit quasi ipsa? Nesciunt ipsum magni, dolorem aliquam sit inventore dolorum.",
        img_path: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg",
    },
    {
        title: "Sales & Inventory Management",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea placeat molestiae, reprehenderit saepe ad hic laborum cum! Qui, possimus et tenetur, molestias ipsam nisi tempore voluptatem, ducimus exercitationem velit quasi ipsa? Nesciunt ipsum magni, dolorem aliquam sit inventore dolorum.",
        img_path: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg",
    },
    {
        title: "HRM (Human Resources Management)",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea placeat molestiae, reprehenderit saepe ad hic laborum cum! Qui, possimus et tenetur, molestias ipsam nisi tempore voluptatem, ducimus exercitationem velit quasi ipsa? Nesciunt ipsum magni, dolorem aliquam sit inventore dolorum.",
        img_path: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg",
    },
    {
        title: "CRM (Customer Relationship Management)",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea placeat molestiae, reprehenderit saepe ad hic laborum cum! Qui, possimus et tenetur, molestias ipsam nisi tempore voluptatem, ducimus exercitationem velit quasi ipsa? Nesciunt ipsum magni, dolorem aliquam sit inventore dolorum.",
        img_path: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg",
    },
    {
        title: "School Management System",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea placeat molestiae, reprehenderit saepe ad hic laborum cum! Qui, possimus et tenetur, molestias ipsam nisi tempore voluptatem, ducimus exercitationem velit quasi ipsa? Nesciunt ipsum magni, dolorem aliquam sit inventore dolorum.",
        img_path: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg",
    },
]

const titleBlurEffect = ref(null);
const SubtitleBlurEffect = ref(null);
const imgShapeAnime = ref(null);

gsap.registerPlugin(ScrollTrigger)

const animations = () => {

    titleBlurEffect.value.forEach((lines) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: lines,
                start: "top 70%",
                end: "top 40%",
            }
        });
        
        const headingLines = new SplitType(lines, { types: 'lines' });
        
        tl.from(headingLines.lines, {
            opacity: 0,
            filter: "blur(10px)",
            duration: 0.8,
            stagger: 0.1,
        })
    })
    
    SubtitleBlurEffect.value.forEach((lines) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: lines,
                start: "top 80%",
                end: "top 40%",
            }
        });
    
        const SubheadingLines = new SplitType(lines, { types: 'lines' });
    
        tl.from(SubheadingLines.lines, {
            opacity: 0,
            filter: "blur(10px)",
            duration: 0.8,
            stagger: 0.1,
        })
    })
    
    imgShapeAnime.value.forEach((img) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: img,
                start: "top 70%",
                end: "top 25%",
                // markers: true,
            }
        });
    
        tl.to(img, {
            translateY: "100%",
            duration: 0.8,
            delay: 0.5,
        })
    })
    
}

onMounted(() => {
    (window.innerWidth >= 1280) ? animations() : null;
})

</script>