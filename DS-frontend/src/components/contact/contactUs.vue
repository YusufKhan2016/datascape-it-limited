<template>
    <section>
        <div class="bg-[#141414] py-24">
            <div class="container px-4 pt-8 mx-auto">

                <div class="flex justify-center items-center">
                    <h1 
                    class="text-9xl text-amber-50 drop-shadow-[0_0_10px_#22c55e]" 
                    ref="titleBlurEffect">
                        Let's Connect
                    </h1>
                </div>

                <div class="relative -mt-8 backdrop-blur-xl flex flex-col-reverse md:flex-row items-center justify-between gap-10 border-1 border-solid border-green-600 p-10 rounded-2xl">
                    <div class="w-full lg:w-5/10 rounded-2xl overflow-hidden">
                        <iframe 
                            class="w-full object-cover"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116800.24804613434!2d90.28321297133266!3d23.81832340000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1abc33071a7%3A0x9a625a8c69ff920c!2sDatascape%20Research%20and%20Consultancy%20Limited!5e0!3m2!1sen!2sbd!4v1752303766937!5m2!1sen!2sbd"
                            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <form 
                    action="" 
                    class="w-full lg:w-5/10 border-1 border-solid border-green-600 p-10 rounded-xl">
                        
                        <div class="grid grid-cols-1 text-amber-50 gap-8">

                            <input 
                                type="text"
                                class="h-10 text-md text-[#8A887F] focus:text-amber-50 focus:placeholder:text-amber-50 outline-none border-b-1 border-solid border-b-amber-50 focus:border-b-1 focus:border-solid focus:border-b-green-600 transition-all duration-400"
                                placeholder="Full Name">

                            <input type="Email"
                                class="h-10 text-md text-[#8A887F] focus:text-amber-50 focus:placeholder:text-amber-50 outline-none border-b-1 border-solid border-b-amber-50 focus:border-b-1 focus:border-solid focus:border-b-green-600 transition-all duration-400"
                                placeholder="Email Address">

                            <select
                                class="h-10 text-md text-[#8A887F] focus:text-amber-50 focus:placeholder:text-amber-50 outline-none border-b-1 border-solid border-b-amber-50 focus:border-b-1 focus:border-solid focus:border-b-green-600 bg-[#141414] transition-all duration-400">
                                <option value="">Interested in...</option>
                                <option value="Erp Software Solutions">Erp Software Solutions</option>
                                <option value="Custom Software Development">Custom Software Development</option>
                                <option value="Digital Marketing Solutions">Digital Marketing Solutions</option>
                                <option value="Website design & Development">Website design & Development</option>
                                <option value="Api Integration">Api Integration</option>
                                <option value="Mobile Apps Develoment">Mobile Apps Develoment</option>
                                <option value="E-Commerce">E-Commerce</option>
                                <option value="IT Consultancy">IT Consultancy</option>
                                <option value="Training & Development">Training & Development</option>
                                <option value="Video Documentary">Video Documentary</option>
                            </select>

                            <select
                                class="h-10 text-md text-[#8A887F] focus:text-amber-50 focus:placeholder:text-amber-50 outline-none border-b-1 border-solid border-b-amber-50 focus:border-b-1 focus:border-solid focus:border-b-green-600 bg-[#141414] transition-all duration-400">
                                <option value="">Your Budget (BDT)...</option>
                                <option value="20,000 BDT to 30,000 BDT">20,000 BDT to 30,000 BDT</option>
                                <option value="30,000 BDT to 50,000 BDT">30,000 BDT to 50,000 BDT</option>
                                <option value="50,000 BDT to 60,000 BDT">50,000 BDT to 60,000 BDT</option>
                                <option value="60,000 BDT to 80,000 BDT">60,000 BDT to 80,000 BDT</option>
                                <option value="80,000 BDT to 100,000 BDT">80,000 BDT to 100,000 BDT</option>
                                <option value="100,000 BDT + ">100,000 BDT + </option>
                            </select>

                            <textarea
                                class="h-40 text-md text-[#8A887F] focus:text-amber-50 focus:placeholder:text-amber-50 outline-none border-b-1 border-solid border-b-amber-50 focus:border-b-1 focus:border-solid focus:border-b-green-600 transition-all duration-400"
                                placeholder="Tell us about your project" id=""></textarea>

                        </div>

                        <div class="group space-y-2.5 inline-block">

                            <div class="flex items-center gap-1 text-amber-50 pt-8">
                                <button type="submit">Send Message</button>
                                <svg class="group-hover:translate-x-2 transition-all" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" d="m19 12l-6-6m6 6l-6 6m6-6H5" />
                                </svg>
                            </div>

                            <div
                                class="border-1 border-solid border-t-amber-50 w-5 group-hover:w-38 transition-all duration-400">
                            </div>

                        </div>

                    </form>
                    
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const titleBlurEffect = ref("");

onMounted(() => {
    console.log(titleBlurEffect.value)
    gsap.fromTo(titleBlurEffect.value,
        {
            filter: 'blur(10px)  drop-shadow(0 0 0px #22c55e)',
            opacity: 0,
            duration: 1,
        },
        {
            filter: 'blur(0px) drop-shadow(0 0 20px #22c55e)',
            opacity: 1,
            duration: 1,
        }
    )
})

</script>
