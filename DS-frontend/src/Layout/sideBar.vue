<template>

    <div 
    class="lg:hidden fixed  z-[900] w-full h-full bg-gradient-to-r from-black to-[#146FB5] pt-20 px-8 transform transition-transform duration-300 ease-in-out"
    :class="props.isSidebarOpen? 'translate-x-0' : 'translate-x-full'"  
    >
        <div class="flex flex-col space-y-3 text-white">

            <router-link to="/" @click="props.toggleSidebar">Home</router-link>
            <router-link to="/about" @click="props.toggleSidebar">About us</router-link>
            <router-link to="/services" @click="props.toggleSidebar">Services</router-link>
            <router-link to="/products" @click="props.toggleSidebar">Products</router-link>
            <router-link to="/career" @click="props.toggleSidebar">Career</router-link>
            <router-link to="/contacts" @click="props.toggleSidebar" class="bg-gradient-to-r rounded-3xl from-[#146FB5] w-30 to-[#1b303f] text-zinc-50 px-3 py-2">Contact us</router-link>

        </div>
    </div>
    
</template>

<script setup>

    const props = defineProps({
        isSidebarOpen: Boolean,
        toggleSidebar: Function
    });

</script>