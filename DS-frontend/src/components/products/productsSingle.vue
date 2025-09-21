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
        subtitle: "Digital Marketing involves promoting products or services online through channels like search engines, social media, email, and websites. It aims to reach and engage target audiences, drive traffic, and increase sales. Techniques include SEO, content marketing, and PPC advertising, leveraging data analytics to optimize performance and ROI, helping businesses enhance their online presence and grow their brand.",
        img_path: "https://images.unsplash.com/photo-1748158962286-36e6f7322939",
    },
    {
        title: "ERP Software Solutions",
        subtitle: "ERP software integrates business processes into a unified system, improving efficiency. It manages Demand Requisition & Multi-Level Approval, Seamless Purchase & Quotation Management, Real-time Inventory Updates, Production Planning & Progress Monitoring, HR & Payroll with Biometric Integration, Integrated Financial Accounting & Audit Reports, providing real-time insights. ERP systems help businesses automate processes and enhance decision-making.",
        img_path: "https://images.unsplash.com/photo-1733259440156-6eee9771f6af",
    },
    {
        title: "Sales & Inventory Management",
        subtitle: "Our Sales & Inventory Management solutions streamline operations by optimizing stock levels, improving sales efficiency, and enhancing demand forecasting. By reducing stockouts and overstocking, we help you minimize losses and boost customer satisfaction, ensuring your business runs smoothly and profitably.",
        img_path: "https://img.freepik.com/free-photo/3d-rendering-geometric-cube_23-2150979612.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
        title: "HRM (Human Resources Management)",
        subtitle: "Human Resource Management (HRM) focuses on recruiting, developing, and retaining talent while managing employee relations, performance, and benefits. It ensures organizational goals are met by aligning human capital strategies with business objectives, fostering a productive and compliant work environment.",
        img_path: "https://images.unsplash.com/photo-1715464527719-5419fdafacf5",
    },
    {
        title: "CRM (Customer Relationship Management)",
        subtitle: "Customer Relationship Management (CRM) manages customer interactions, streamlining sales, marketing, and service processes. It enhances customer satisfaction, loyalty, and retention by analyzing data, improving communication, and building strong, long-term relationships to drive business growth and profitability.",
        img_path: "https://images.unsplash.com/photo-1748158962286-36e6f7322939",
    },
    {
        title: "School Management System",
        subtitle: "An Institute/School Management System streamlines administrative, academic, and financial tasks, including student enrollment, attendance, grading, and fee management. It enhances efficiency, communication, and data accuracy, supporting better decision-making and overall institutional effectiveness.",
        img_path: "https://img.freepik.com/free-photo/3d-rendering-geometric-cube_23-2150979612.jpg",
    },
    {
        title: "Online Course/Exam Management System",
        subtitle: "An Online Course/Exam Management System streamlines digital education through comprehensive course creation, content delivery, and assessment tools. It enables seamless student enrollment, interactive learning, automated grading, and real-time progress tracking. This system enhances accessibility, reduces administrative workload, and supports flexible learning environments while ensuring academic integrity and improved educational outcomes.",
        img_path: "https://img.freepik.com/free-photo/3d-rendering-abstract-black-white-background_23-2150913811.jpg",
    },
    {
        title: "POS (Point of Sale)",
        subtitle: "A Point of Sale (POS) System streamlines retail operations by managing transactions, inventory, and customer data in real-time. It integrates payment processing, receipt generation, and analytics while enhancing checkout efficiency and reducing errors. This system supports multi-location management, enabling businesses to optimize sales performance and improve customer experience.",
        img_path: "https://img.freepik.com/premium-vector/ball-3d-black-design-element-graphic-geometric-shape-object-concept-single-realistic-bubble-dark-background_1430834-749.jpg",
    },
    {
        title: "Jewellery Management System",
        subtitle: "A Jewellery Management System specializes in managing precious metals, gemstones, and ornament inventory with precision tracking of weight, purity, and valuation. It handles customer orders, repair services, and pricing based on current market rates. By maintaining accurate product catalogs and comprehensive reporting, this system ensures precise inventory control and enhanced customer service in the jewellery business.",
        img_path: "https://images.unsplash.com/photo-1753982519308-d9ae94c9d434",
    },
    {
        title: "Service Management System",
        subtitle: "A Service Management System optimizes service delivery by managing work orders, scheduling appointments, and tracking technician assignments from initiation to completion. It streamlines customer communication, automates billing processes, and maintains detailed service histories. By enhancing operational efficiency and improving response times, this system ensures quality service delivery and sustainable business growth.",
        img_path: "https://img.freepik.com/premium-photo/3d-render-metall-background-displacement-surface-random-patterns-extruded-from-sphere-shape_363039-2514.jpg",
    },
    {
        title: "E-commerce Solutions",
        subtitle: "E-commerce Solutions provide online retail platforms that enable businesses to sell products and services digitally through user-friendly websites and mobile applications. These solutions integrate product catalog management, secure payment gateways, and order processing. By enhancing customer experience through personalized recommendations, this system empowers businesses to expand their market reach and increase sales conversion.",
        img_path: "https://img.freepik.com/premium-photo/background-with-black-shape-texture-3d-illustration-3d-rendering_158469-6638.jpg",
    },
    {
        title: "Website Design & Development",
        subtitle: "Website Design & Development creates professional, responsive digital experiences combining aesthetic appeal with functional excellence. It encompasses custom design layouts, intuitive navigation, and mobile optimization. By delivering visually stunning websites, businesses can establish strong online presence and enhance brand credibility.",
        img_path: "https://img.freepik.com/premium-photo/background-with-black-shape-texture-3d-illustration-3d-rendering_158469-6853.jpg",
    },
    {
        title: "Mobile App Development",
        subtitle: "Mobile App Development creates innovative, user-friendly applications for iOS and Android platforms that deliver seamless performance and engaging user experiences. By leveraging cutting-edge technologies and user-centered design principles, mobile apps enhance customer engagement and drive business growth.",
        img_path: "https://img.freepik.com/premium-photo/black-background-with-form-3d-illustration-3d-rendering_158469-8008.jpg",
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
