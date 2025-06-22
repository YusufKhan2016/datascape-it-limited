<template>
  <section>
    <div class="bg-[#141414]">
        <div class="container px-4 py-12 mx-auto">

  <!-- about us description  -->

            <div class="p-18">
                <AnimatedTitle
                  firstPart = "A Glimpse of"
                  middlePart = "DatascapeIT"
                  bgImgUrl = "https://images.pexels.com/photos/7130491/pexels-photo-7130491.jpeg"
                />
            </div>

            <div class="about-us-desc text-gray-200 text-2xl py-5"
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
            <div class="image-box w-full h-auto bg-white translate-y-[50%] overflow-hidden flex items-center justify-center rounded-4xl">

              <img src="@/assets/about/datascape-family.jpg" class="animated-about-img transform w-full" alt="">

            </div>


        </div>
    </div>
  </section>
</template>

<script setup>
  import AnimatedTitle from '../headings/animatedTitle.vue';
  import SplitType from 'split-type'

  import { onMounted } from 'vue';

  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/all';

  gsap.registerPlugin(ScrollTrigger)
  
  onMounted (()=> {
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
          end: "top -40%",
          scrub:1.5,
          markers:false,
        }
      
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageBox,
          start: "top 95%",
          end: "top 50%",
          scrub: 2,
          markers: false,
        },
      });

      tl.to(imageBox, { 
        y: 0, 
        duration: 2 

      });

      tl.from(animatedImage, { 
        scale: 1.2, 
        duration: 2 

      });
    })

  })


</script>