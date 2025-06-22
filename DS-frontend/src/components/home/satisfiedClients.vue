<template>
  <section>
    <div class="bg-[#141414]">
      <div class="container mx-auto py-14 px-4">
 
        <AnimatedTitle 
          firstPart = "Our"
          middlePart = "Satisfied"
          lastPart = "Clients"
        />

        <div class="logoMove relative overflow-hidden">
          <div 
          class="marquee-track flex gap-10 py-18 whitespace-nowrap"
          >

            <div
              v-for="(clientData, index) in clientDatas"
              :key="index"
              class="shrink-0 ml-4 my-auto"
            >
              <img :src="clientData.logo" alt="logo" class="w-[96px] mx-auto" />
            </div>  

          </div>

          <!-- left right gradient shadow effect  respectively        -->
          
          <div class="absolute top-0 left-0 h-full w-34 z-10 pointer-events-none bg-gradient-to-r from-[#141414] to-transparent"></div>
          <div class="absolute top-0 right-0 h-full w-34 z-10 pointer-events-none bg-gradient-to-l from-[#141414] to-transparent"></div>
          
          <!-- left right gradient shadow effect  respectively  ends      -->

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>

  import { ref, onMounted, nextTick } from "vue";

  import { gsap } from "gsap";

  import AshInteriorLogo from "@/assets/satisfiedClients/ash-interior.png";
  import BracLogo from "@/assets/satisfiedClients/brac.png";
  import ChrfLogo from "@/assets/satisfiedClients/csrf.png";
  import DatascapeLogo from "@/assets/satisfiedClients/datascape.png";
  import EmbassyBDLogo from "@/assets/satisfiedClients/embassy-bangladesh.png";
  import HotelKollolLogo from "@/assets/satisfiedClients/hotel-kollol.png";
  import IbnatairLogo from "@/assets/satisfiedClients/ibnatair.png";
  import IFRCLogo from "@/assets/satisfiedClients/ifrc.png";
  import ITCLogo from "@/assets/satisfiedClients/itc.png";
  import JuvenileSchoolLogo from "@/assets/satisfiedClients/juvenile-school.png"
  import MernetLogo from "@/assets/satisfiedClients/mernet.png";
  import OrchidSchoolLogo from "@/assets/satisfiedClients/orchid-school.png";
  import OspreyLogo from "@/assets/satisfiedClients/osprey.png";
  import priyoHolidaysLogo from "@/assets/satisfiedClients/priyoholidays.png"
  import SpaceSweaterLogo from "@/assets/satisfiedClients/space-sweater.png";
  import StarlitSchoolLogo from "@/assets/satisfiedClients/starlit-school.png"
  import TextTechLogo from "@/assets/satisfiedClients/textech.png";
  import TravelersHolidayLogo from "@/assets/satisfiedClients/travelers-holiday.png";
  import UmclLogo from "@/assets/satisfiedClients/umcl.png";
  import UnicefLogo from "@/assets/satisfiedClients/unicef.png";
  import VrcLogo from "@/assets/satisfiedClients/vrc.png"
  
  import AnimatedTitle from "../headings/animatedTitle.vue";

  const sliderClientDatas = ref([
    
    {
      name:"Child Health Research Foundation",
      logo: ChrfLogo,
    },
    {
      name:"Textech Solutions",
      logo: TextTechLogo,
    },
    {
      name:"Uttara Model Club Limited",
      logo: UmclLogo,
    },
    {
      name:"International Travel Corporation",
      logo: ITCLogo,
    },
    {
      name:"Space Sweater Limited",
      logo: SpaceSweaterLogo,
    },
    {
      name:"Osprey Education Canada Inc",
      logo: OspreyLogo,
    },
    {
      name:"Ibnat Air International Tour & Travel",
      logo: IbnatairLogo,
    },
    {
      name:"Priyo Holidays Limited",
      logo: priyoHolidaysLogo,
    },
    {
      name:"VRC Study Abroad Limited",
      logo: VrcLogo,
    },
    {
      name:"Embassy Bangladesh Immigration",
      logo: EmbassyBDLogo,
    },
    {
      name:"Starlit School of English",
      logo: StarlitSchoolLogo,
    },
    {
      name:"Juvenile English Medium School",
      logo: JuvenileSchoolLogo,
    },
    {
      name:"Hotel Kollol - j & Z Group",
      logo: HotelKollolLogo,
    },
    {
      name:"Orchid International School Dhaka",
      logo: OrchidSchoolLogo,
    },
    {
      name:"ASH Interior",
      logo: AshInteriorLogo,
    },
    {
      name:"Traveler's Holidays Ltd.",
      logo: TravelersHolidayLogo,
    },
    {
      name:"Datascape Reasearch & Consultancy Ltd.",
      logo: DatascapeLogo,
    },
    {
      name:"Mernet Monitoring Evaluation",
      logo: MernetLogo,
    },
    {
      name:"Unicef",
      logo: UnicefLogo,
    },
    {
      name:"Brac",
      logo: BracLogo,
    },
    {
      name:"IFRC",
      logo: IFRCLogo,
    },
  
  ])

  const clientDatas = ref([
    ...sliderClientDatas.value,
    ...sliderClientDatas.value,
  ])
    
  onMounted(async () => {
    await nextTick();

    const marquee = document.querySelector(".marquee-track");
    const images = marquee.querySelectorAll("img");

    // Wait for all logos to load
    await Promise.all(
      Array.from(images).map((img) => {
        return img.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              img.onload = img.onerror = resolve;
            });
      })
    );

    const scrollWidth = marquee.scrollWidth;
    const visibleWidth = marquee.offsetWidth;
    const distance = scrollWidth - visibleWidth;
    const speed = 60; // pixels per second
    const duration = distance / speed;

    gsap.to(marquee, {
      x: -distance,
      duration: duration,
      repeat: -1,
      ease: "none",
    });

    const MAX_CLIENTS = 50;
    if (clientDatas.value.length < MAX_CLIENTS) {
      clientDatas.value = [...clientDatas.value, ...sliderClientDatas.value];
    }
  });


</script>