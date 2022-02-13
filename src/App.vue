<template>
  <TopBar />
  <router-view class="view" />
</template>

<script setup>
import TopBar from "@/components/TopBar";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  max-width: 100vw;
}

body {
  padding: 0;
  margin: 0;
}
.view {
  height: 100%;
}
</style>
