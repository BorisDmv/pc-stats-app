<template>
  <div class="monitor">
    <div class="container">
    <div class="box">
      <span class="label">CPU (%)</span>
      <span id="cpu">{{cpuUsage}}</span>
    </div>
    <div class="box">
      <span class="label">Free Mem (%)</span>
      <span id="mem">{{memUsage}}</span>
    </div>
    <div class="box">
      <span class="label">PC Uptime</span>
      <span id="mem">{{uptime}}</span>
    </div>
    </div>
  </div>
</template>

<script>
var os = require('os')
var osu = require('node-os-utils')
var cpu = osu.cpu

export default {
  name: 'Monitor',
  props: {
    msg: String
  },
  data() {
    return{
      cpuUsage: 0,
      memUsage: 0,
      uptime: ''
    }
  },
  methods: {
    CpuUsage() {
      cpu.usage()
      .then(cpuPercentage => {
        this.cpuUsage = cpuPercentage
        //console.log('cpu usage ' + cpuPercentage + '%') // 10.38
      })
    },
    MemoryUsage(){
      var mem = osu.mem
      mem.info()
      .then(info => {
        this.memUsage = info.freeMemPercentage
        //console.log(info.freeMemPercentage)
      })
    },
    PCUptime(){
      var n = os.uptime()

      var day =parseInt( n / (24 * 3600));
 
        n = n % (24 * 3600);
        var hour = parseInt(n / 3600);
 
        n %= 3600;
        var minutes = n / 60;
 
        n %= 60;
        var seconds = n;


        this.uptime =  day + " " + "days " + hour + " " + "hours "
                + minutes.toFixed() + " " + "minutes " +
                seconds.toFixed() + " " + "seconds "
    }
  },
  mounted() {
    this.MemoryUsage()
  },
  created() {
    setInterval(() => {
      this.CpuUsage()
      this.MemoryUsage()
      this.PCUptime()
    }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  margin: auto;
  width:100%;
  display: flex;
  flex-wrap: wrap;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 60px;
  line-height: 0.95;
  padding: 0 30px 0 30px;
  background: #080814;
  border-radius: 12px;
  width: 100%;
  height: 200px;
  margin: 20px 20px 10px 20px;
}
.label {
  font-size: 20px;
  font-weight: 600;
  color:#48DEC8;
}
</style>
