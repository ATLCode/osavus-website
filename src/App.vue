<template>
  <TopBar />
  <router-view id="view" />
</template>

<script setup>
import TopBar from "@/components/TopBar";
</script>

<style lang="scss">
body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-height: 100vh;
}

#view {
  padding-top: 50px;
  min-height: calc(100vh - 50px);
}
</style>
