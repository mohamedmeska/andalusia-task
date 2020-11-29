<template>
  <main class="page">
    <h1>Hello World!</h1>
  </main>
</template>

<script>
export default {
  name: "Page",
};
</script>

<style lang="sass" scoped>
.page
    min-height: 500px
    display: flex
    justify-content: center
    align-items: center
    color: #000000
    background-color: #ffffff
    
    h1
        font-family: 'Arial', sans-serif
        font-size: 50px
</style>