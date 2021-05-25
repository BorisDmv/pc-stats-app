<template>
  <div class="pcclean"> 

    <div :class="{overlay: isRemoving}">
      <div :class="{ldsSpinner: isRemoving}"><div></div><div></div><div></div></div>
    </div>

    <h1>Remove cache files with one click</h1>

    <p class="title">It will clean your default directory with temporary files</p>

    <p>Folder to be cleaned: {{tempDir}}</p>
    <p>Folder size: {{tempDirSize}}</p>
    
    <a class="btnStyle" @click="CleanTempFiles()">Start Removing</a>


  </div>
</template>

<script>
import os from 'os'
import fs from 'fs'
//import getFolderSize from 'get-folder-size';

export default {
  name: 'PCClean',
  props: {
    msg2: String
  },
  data() {
    return{
      tempDir: '',
      tempDirSize: '0',
      isRemoving: false
    }
  },
  methods: {
    CleanTempFiles() {
      const tempFolder = os.tmpdir
      //const delFolder = 'D:/web-dev/pc-stats-app/src/components/deleteThis/'
      this.isRemoving = true
      try {
        fs.rmdirSync(tempFolder, { recursive: true, force: true })
        console.log('Successfully deleted')
      } catch (error) {
        console.log(error.message)
      }
    },
    FolderStats(){
      this.tempDir = os.tmpdir
    }
  },
  mounted() {
    this.FolderStats()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pcclean{
  text-align: left;
  margin-left: 20px;
}

/* Spinner */
.overlay{
  position: fixed; /* Sit on top of the page content */
  display: block; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: 2; 
}

.ldsSpinner {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  z-index: 3; 
}
.ldsSpinner div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 8px;
  background: #fff;
  animation: ldsSpinner 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.ldsSpinner div:nth-child(1) {
  left: 16px;
  animation-delay: -0.24s;
}
.ldsSpinner div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.ldsSpinner div:nth-child(3) {
  left: 48px;
  animation-delay: 0;
}
@keyframes ldsSpinner {
  0% {
    top: 4px;
    height: 54px;
  }
  50%, 100% {
    top: 20px;
    height: 22px;
  }
}
</style>
