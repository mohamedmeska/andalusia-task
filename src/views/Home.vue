<template>
  <main class="home">
    <Slider />
    <Services />
    <Overview />
    <Officers />
    <Statistics />
    <News />
    <Partners />
  </main>
</template>

<script>
  import Slider from "@/components/home/Slider.vue"
  import Services from "@/components/home/Services.vue"
  import Overview from "@/components/home/Overview.vue"
  import Officers from "@/components/home/Officers.vue"
  import Statistics from "@/components/home/Statistics.vue"
  import News from "@/components/home/News.vue"
  import Partners from "@/components/home/Partners.vue"

export default {
  name: "Home",
  components: {
    Slider,
    Services,
    Overview,
    Officers,
    Statistics,
    News,
    Partners,
  },
};
</script>
