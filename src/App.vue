<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';

  let lang = window.location.href.split('/')[3];
  if(lang == 'ar') {
    document.body.style.direction = 'rtl';
  } else{
    document.body.style.direction = 'ltr';
  }

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
</script>