<template>
  <vs-row>
    <navbar/>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <slot>
        <div></div>
      </slot>
    </vs-col>
  </vs-row>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "Layout",
  components: { Navbar }
};
</script>
