<template>
  <div id="app">
    <layout>
    <router-view :key="$route.fullPath"/>
    </layout>
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";
export default {
  name: "App",
  components: {Layout}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
