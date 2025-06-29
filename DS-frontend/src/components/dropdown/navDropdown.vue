<template>
    <div 
    class="fixed h-full w-full z-[999] bg-black flex items-center text-amber-50 pt-17 transition-all duration-300 rounded-4xl border-1 boder-solid border-green-800 shadow-md shadow-green-900 overflow-hidden"
    :class="!props.dropDownOpen? '-translate-y-[150%]':'-translate-y-3'"
    @wheel.stop
    @touchmove.stop
    >   
    
        <img src="https://images.pexels.com/photos/7534168/pexels-photo-7534168.jpeg" class="inset-0 absolute z-0 h-full w-full">
        <div class="absolute inset-0 z-10 h-full w-full bg-gradient-to-r from-transparent via-[#141414] to-green-950"></div>

        <div class="container relative z-20 flex justify-end items-center px-4 mx-auto ">
            <div 
            class="flex flex-col items-start gap-3 text-3xl h-full max-h-[calc(100vh-200px)] overflow-y-auto overflow-x-hidden scrollbar-track-transparent custom-scrollbar"
            ref="linksContainer"
            >

                <router-link 
                    v-for="(page, index) in datas.value"
                    @click="props.handleDropDown"
                    :key="index"
                    :to="page.link"
                    class="relative hover:px-2 py-2 mr-12 transition-all duration-300 text-amber-50 overflow-hidden group w-full flex-shrink-0 page-link"
                    :data-index="index"
                >
                    <span
                    class="relative z-10 inline-block group-hover:text-black transition-colors duration-300 page-name">
                        {{ page.name }}
                    </span>
                    <span class="absolute inset-0 bg-amber-50 transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
                </router-link>
                
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import gsap from "gsap";
import { onMounted } from 'vue';
import { nextTick } from 'vue';

const props = defineProps({
    dropDownOpen: Boolean,
    dropDownDataName: String,
    handleDropDown: Function,
})

const about = ref([
    {name: "About us",link: "about-us"},
    { name: "Message From MD", link: "md-message" },
])

const products = ref([
    {name: "Digital Marketing Solutions",link: "#",}, 
    {name: "Erp Software Solutions",link: "#",},
    {name: "Sales & Inventory Management",link: "#",},
    {name: "Human Resources Management",link: "#",},
    {name: "Customer Relationship Management",link: "#",},
    {name: "School Management System",link: "#",}
])

const datas = computed(() => {
    if (props.dropDownDataName === 'about') return about;
    else if (props.dropDownDataName === 'products') return products;
    else if (!props.dropDownDataName || props.dropDownDataName === null) return []
    return [];
})

const linksContainer = ref(null);

// animation function
const animateLinks = (show) => {
    const links = linksContainer.value?.querySelectorAll('.page-link');
    if (!links) return;

    gsap.fromTo(links, 
        { opacity: 0, x: 30 },
        { 
            opacity: show ? 1 : 0, 
            x: show ? 0 : 30, 
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        }
    );
};

// Watch dropdown changes 
onMounted(async () => {
    await nextTick();
    watch(() => props.dropDownOpen, () => animateLinks(props.dropDownOpen));
    watch(datas, () => props.dropDownOpen && animateLinks(true));
}),

</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: white;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #5cb8a4;
    border-radius: 10px;
}

.custom-scrollbar {
    scroll-behavior: smooth;
}
</style>