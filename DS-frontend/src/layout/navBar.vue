<template>
    <header class="mx-auto">

        <div class="w-full fixed z-[1000] transition-all duration-400 ease-in-out" 
        :class="[
            scrollDelta
            ? '-translate-y-[100%]' : 'translate-y-0',
            isScrolled
            ? 'bg-[#111]/50 backdrop-blur-2xl' : 'bg-black'
        ]"
        @wheel.stop = "dropDownOpen"
        @touchmove.stop = "dropDownOpen"
        >
            <div class="container h-18 flex items-center justify-between mx-auto">

                <div class="hidden lg:block">
                    <router-link to="/" @click="()=> dropDownOpen = false">
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

                        <router-link to="/" @click="()=> dropDownOpen = false">
                            Home
                        </router-link>

                        <router-link 
                        to=""
                        @click="handleDropDown('about', aboutDropdownImg)"
                        class="flex items-center cursor-pointer"
                        >
                            <p>About</p>
                            <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            class="transition-all duration-500"
                            :class="!dropDownOpen || dropDownDataName !== 'about'
                                ?'rotate-0':'rotate-180'"
                            width="24" 
                            height="24" viewBox="0 0 16 16"
                            >
                                <path fill="currentColor" fill-rule="evenodd" d="m8 10.207l3.854-3.853l-.707-.708L8 8.793L4.854 5.646l-.708.708z" clip-rule="evenodd" />
                            </svg>

                        </router-link>

                        <router-link to="services" @click="()=> dropDownOpen = false">
                            Services
                        </router-link>

                        <router-link 
                        to=""
                        @click="handleDropDown('products', productDropdownImg)"
                        class="flex items-center cursor-pointer"
                        >

                            <p>Products</p>
                            <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            class="transition-all duration-500"
                            :class="!dropDownOpen || dropDownDataName !== 'products'
                                ?'rotate-0':'rotate-180'"
                            width="24" 
                            height="24" viewBox="0 0 16 16"
                            >
                                <path fill="currentColor" fill-rule="evenodd" d="m8 10.207l3.854-3.853l-.707-.708L8 8.793L4.854 5.646l-.708.708z" clip-rule="evenodd" />
                            </svg>

                        </router-link>

                        <router-link 
                        to="career" 
                        @click="()=> dropDownOpen = false">
                            Career
                        </router-link>

                        <router-link 
                        to="contacts"
                        @click="()=> dropDownOpen = false"
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

        <!-- dropdown  -->

        <NavDropdown v-bind="dropdownProps" />
        
    </header>
</template>

<script setup>

import NavDropdown from '@/components/dropdown/navDropdown.vue';

import productDropdownImg from '@/assets/dropdown/products.jpg'
import aboutDropdownImg from '@/assets/dropdown/about.jpg'

import { 
    ref,
    watch, 
    onMounted, 
    onUnmounted,
    reactive,
} from 'vue';

const props = defineProps({
    isSidebarOpen: Boolean,
    toggleSidebar: Function
});

const isScrolled = ref(false);
const scrollDelta = ref(false);
const lastScrollDelta = ref(0);

const handleScroll = () => {
    const currentY = window.scrollY
    isScrolled.value = currentY > 300;
    scrollDelta.value = currentY - lastScrollDelta.value > 0 ? true : false;
    lastScrollDelta.value = currentY;
}

const dropDownOpen = ref(false);
const dropDownDataName = ref("");
const imgPath = ref("");

const handleDropDown = (name, img) => {
    dropDownOpen.value = !dropDownOpen.value;
    dropDownDataName.value = name;
    imgPath.value = img;
}

watch(dropDownOpen, () => {
    document.body.style.overflow = dropDownOpen.value ? 'hidden' : 'auto';
})

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
})

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
})

const dropdownProps = reactive({
    dropDownOpen,
    dropDownDataName,
    handleDropDown,
    imgPath,
})

</script>