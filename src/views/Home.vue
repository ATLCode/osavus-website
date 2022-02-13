<template>
  <div class="home">
    <h1 class="text">SOMETHING GENERAL HERE</h1>
  </div>
</template>

<script setup></script>

<style>
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
  font-weight: 500;
  font-size: 8rem;
}
</style>
