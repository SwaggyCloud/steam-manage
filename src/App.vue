<template>
  <div id="app">
    <Basic />
  </div>
</template>

<script>
import Basic from "./layout/Basic";
export default {
  name: "app",
  components: {
    Basic,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  padding: 0;
}
</style>
