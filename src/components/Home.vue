<template>
  <div class="home">
    <img width="75%" src="../assets/aimlogo.png" />
    <HelloWorld msg="AIM Training Guide" />
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style>
.home {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #31ace6;
  margin-top: 60px;
}
</style>
