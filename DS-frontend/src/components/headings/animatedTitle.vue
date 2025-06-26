<template>
  <div>
    <h1 
    ref="heading"
    :class="`flex flex-wrap justify-center overflow-hidden text-3xl sm:text-3xl/snug md:text-4xl/snug xl:text-6xl/snug font-light ${extraClass}`">
    
        <span 
        :class="`text-transparent bg-cover bg-left bg-clip-text`"
        :style="`background-image: url(${bgImgUrl})`"
        > 
            {{ firstPart }}&nbsp;
        </span>
        <span 
        ref="middle"
        :class="`${middleTextColor}`" > 
            {{ middlePart }}&nbsp;
        </span> 
        <span 
        :class="`text-transparent bg-cover bg-right bg-clip-text`"
        :style="`background-image: url(${bgImgUrl})`"
        >
            &nbsp;{{ lastPart }}
        </span>
        
    </h1>
  </div>
</template>

<script setup>

    import { ref, onMounted, nextTick } from "vue";

    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/all";

    import SplitType from "split-type";

    gsap.registerPlugin(ScrollTrigger)
    
    const heading = ref(null);
    const middle = ref(null);

    const titleAnimation = () => {

        if(window.innerWidth >= 1024 && middle.value) {
            
            const splittedText = new SplitType(middle.value, {types: "chars"} )
    
            gsap.from(splittedText.chars, {
        
                y:100,
                opacity:0,
                delay: 0.3,
                duration:0.8,
                // ease: "back.out",
                stagger: {
                    from: "center",
                    amount: -0.4,
                },
                scrollTrigger:heading.value 
        
            })
    
        }

    }

    onMounted( async() => {

    // animation for heading
        await nextTick();
        titleAnimation();
    
    })

    defineProps({

        firstPart: {
            type: String,
        },
        middlePart: {
            type:String,
        },
        lastPart: {
            type:String,
        },
        bgImgUrl: {
            type:String,
            default: 'https://images.unsplash.com/photo-1707301396786-d5d6621416e6',
        },
        middleTextColor: {
            type: String,
            default: "text-amber-50",
        },
        extraClass: {
            type: String,
        }
        
    })


</script>