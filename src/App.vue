<template>
  <div id="app">
    <img src="./assets/logo.png">
    <headers></headers>
    <footers></footers>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Headers from "./components/Header.vue";
import Footers from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Headers,
    Footers
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
