<template>
  <vs-navbar class="nabarx">
    <slot name="title">
      <vs-navbar-title>Courses</vs-navbar-title>
    </slot>
    <vs-navbar-item index="0">
      <router-link to="/">Home</router-link>
    </vs-navbar-item>
    <vs-navbar-item index="1">
      <router-link to="/students">Student</router-link>
    </vs-navbar-item>
    <vs-navbar-item index="2">
      <router-link to="/course-detail">Course detail</router-link>
    </vs-navbar-item>
    <vs-navbar-item index="3">
      <router-link to="/generate">Generate</router-link>
    </vs-navbar-item>
  </vs-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
