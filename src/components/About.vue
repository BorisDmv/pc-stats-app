<template>
  <div class="about">
    <h1>About</h1>
    <p>Hope you can support my work by donating! It will mean a lot and will help to make me continue working and if you donate you can freely leave message so I will read and if you have idea what I can implement next to make the app better I will love to do! ❤</p>
    <a class="btnStyle" @click="Donate()" target="_blank">DONATE</a>
    <p>version 0.0.1</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg2: String
  },
  methods: {
    Donate(){
      window.open('https://www.paypal.com/donate/?hosted_button_id=5AYDUEXRNDEEC&Z3JncnB0=', 'DONATE TO SUPPORT ME! <3', 'top=500,left=200,frame=true,nodeIntegration=no')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about{
  text-align: left;
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
}


</style>
