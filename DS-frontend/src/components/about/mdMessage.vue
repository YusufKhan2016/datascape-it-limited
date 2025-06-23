<template>
    <section>
        <div class="bg-[#141414]">
            <div class="container mx-auto px-4 py-14">

                <div class="p-4">
                    <AnimatedTitle 
                        firstPart = "Message From"
                        middlePart="Managing Director"
                        bgImgUrl="https://images.unsplash.com/photo-1707301396786-d5d6621416e6"
                    />
                </div>

                
                <div class="py-10">

                    <img src="@/assets/about/managing-director.jpg" 
                        class="mx-auto md:float-end md:mt-2 md:ml-6 mb-6 rounded-4xl max-w-xs lg:max-w-md" 
                        alt="">
                    <p class="text-white text-justify text-sm lg:text-lg leading-relaxed">
                        Welcome to Datascape IT Limited,

                        At Datascape IT Limited, we are driven by a passion for technology and a commitment to innovation. Our mission is to deliver cutting-edge IT solutions that empower businesses to achieve their full potential. With a foundation built on excellence, integrity, and collaboration, we have become a trusted partner for our clients worldwide.

                        <br>
                        <br>

                        Since our inception, Datascape IT Limited has been dedicated to staying ahead of the technological curve. Our team of talented professionals continuously strives to create solutions that not only meet but exceed the evolving needs of our clients. Whether it's through advanced software development, robust cybersecurity measures, or efficient IT infrastructure management, we aim to provide unparalleled service and value.

                        <br>
                        <br>

                        As we look to the future, our focus remains on fostering a culture of continuous improvement and innovation. We are committed to investing in the latest technologies and nurturing our team's skills to ensure we remain at the forefront of the IT industry. Our strategic vision includes expanding our global footprint and enhancing our service offerings to address the dynamic challenges of the digital age.

                        <br>
                        <br>

                        We understand that our success is deeply rooted in the trust and support of our clients, partners, and employees. It is this trust that drives us to push the boundaries and deliver solutions that make a meaningful impact. We are excited about the opportunities ahead and are confident in our ability to help our clients navigate the complexities of the modern technological landscape.

                        <br>
                        <br>

                        Thank you for your continued support and partnership. Together, we will achieve remarkable milestones and shape the future of technology.

                        <br>
                        <br>

                        Warm regards,

                        <br>

                        Rakib Hossain,
                        <br>    
                        Managing Director,
                        <br>
                        Datascape IT Limited
                        <br>
                    </p>
                    
                    <!-- Clear float -->
                    <!-- <div class="clear-both"></div> -->
                </div>
                
            </div>
        </div>
    </section>
</template>

<script setup>

    import AnimatedTitle from '../headings/animatedTitle.vue';

</script>