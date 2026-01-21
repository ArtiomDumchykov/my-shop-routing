<template>
  <div id="app">
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<script>

import FooterComponent from './components/FooterComponent.vue';


export default {
  components: {
    FooterComponent,
  },
};
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800;900&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
  }
</style>