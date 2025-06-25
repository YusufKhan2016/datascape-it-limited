<template>
  <section> 
    <div class="bg-[#141414]">
      <div class="container mx-auto px-4 py-14">

        <div class="p-18">

          <BaseTitle>Our Tech Stacks</BaseTitle>
          <BaseSubtitle>Powering innovation with the latest technologies.</BaseSubtitle>

        </div>
  
        <!-- category section  -->

        <div class="flex flex-wrap justify-center gap-8 text-[17px] text-[#fff] pb-12">
          <div 
          v-for="(stkcat, index) in stackCategories"
          :key="index"
          >
    
            <button  
            @click="selectCategory(stkcat)"
            class="relative group text-white">
              {{ stkcat }}
              <span 
              class="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-700 to-green-600 transition-all duration-100 group-hover:w-full group-active:w-full"
              :class="stkcat === selectedCategory ? 'w-full' : 'w-0'"
              ></span>
            </button>
    
          </div>
        </div>

        <!-- content section  -->
  
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 text-lg font-semibold">
          <div
            v-for="(stack, index) in filteredStacks"
            :key="index"
          >
  
            <div class="flex flex-col items-center justify-center gap-2 p-6 bg-[#000] border-1 border-solid border-green-900 rounded-2xl shadow-lg shadow-green-900 transition-all duration-400 ease-in-out">

              <div class="p-10 rounded-full bg-white flex items-center justify-center">
                <img :src="stack.logo" class="absolute h-10" alt="">
              </div>
  
              <h2 class="text-white">{{ stack.name }}</h2>

            </div>  
  
          </div>
        </div>
  
      </div>
    </div>
  </section>
</template>

<script setup>
  
  import { ref, computed } from 'vue';
  
  import BaseTitle from '@/components/headings/baseTitle.vue';
  import BaseSubtitle from '@/components/headings/baseSubtitle.vue';

  import LaravelLogo from '@/assets/techStacks/logos/backend/laravel.png';
  import ExpressLogo from '@/assets/techStacks/logos/backend/express.png';
  import NodejsLogo from '@/assets/techStacks/logos/backend/nodejs.png';
  import PhpLogo from '@/assets/techStacks/logos/backend/php.png';

  import BootstrapLogo from '@/assets/techStacks/logos/frontend/bootstrap.png';
  import CssLogo from '@/assets/techStacks/logos/frontend/css.png';
  import HtmlLogo from '@/assets/techStacks/logos/frontend/html.png';
  import JavascriptLogo from '@/assets/techStacks/logos/frontend/javascript.png';
  import NextjsLogo from '@/assets/techStacks/logos/frontend/nextjs.png';
  import NuxtjsLogo from '@/assets/techStacks/logos/frontend/nuxtjs.png';
  import ReactLogo from '@/assets/techStacks/logos/frontend/react.png';
  import VueLogo from '@/assets/techStacks/logos/frontend/vujs.png';
  import TailwindLogo from '@/assets/techStacks/logos/frontend/tailwindcss.png'
  
  import MongoDBLogo from '@/assets/techStacks/logos/database/mongodb.png';
  import MysqlLogo from '@/assets/techStacks/logos/database/mysql.png';
  import OracleLogo from '@/assets/techStacks/logos/database/oracle.png';
  import PostgresqlLogo from '@/assets/techStacks/logos/database/postgresql.png';

  import FlutterLogo from '@/assets/techStacks/logos/mobile/flutter.png'

  import WordpressLogo from '@/assets/techStacks/logos/cms/wordpress.png';

  import DockerLogo from '@/assets/techStacks/logos/devops/docker.png';
  import AwsLogo from '@/assets/techStacks/logos/devops/aws.png';
  import GithubLogo from '@/assets/techStacks/logos/devops/github.png';


  const techStacks = ref([

    //frontend techs

    { name: 'React JS', category: 'Frontend', logo: ReactLogo },
    { name: 'Next JS', category: 'Frontend', logo: NextjsLogo },
    { name: 'Vue JS', category: 'Frontend', logo: VueLogo },
    { name: 'Nuxt JS', category: 'Frontend', logo: NuxtjsLogo },
    { name: 'HTML', category: 'Frontend', logo: HtmlLogo },
    { name: 'CSS', category: 'Frontend', logo: CssLogo },
    { name: 'JavaScript', category: 'Frontend', logo: JavascriptLogo,},
    { name: 'Bootstrap', category: 'Frontend', logo: BootstrapLogo,},
    { name: 'Tailwind CSS', category: 'Frontend', logo: TailwindLogo,},    

    //backend techs

    { name: 'Laravel', category: 'Backend',logo: LaravelLogo},
    { name: 'Node.js', category: 'Backend',logo: NodejsLogo},
    { name: 'Express.js', category: 'Backend',logo: ExpressLogo},
    { name: 'Php', category: 'Backend',logo: PhpLogo},

    //database techs 

    { name: 'MySQL', category: 'Database', logo: MysqlLogo },
    { name: 'Oracle', category: 'Database', logo: OracleLogo },
    { name: 'MongoDB', category: 'Database', logo: MongoDBLogo },
    { name: 'PostgreSQL', category: 'Database', logo: PostgresqlLogo },

    //mobile techs

    { name: 'Flutter', category: 'Mobile Apps', logo: FlutterLogo },

    //cms techs

    { name: 'WordPress', category: 'CMS' , logo: WordpressLogo },

    //devops techs

    { name: 'Docker', category: 'DevOps', logo: DockerLogo },
    { name: 'AWS', category: 'DevOps', logo: AwsLogo },
    { name: 'Github', category: 'DevOps', logo: GithubLogo },
    
  ]);
  
  const stackCategories = computed(() => {
    const categories = techStacks.value.map(stack => stack.category);
    return [...new Set(categories)];
  })

  // const stackCategories = ref([
  //   'Backend',
  //   'Frontend',
  //   'Database',
  //   'Mobile Apps',
  //   'CMS',
  //   'DevOps'
  // ])
  
  const selectedCategory = ref(stackCategories.value[0]);

  const selectCategory = (category) => {
    selectedCategory.value = category;
  }

  const filteredStacks = computed(() => {
    return techStacks.value.filter(stack => stack.category === selectedCategory.value);
  })

</script>