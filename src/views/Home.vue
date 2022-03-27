<template>
  <div class="home">
    <h1 class="text">OSAVUS OY</h1>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.home {
  background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),
    url("~@/assets/light.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  color: white;
  font-weight: 650;
  font-size: 8rem;
}
.content {
  margin-top: 25vh;
}
</style>
