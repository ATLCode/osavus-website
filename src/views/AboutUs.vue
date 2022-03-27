<template>
  <div class="about">
    <img src="~@/assets/OsavusTrueGreen.png" alt="logo" />
    <span>
      Osavus Oy is a family business focused on Management Consulting, Executive
      Search, Executive and Sports Coaching, and products and services for Early
      Childhood Education. Consulting customers and working together with
      Business Partners in Executive Search and Coaching in Osavus since May
      2018.
    </span>
  </div>
</template>
<script scoped setup></script>

<style scoped lang="scss">
.about {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
}
img {
  margin: 20px;
}
span {
  color: $green;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 10%;
  margin-right: 10%;
}
</style>
