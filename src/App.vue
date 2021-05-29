<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
   
   <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from 'components/content/maintabbar/mainTabBar'

export default {
  name: 'App',
  components: {
    mainTabBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
