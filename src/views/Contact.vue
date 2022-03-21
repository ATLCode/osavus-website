<template>
  <div class="page">
    <div class="img-t"><img class="img-tl" src="@/assets/tuomas1.jpg" /></div>
    <div class="details-t">
      <div class="contact">
        <div class="name"><h1>Tuomas Leinonen</h1></div>
        <div class="phone">
          <img class="icon" src="@/assets/mobile.png" />
          <h3>+358 400 843 809</h3>
        </div>
        <div class="email">
          <img class="icon" src="@/assets/email.png" />
          <h3>tuomas.leinonen@osavus.fi</h3>
        </div>
        <div class="social">
          <a target="_blank" href="https://www.linkedin.com/in/tuomasleinonen/">
            <img class="icon2" src="@/assets/linkedin.png" />
          </a>
        </div>
      </div>
    </div>

    <div class="img-a"><img class="img-al" src="@/assets/atl1.jpg" /></div>
    <div class="details-a">
      <div class="contact">
        <div class="name"><h1>Aleksanteri Leinonen</h1></div>
        <div class="phone">
          <img class="icon" src="@/assets/mobile.png" />
          <h3>+358 409 363 439</h3>
        </div>
        <div class="email">
          <img class="icon" src="@/assets/email.png" />
          <h3>aleksanteri.leinonen@gmail.com</h3>
        </div>
        <div class="social">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/aleksanteri-leinonen/"
          >
            <img class="icon2" src="@/assets/linkedin.png" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.page {
  height: 100%;
  display: grid;
  grid-template-areas:
    "img-t img-a"
    "details-t details-a";
  grid-template-rows: 4fr 6fr;
}

.img-t {
  grid-area: img-t;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-a {
  grid-area: img-a;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-tl {
  border-radius: 50%;
  height: 30vh;
}

.img-al {
  border-radius: 50%;
  height: 30vh;
}

.details-t {
  grid-area: details-t;
  background: hsla(123, 50%, 20%, 1);
  color: white;
}

.details-a {
  grid-area: details-a;
  background: hsla(123, 50%, 20%, 1);
  color: white;
}

.contact {
  display: grid;
  grid-template-rows: 1fr 2fr 2fr 1fr;
}

.name {
  display: flex;
  justify-content: center;
  align-items: center;
}
.phone {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.email {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.social {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  height: 10vh;
  -webkit-filter: invert(100%);
}

.icon2 {
  height: 5vh;
  -webkit-filter: invert(100%);
}
</style>
