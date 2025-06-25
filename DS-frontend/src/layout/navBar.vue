<template>
    <header>

        <div class="w-full fixed z-[1000] transition-all duration-500 ease-in-out" 
        :class="[
            scrollDelta
            ? '-translate-y-[100%]' : 'translate-y-0',
            isScrolled
                ? 'bg-[#111]/50 backdrop-blur-2xl' : 'bg-black'
        ]"
        >
            <div class="container h-18 flex items-center justify-between mx-auto">

                <div class="hidden lg:block">
                    <router-link to="/">
                        <img class="h-12 px-4" src="@/assets/datascape-it-main.png" alt="" />
                    </router-link>
                </div>

                <div class="lg:hidden relative z-[20001] px-4">
                    <router-link to="/">
                        <img class="h-16" src="@/assets/datascape-icon.png" alt="" />
                    </router-link>
                </div>

                <div>
                    <div class="hidden lg:flex items-center font-[500] text-zinc-50 space-x-6 px-5">
                        <router-link to="/">Home</router-link>
                        <router-link to="about">About us</router-link>
                        <router-link to="services">Services</router-link>
                        <router-link to="products">Products</router-link>
                        <router-link to="career">Career</router-link>
                        <router-link to="contacts"
                            class="bg-gradient-to-r rounded-3xl from-blue-900 to-green-800 px-4 py-2">
                            Contact us
                        </router-link>
                    </div>

                    <!-- menu icon for responsive  -->

                    <div @click="props.toggleSidebar" class="lg:hidden px-4">
                        <svg v-if="!props.isSidebarOpen" xmlns="http://www.w3.org/2000/svg" height="30px"
                            viewBox="0 -960 960 960" width="30px" fill="white">
                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                        </svg>

                        <svg v-else xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960"
                            width="30px" fill="white">
                            <path
                                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    </header>
</template>

<script setup>

import { 
    ref, 
    watch, 
    onMounted, 
    onUnmounted } from 'vue';

const props = defineProps({
    isSidebarOpen: Boolean,
    toggleSidebar: Function
});

const isScrolled = ref(false);

const scrollDelta = ref(false);
const lastScrollDelta = ref(0);

const handleScroll = () => {
    const currentY = window.scrollY
    isScrolled.value = currentY > 10;
    scrollDelta.value = currentY - lastScrollDelta.value > 0 ? true : false;
    lastScrollDelta.value = currentY;
}

watch(scrollDelta, () => {
    console.log(scrollDelta.value)
})

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
})

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
})

</script>
