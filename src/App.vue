<template>
  <div class="mainApp">

    <div class="topBar">
      <div class="titleBar">
        <button @click="SideMenu_Btn()" class="toggleButton"></button>
        <div class="title">
          PC STATS APP
        </div>
      </div>

      <div class="titleBarBtns">
        <button class="topBtn minimizeBtn" @click="MinimizeApp()"></button>
        <button  class="topBtn maximizeBtn" @click="MaximizeApp()"></button>
        <button class="topBtn closeBtn" @click="CloseApp()"></button>
      </div>

    </div>

    <div class="contentArea">
      <div id="mySidebar" class="leftMenu" :style="{width: sideMenuWidth + 'px'}">
        <ul :class="{hideBtns: isHidden}">
          <router-link class="sideBtn" to="/"><img src="./assets/stats.svg" class="sideBtnImg"><li>PC Monitoring</li></router-link>
          <router-link class="sideBtn" to="/pcstats"><img src="./assets/computer.svg" class="sideBtnImg"><li>PC Stats</li></router-link>
          <router-link class="sideBtn" to="/pcclean"><img src="./assets/garbage-can.svg" class="sideBtnImg"><li>PC Clean</li></router-link>
          <router-link class="sideBtn" to="/about"><img src="./assets/info.svg" class="sideBtnImg"><li>About</li></router-link>
        </ul>
      </div>

      <div class="contentComp" v-bind:style="{ 'margin-left': this.contentCompMargin + 'px'}">
      <router-view></router-view>
      </div>
    </div>

  </div>

</template>

<script>
import {ipcRenderer} from 'electron'
const ipc = ipcRenderer

export default {
  name: 'App',
  data() {
    return{
      sideMenuShown: true,
      sideMenuWidth: 280,
      contentCompMargin: 280,
      isHidden: false
    }
  },
  methods: {
    SideMenu_Btn() {
      if(this.sideMenuShown){
        this.sideMenuWidth = 0
        this,this.sideMenuShown = false
        this.isHidden = true
        this.contentCompMargin = 0
      }
      else{
        this.sideMenuWidth = 280
        this.sideMenuShown = true
        this.isHidden = false
        this.contentCompMargin = 280
      }
    },
    CloseApp(){
      ipc.send('closeApp')
    },
    MaximizeApp(){
      ipc.send('maximizeApp')
    },
    MinimizeApp(){
      ipc.send('minimizeApp')
    }
  }
}
</script>

<style>
html, body{
  background: #15151E;
  margin: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 1.2em;
  color: #949AA7;
  height: 100%;
}

.btnStyle{
  background: #2C5E5F;
  padding: 12px 16px 12px 16px;
  border-radius: 12px;
  font-size: 14px;
  color: #48DEC8;
  text-decoration: none;
  transition: 0.5s ease-out;
  cursor: pointer;
}

.btnStyle:hover{
  background: #377d7e;
  transform: scale(0.95);
}

.mainApp{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  overflow: hidden;
}


.mainApp > .topBar{
  display: flex;
  flex-direction: row;
  widows: 100%;
  height: 40px;
  background: #080814;
  -webkit-user-select: none;
}

.topBar > .titleBar{
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}

.titleBar > .toggleButton{
  width: 45px;
  height: 40px;
  border: none;
  outline: none;
  background-color: transparent;
  background-image: url('./assets/menu-icon.svg');
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.2s;
  cursor: pointer;
}

.titleBar > .title{
  margin-left: 10px;
  width: 100%;
  line-height: 30px;
  margin-top: 5px;
  padding-bottom: 5px;
  -webkit-app-region: drag;
}

.topBar > .titleBarBtns{
  display: flex;
  flex-direction: row;
  width: 120px;
  height: 40px;
}

.titleBarBtns > .topBtn{
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  background-color: transparent;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.2s;
  cursor: pointer;
}



.titleBarBtns > .minimizeBtn{
  background-image: url('./assets/minimize.svg');
}

.titleBarBtns > .maximizeBtn{
  background-image: url('./assets/maximize.svg');
}

.titleBarBtns > .closeBtn{
  background-image: url('./assets/close.svg');
}

::-webkit-scrollbar {
  display: none;
}


.mainApp > .contentArea{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

.contentArea > .leftMenu{
  position: fixed;
  width: 280px;
  height: 100%;
  background: #080814;
  transition: 0.4s;
}

.sideBtnImg{
  width: 20px; 
  float: left;
  margin-right: 10px; 
}

ul{
  list-style-type: none;
  padding-left: 20px;
  text-align: left;
  opacity: 1;
  transition: 0.2s;
  transition-delay: 0.2s;
}

.hideBtns{
  opacity: 0;
  transition: 0.1s;
}

li{
  margin-bottom: 10px;
}

.sideBtn{
  color: #949AA7;
  text-decoration: none;
  transition: 0.1s;
}

#mySidebar a.router-link-exact-active {
  color: #48DEC8;
}

.contentArea > .contentComp{
  width: 100%;
  height: 100%;
  transition: 0.4s;
}

</style>
