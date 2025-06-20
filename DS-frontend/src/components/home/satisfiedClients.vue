<template>
  <section>
    <div class="bg-[#141414] py-24">
      <div class="container mx-auto px-4">

        <h1 class="text-center overflow-hidden sm:text-3xl/snug md:text-6xl/snug font-light">
          <span class="text-transparent bg-[url('https://images.pexels.com/photos/7135008/pexels-photo-7135008.jpeg')] bg-cover bg-left bg-clip-text">Our </span>
          <span class="text-animate text-amber-50" >Satisfied </span> 
          <span class="text-transparent bg-[url('https://images.pexels.com/photos/7135008/pexels-photo-7135008.jpeg')] bg-cover bg-right bg-clip-text">
            Clients
          </span>
        </h1> 

        <div class="logoMove overflow-hidden">
          <div class="marquee-track flex gap-10 py-18 whitespace-nowrap">

            <div
              v-for="(clientData, index) in clientDatas"
              :key="index"
              class="shrink-0 ml-4 "
            >
              <img :src="clientData.logo" alt="logo" class="h-14 mx-auto" />
            </div>  

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>

    import { ref, onMounted } from "vue";

    import { gsap } from "gsap";

    import DatascapeLogo from "@/assets/satisfiedClients/datascape.png";
    import BracLogo from "@/assets/satisfiedClients/brac.png";
    import UnicefLogo from "@/assets/satisfiedClients/unicef.png";

    const sliderClientDatas = ref([
        
        {
          name: "Unicef",
          logo: UnicefLogo,
        },
        {
          name: "Unicef",
          logo: DatascapeLogo,
        },
        {
          name: "Unicef",
          logo: BracLogo,
        },
      
      ])

    const clientDatas = ref([
      ...sliderClientDatas.value,
      ...sliderClientDatas.value,
      ...sliderClientDatas.value,
      ...sliderClientDatas.value,
      ...sliderClientDatas.value,
      ...sliderClientDatas.value,
      ...sliderClientDatas.value, 
    ])
    // console.log(clientDatas.value);
    console.log(sliderClientDatas.value);

    
    onMounted(()=> {

      // animation for heading

      const bloom = document.querySelector(".text-animate");
      const bloomText = bloom.textContent;
      const splittedText = bloomText.split("");

      let clutter = "";

      splittedText.forEach((e)=> {
        clutter += `<span class="inline-block">${e}</span>`;
      })

      bloom.innerHTML = clutter;
      gsap.registerPlugin()

      gsap.from(".text-animate span", {
        y:100,
        opacity:0,
        delay: 0.3,
        duration:0.8,
        stagger: {
          from: "center",
          amount: -0.4,
        },
        scrollTrigger:".text-animate"
      })

      // animation for heading ends 
    
      
      //animation for infinite slider
      
      let tl = gsap.timeline({ repeat: -1, defaults: { ease: "linear" } });

      tl.to(".marquee-track", {
        xPercent: -50,
        duration: 15,
      });

      window.addEventListener("wheel", (e) => {
        const direction = e.deltaY > 0 ? 1 : -1;
        tl.timeScale(direction);
      });
      
    })

</script>