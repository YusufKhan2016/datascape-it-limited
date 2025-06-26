<template>
    <div class="flex items-center gap-3">
        <component 
        :is='tag' 
        :class="headingClass">
            <slot />
        </component>
        <div :class="headingLineClass"></div>
    </div>
</template> 

<script setup>

    import { computed } from 'vue';

    const props = defineProps({
        tag: {
            type: String,
            default: 'h1',
        },
        size: {
            type: String,
            default: 'text-2xl',
        },
        color: {
            type: String,
            default: 'text-amber-50',
        },
        weight: {
            type: String,
            default: 'font-extralight',
        },
        fontTrack: {
            type: String,
            default: 'tracking-[5px]',
        },
        customClass: {
            type: String,
            default: '',
        },
        lineClass: {
            type: String,
            default: 'w-14 h-px bg-white'
        }
    })

    const headingLineClass = computed(()=> {
        return `${props.lineClass}`
    })

    const headingClass = computed(() => {
        return `${props.size} ${props.color} ${props.weight} ${props.fontTrack} ${props.customClass}`
    })

</script>