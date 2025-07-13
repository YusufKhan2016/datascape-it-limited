<template >
  <router-view />
</template>

<script setup>

import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

let lenis

onMounted(() => {
  lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  })

  const raf = (time) => {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})

onUnmounted(() => {
  lenis.destroy()
})

</script>
