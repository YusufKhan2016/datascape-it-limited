<template>
    <div>
        
        <NavBar v-bind="sidebarProps"/>
        <Sidebar v-bind="sidebarProps" />

        <main>
            <div class="pt-17">
                <router-view />
            </div>
        </main>

        <BottomBar />

    </div>
</template>

<script setup>

    import { ref, reactive, watch } from 'vue';

    import NavBar from './navBar.vue';
    import Sidebar from './sideBar.vue';
    import BottomBar from './bottomBar.vue';

    const isSidebarOpen = ref(false);

    const toggleSidebar = () => {
        isSidebarOpen.value = !isSidebarOpen.value;
    }
    
    watch(isSidebarOpen, (newValue) => {
        document.body.style.overflow = newValue ? 'hidden' : 'auto';
    })

    const sidebarProps = reactive({
        isSidebarOpen,
        toggleSidebar,
    })

</script>
