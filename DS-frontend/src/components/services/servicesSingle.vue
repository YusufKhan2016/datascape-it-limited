<template>
    <section>
        <div class="bg-[#141414]">
            <div class="container px-4 pt-24 mx-auto">

                <div class="px-18 py-14">

                    <BaseTitle>Our Services</BaseTitle>
                    <BaseSubtitle>Get the top notch IT services for your business.</BaseSubtitle>

                </div>

                <!-- grid section for window-screen >= 1280px  -->

                <div
                    class="xl:hidden grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-5">

                    <div v-for="(service, index) in services" :key="index"
                        class="relative h-[400px] group hover:scale-103 transition-all duration-300 ease-in-out">

                        <img :src="service.image_link"
                            class="w-full h-full object-cover object-center blur-[3px] rounded-2xl" alt="">

                        <div
                            class="inset-0 absolute z-[99] bg-black/45 rounded-4xl border-1 border-solid border-green-900">
                        </div>

                        <div
                            class="absolute z-[100] -top-8 left-10 bg-gradient-to-r from-[#437ABC] to-green-600  p-4 rounded-full">
                            <img class="h-8" :src="service.icon" alt="">
                        </div>

                        <div class="inset-0 absolute z-[100] top-24 left-4 md:left-6 xl:left-4">
                            <h1 class="text-gray-50 text-xl font-bold">
                                {{ service.title }}
                            </h1>
                        </div>

                    </div>
                </div>

                <!-- section for window-screen >= 1280px  -->

                <div class="scroll-pin overflow-hidden translate-x-3 hidden xl:block">

                    <div class="child-scroll-pin flex space-x-5 py-12 ml-56">
                        <div v-for="(service, index) in services" :key="index"
                            class="serviceElement relative h-[400px] min-w-[300px] group hover:scale-103 transition-all duration-300 ease-in-out">

                            <img :src="service.image_link"
                                class="w-full h-full object-cover object-center blur-[3px] rounded-2xl" alt="">

                            <div
                                class="inset-0 absolute z-[99] bg-black/45   group-hover:bg-amber-50 ease-in-out group-hover:shadow-lg group-hover:shadow-green-800 transition-all duration-700 rounded-2xl border-1 border-solid border-green-900">
                            </div>

                            <div
                                class="absolute z-[100] -top-8 left-10 bg-gradient-to-r from-[#437ABC] to-green-600  p-4 rounded-full">
                                <img class="h-8" :src="service.icon" alt="">
                            </div>

                            <div class="inset-0 absolute z-[100] top-24 left-4 md:left-6 xl:left-4">

                                <h1
                                    class="text-gray-50 group-hover:text-black transition-all duration-400 ease-in-out text-2xl font-bold">
                                    {{ service.title }}</h1>
                                <div class="text-gray-100 group-hover:text-black overflow-hidden">

                                    <p
                                        class="transition-all delay-[100ms] duration-500 ease-in-out transform translate-y-[190px] group-hover:translate-y-0 md:text-sm lg:text-lg  mt-4 w-66 line-clamp-4">
                                        {{ service.subtitle }}</p>
                                    <button
                                        class="mt-4 cursor-pointer tracking-widest text-lg font-[500px] transition-all duration-500 ease-in-out delay-[100ms] transform translate-y-[190px] group-hover:translate-y-0 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-500 after:ease-in-out hover:after:w-full">
                                        Read More
                                    </button>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <!-- section for window-screen >= 1280px ends -->

            </div>
        </div>
    </section>
</template>

<script setup>

import { onMounted, nextTick } from 'vue';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import webDesignIcon from '@/assets/services/icons/web-design.png';
import erpIcon from '@/assets/services/icons/erp.png';
import digitalMarketingIcon from '@/assets/services/icons/social-media.png';
import salesManagementIcon from '@/assets/services/icons/inventory-management.png';
import mobileAppIcon from '@/assets/services/icons/mobile-apps.png';
import ecommerceIcon from '@/assets/services/icons/ecommerce.png';
import consultancyIcon from '@/assets/services/icons/consultancy.png';
import customSoftwareIcon from '@/assets/services/icons/custom-software.png';

import erpImage from '@/assets/services/images/erp.jpg';
import digitalMarketingImg from '@/assets/services/images/digital-marketing.jpg'
import webDesignImg from '@/assets/services/images/web-design.jpg'
import salesManagementImg from '@/assets/services/images/Sales-management.jpg'
import mobileAppImg from '@/assets/services/images/mobile-development.jpeg'
import ecommerceImg from '@/assets/services/images/ecommerce.jpeg'
import consultancyImg from '@/assets/services/images/it-consultancy.jpg'

import BaseTitle from '@/components/headings/baseTitle.vue';
import BaseSubtitle from '@/components/headings/baseSubtitle.vue';

const services = [

    {
        title: "Digital Marketing",
        subtitle: "We offer plan and assemble managing for you from startups to the last creation or closing creation.",
        image_link: digitalMarketingImg,
        icon: digitalMarketingIcon,
    },
    {
        title: "Web Design & Development",
        subtitle: "We offer plan and assemble managing for you from startups to the last creation or closing creation.",
        image_link: webDesignImg,
        icon: webDesignIcon,
    },
    {
        title: "ERP Software",
        subtitle: "We offer plan and assemble managing for you from startups to the last creation or closing creation.",
        image_link: erpImage,
        icon: erpIcon,
    },
    {
        title: "Custom Software Development",
        subtitle: "We offer plan and assemble managing for you from startups to the last creation or closing creation.",
        image_link: "https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-02.jpg",
        icon: customSoftwareIcon,
    },
    {
        title: "Sales & Inventory Management",
        subtitle: "We offer plan and assemble managing for you from startups to the last creation or closing creation.",
        image_link: salesManagementImg,
        icon: salesManagementIcon,
    },
    {
        title: "Mobile Apps Development",
        subtitle: "We offer plan and assemble managing for you from startups to the last creation or closing creation.",
        image_link: mobileAppImg,
        icon: mobileAppIcon,
    },
    {
        title: "E-Commerce",
        subtitle: "We offer plan and assemble managing for you from startups to the last creation or closing creation.",
        image_link: ecommerceImg,
        icon: ecommerceIcon,
    },
    {
        title: "IT Consultancy",
        subtitle: "We offer plan and assemble managing for you from startups to the last creation or closing creation.",
        image_link: consultancyImg,
        icon: consultancyIcon,
    },

];

gsap.registerPlugin(ScrollTrigger);

const servicesAnimation = () => {

    const servicesLength = services.length;
    const container = document.querySelector(".scroll-pin");
    const scroller = document.querySelector(".scroll-pin .child-scroll-pin");

    const scrollWidth = scroller.scrollWidth;

    gsap.to(scroller, {
        transform: `translateX(-${scrollWidth - 930}px)`,
        scrollTrigger: {
            trigger: container,
            scroller: "body",
            start: "top 11%",
            end: `top -${100 * servicesLength / 2}%`,
            scrub: true,
            pin: true,
        }
    })

}

onMounted(() => {

    nextTick();
    servicesAnimation();

})


</script>