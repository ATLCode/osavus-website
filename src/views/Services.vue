<template>
  <div class="services">
    <div class="consulting card">
      <router-link to="/" class="rl"
        ><h1 class="text">BUSINESS CONSULTING</h1></router-link
      >
    </div>

    <div class="coding card">
      <router-link to="/" class="rl"
        ><h1 class="text">SOFTWARE DEVELOPMENT</h1></router-link
      >
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.services {
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 100%;
}

.card {
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.consulting {
  background-image: url("~@/assets/windows.jpg");
}

.coding {
  background-image: url("~@/assets/coding.jpg");
}

.text {
  color: white;
  font-weight: 700;
  font-size: 4rem;
}

.rl {
  text-decoration: none;
  &:hover {
    color: white;
    text-decoration: underline;
  }
}
</style>
