<template>
  <div id="app">
    <app-navbar></app-navbar>
       <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from '@/components/sharedComponents/Navbar'
import Footer from '@/components/sharedComponents/Footer'
export default {
  name: 'App',
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
  #app {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
  }
</style>
