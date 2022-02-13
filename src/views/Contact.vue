<template>
  <div class="page">
    <div class="tl">
      <div class="img"><img src="@/assets/tuomas1.jpg" /></div>
      <div class="details">test</div>
      <div class="info">test</div>
    </div>
    <div class="al">
      <div class="img"><img src="@/assets/atl1.jpg" /></div>
      <div class="details">test</div>
      <div class="info">test</div>
    </div>
    <div class="rl">
      <div class="img">test</div>
      <div class="details">test</div>
      <div class="info">test</div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.page {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.img {
  overflow: hidden;
  height: 50vh;
  display: flex;
  justify-content: center;
}

.tl .al .rl {
  height: 30vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.details {
  background: rgba(80, 138, 80, 0.877);
}
</style>
