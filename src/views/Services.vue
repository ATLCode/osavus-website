<template>
  <div class="services">
    <div class="consulting card">
      <h1 class="text">BUSINESS CONSULTING</h1>
    </div>
    <div class="coaching card">
      <h1 class="text">SPORTS COACHING</h1>
    </div>
    <div class="coding card">
      <h1 class="text">SOFTWARE DEVELOPMENT</h1>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.services {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
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

.coaching {
  background-image: url("~@/assets/track.jpg");
  background-position: bottom;
}

.coding {
  background-image: url("~@/assets/coding.jpg");
}

.text {
  color: white;
  font-weight: 700;
  font-size: 4rem;
}
</style>
