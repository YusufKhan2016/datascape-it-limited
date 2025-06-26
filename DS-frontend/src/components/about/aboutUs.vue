<template>
  <section>
    <div class="bg-[#141414]">
        <div class="container px-4 py-14 mx-auto">

  <!-- about us description  -->

          <div class="p-4">
              <AnimatedTitle
                firstPart = "A Glimpse of"
                middlePart = "DatascapeIT"
                bgImgUrl = "https://images.unsplash.com/photo-1707301396786-d5d6621416e6?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
          </div>

          <div class="about-us-desc text-gray-200 text-sm/9 md:text-xl/9 py-10"
          >

            Initiating profound changes with thorough understanding and profound insight.

            <br>
            <br>

            Datascape IT Limited, a subsidiary of the esteemed Datascape Group, is a distinguished private limited company headquartered in Dhaka, Bangladesh. As a premier digital marketing agency, we specialize in crafting bespoke solutions tailored to the unique needs of entrepreneurs, startups, and organizations. Our comprehensive suite of services includes Branding, Web Designing, Social Media Marketing, and Search Engine Optimization, all aimed at unleashing the digital potential of our clients.
            
            <br>
            <br>

            At Datascape IT, we pride ourselves on our smart approach to digital growth, breaking down complex processes into easily understandable steps for our clients. Our team of seasoned professionals combines creativity with analytical acumen, ensuring every project reflects our unwavering commitment to excellence and brand integrity. We guarantee the highest standards of quality and creativity in all endeavors, promising to elevate your brand's online presence and foster long-term success. Through transparent communication and ongoing education, we forge meaningful partnerships with our clients, empowering them to navigate the digital landscape with confidence. Let us guide you towards building a resilient, thriving brand that stands out amidst competition and endures the test of time.

          </div>

<!-- about us image section   -->

          <div class="image-box w-9/10 h-auto bg-white overflow-hidden flex items-center justify-center mx-auto rounded-4xl">

            <img src="@/assets/about/datascape-family.jpg" class="animated-about-img transform w-full" alt="">

          </div>

        </div>
    </div>
  </section>
</template>

<script setup>

  import { nextTick, onMounted } from 'vue';
  import AnimatedTitle from '../headings/animatedTitle.vue';
  import SplitType from 'split-type'

  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/all';

  gsap.registerPlugin(ScrollTrigger)

  const animatedContents = () => {
    const description = document.querySelectorAll(".about-us-desc");
    const imageBox = document.querySelector(".image-box");
    const animatedImage = document.querySelector(".animated-about-img")
    
    description.forEach((char)=> {

      const characters = new SplitType(char, {types: 'lines'});
      
      console.log(characters)

      gsap.from(characters.lines, {

        opacity:0.3,
        stagger:0.1,
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top -60%",
          scrub:1.5,
          markers:false,
        }
      
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageBox,
          start: "top 95%",
          end: "top 50%",
          scrub: 4,
          markers:false,
        },
      });
      
      tl.from(imageBox, { 
        translateY: "20%", 
        scale: 0.85,
        duration: 2 

      });

      tl.from(animatedImage, { 
        scale: 1.2, 
        duration: 2 

      });
    })
  }
  
  onMounted (()=> {

    nextTick();
    if(window.innerWidth >= 1024 ) animatedContents();
    
  })

</script>