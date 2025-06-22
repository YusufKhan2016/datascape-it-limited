<template>
    <div class="relative lg:w-2/3">
                        
        <h2
        aria-hidden="true"
        class="absolute sm:text-3xl/snug md:text-4xl/snug font-[500] mt-6 bg-gradient-to-r from-blue-400 via-green-200 to-amber-200 text-transparent bg-clip-text blur-[35px]">
            <slot />
        </h2>
        
        <h2 class="relative text-amber-50  sm:text-3xl/snug md:text-4xl/snug font-[500] mt-6">
            <slot />
        </h2>

    </div>
</template>

<script setup>

</script>