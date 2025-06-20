<template>
    <section>
        <div class="bg-black text-amber-50">
            <div class="container mx-auto px-4 py-12">
                <div class="flex flex-wrap justify-center md:justify-between items-center">

                    <div class="space-y-4  lg:w-6/10">
                        <h1 class="font-bold text-3xl/11 md:text-6xl/18">Powering <span class="font-black text-transparent" style="-webkit-text-stroke: 1px white;">Growth Through</span> Intelligent Software</h1>
                        <p class="lg:text-xl">Browse Our Suite of Business-Centric Products Tailored to Your Needs</p>
                    </div>
                    <video 
                    autoplay 
                    muted 
                    loop 
                    playsinline 
                    :src="productVideo"
                    class="w-96"
                    ></video>

                </div>
            </div>
        </div>
    </section>
</template> 

<script setup>

    import productVideo from '@/assets/products/video/products.mp4'
    
</script>
