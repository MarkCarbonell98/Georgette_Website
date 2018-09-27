<template>
  <div id="app">
    <!-- <app-navbar></app-navbar>
       <router-view/>
    <app-footer></app-footer> -->
    <Bootstrap></Bootstrap>
  </div>
</template>

<script>
// import Navbar from '@/components/sharedComponents/Navbar'
// import Footer from '@/components/sharedComponents/Footer'
import Bootstrap from '@/components/Bootstrap'
export default {
  name: 'App',
  components: {
    Bootstrap,
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
  /* #app {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
  } */
</style>
