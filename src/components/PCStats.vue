<template>
  <div class="pcstats">
    <h1>Your PC STATS</h1>

    <p class="statsTitle">OS</p>
    <p>{{osPlatform}}</p>

    <p class="statsTitle">CPU Model</p>
    <p>{{cpuModel}}</p>

    <p class="statsTitle">CPU Cores</p>
    <p>{{cpuCores}}</p>

    <p class="statsTitle">Total RAM</p>
    <p>{{totalRam }} GB</p>

  </div>
</template>

<script>
var os = require('os')
var osu = require('node-os-utils')
var cpu = osu.cpu
import { getGPUTier } from 'detect-gpu';

export default {
  name: 'PCStats',
  props: {
    msg2: String
  },
  data() {
    return{
      netType: '',
      osPlatform: '',
      cpuModel: '',
      cpuCores: '',
      totalRam: ''
    }
  },
  methods: {
    async ShowGPU() {
      const gpuTier = await getGPUTier();
      console.log(gpuTier)
    },
    OSPlatform() {
      this.osPlatform = os.version() + ' ' + '(' + os.platform() + ')'
    },
    CpuModel() {
      var model = cpu.model()
      this.cpuModel = model
      //console.log('cpu model ' + model)
    },
    CpuCores() {
      var count = cpu.count()
      this.cpuCores = count
      //console.log('cpu cores ' + count)
    },
    TotalMem(){
      var mem = osu.mem

      mem.info()
      .then(info => {
        this.totalRam = info.totalMemMb.toString().substring(0, 2)
        //console.log(Math.round(info.totalMemMb))
      })
    }
  },
  mounted() {
    this.ShowGPU()
    this.OSPlatform()
    this.CpuModel()
    this.CpuCores()
    this.TotalMem()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pcstats{
  text-align: left;
  margin-left: 20px;
}

.statsTitle{
  font-weight: 600;
  color:#48DEC8;
}
</style>
