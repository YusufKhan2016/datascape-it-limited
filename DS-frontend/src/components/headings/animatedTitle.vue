<template>
  <div>
    <h1 
    ref="heading"
    :class="`text-center overflow-hidden text-3xl sm:text-3xl/snug md:text-4xl/snug lg:text-6xl/snug font-light ${extraClass}`">
    
        <span 
        :class="`text-transparent bg-cover bg-left bg-clip-text`"
        :style="`background-image: url(${bgImgUrl})`"
        > 
            {{ firstPart }}&nbsp;
        </span>
        <span 
        ref="middle"
        :class="`text-animate ${middleTextColor}`" > 
            {{ middlePart }}&nbsp;
        </span> 
        <span 
        :class="`text-transparent bg-cover bg-right bg-clip-text`"
        :style="`background-image: url(${bgImgUrl})`"
        >
            {{ lastPart }}&nbsp;
        </span>
        
    </h1>
  </div>
</template>

<script setup>

    import { onMounted, nextTick } from "vue";

    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/all";

    onMounted( async() => {

    // animation for heading
        await nextTick()
    
        const bloom = document.querySelector(".text-animate");
    
        if(window.innerWidth >= 1024 && bloom) {
    
            const bloomText = bloom.textContent;
            const splittedText = bloomText.split("");
        
            let clutter = "";
        
            splittedText.forEach((e)=> {
                clutter += `<span class="inline-block">${e}</span>`;
            })
        
            bloom.innerHTML = clutter;

            gsap.registerPlugin(ScrollTrigger)
        
            gsap.from(".text-animate span", {
        
                y:100,
                opacity:0,
                delay: 0.3,
                duration:0.8,
                // ease: "back.out",
                stagger: {
                from: "center",
                amount: -0.4,
                },
                scrollTrigger:".text-animate"
        
            })
    
        }
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
            default: 'https://images.pexels.com/photos/7135008/pexels-photo-7135008.jpeg',
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