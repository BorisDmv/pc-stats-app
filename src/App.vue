<template>
  <router-link to="/">Go to Home</router-link>
  
  <router-link to="/about">Go to About</router-link>
  <img alt="Vue logo" src="./assets/logo.png">

  <router-view msg="Main comp" msg2="About comp">

  </router-view>

</template>

<script>
//import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    //Home
  }
}
</script>

<style>
html{
  background: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
