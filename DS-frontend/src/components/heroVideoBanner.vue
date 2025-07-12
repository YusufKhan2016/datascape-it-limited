<template>
  
  <section>
    <!-- bg color: #141414  -->
    <div class="w-full bg-gradient-to-b from-[#000603] bg-[#141414]">
      <div class="bannerSliderScroll w-full overflow-hidden container px-2 sm:px-5 relative left-1/2 -translate-x-1/2" >
          <div class="rounded-2xl border border-solid border-green-600 overflow-hidden ">
    
            <Swiper 
              class="mySwiper"
              :loop="true"
              :autoplay="{ delay: 10000, disableOnInteraction: false }"
              :modules="[Autoplay]"
            >
  
              <SwiperSlide
                v-for="(item, index) in bannerElements"
                :key="index"
              >
      
                <div class="sm:h-[500px] relative overflow-hidden">
                  <video 
                    :src="item.image_link"
                    :autoplay="{disableOnInteraction: false}"
                    muted 
                    loop 
                    preload="auto"
                    class="w-full h-full object-cover"
                  ></video>
                  <div class="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] to-transparent opacity-80"></div>
                  <h1 class="absolute top-7/10 left-3 sm:left-8 text-xl sm:text-6xl font-bold text-[#fff]">{{item.title}}</h1>
                </div>
                
              </SwiperSlide>
                
            </Swiper>
    
          </div>
      </div>
    </div>

  </section>

</template>

<script setup>

  import { onMounted, ref } from 'vue';

  import 'swiper/css';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay } from 'swiper/modules';

  import  gsap  from 'gsap';
  import  ScrollTrigger  from "gsap/ScrollTrigger";

  const bannerElements = ref([

    {
      title: "Let's build together",
      image_link: "https://videos.pexels.com/video-files/3934293/3934293-uhd_2560_1440_30fps.mp4"
    },
    {
      title: "Empowering your business",
      image_link: "https://videos.pexels.com/video-files/8100336/8100336-uhd_2732_1440_25fps.mp4"
    },

  ])

  const bannerSliderClass = ref(null);

  onMounted(() => {
    
    bannerSliderClass.value = ".bannerSliderScroll"
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(bannerSliderClass.value,{
      scale: 0.80,
      ease: 'none',
      scrollTrigger: {
        trigger: ".bannerSliderScroll",
        // markers:true,
        start: "top 90%",
        end: "top 15%",
        scrub: 1,
      }
    })

  });

</script>