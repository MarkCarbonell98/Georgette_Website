<template>
  <div class="container">
    <app-navbar></app-navbar>
       <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from './sharedComponents/Navbar'
import Footer from './sharedComponents/Footer'
export default {
  name: 'Bootstrap',
  components: {
    'app-navbar': Navbar,
    'app-footer': Footer,
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
  /* .container {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
  } */
</style>


