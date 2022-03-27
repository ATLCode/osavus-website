<template>
  <div class="business">
    <div class="profile">
      <div class="img"><img class="img-tl" src="@/assets/atl1.jpg" /></div>
      <div class="bullet">
        <ul>
          <li>HTML / CSS / JavaScript</li>
          <li>Vue / NodeJS</li>
          <li>PostgreSQL / MongoDB</li>
        </ul>
      </div>
      <div class="contact">
        <a href="mailto: aleksanteri.leinonen@gmail.fi">
          <img class="icon" src="@/assets/email.png"
        /></a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/aleksanteri-leinonen/"
        >
          <img class="icon2" src="@/assets/linkedin.png" />
        </a>
        <img class="icon" src="@/assets/mobile.png" />
        <h3>+358 409 363 439</h3>
      </div>
    </div>
    <div class="details">
      <div class="s1"></div>
      <div class="s2">
        <h1 class="h1">Creating a Website</h1>
        <ul>
          <li>
            Need help creating a website for your company or business (like this
            one)?
          </li>
          <li>Or any other type of website?</li>
          <li>Contact me and let's see how we can work together!</li>
        </ul>
      </div>
      <div class="s3"></div>
    </div>
  </div>
</template>
<script scoped setup></script>

<style scoped lang="scss">
.business {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.profile {
  display: grid;
  grid-template-areas:
    "img"
    "bullet"
    "contact";
  grid-template-rows: 1fr 1fr 1fr;
  background-color: $green;
}

.img {
  grid-area: img;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bullet {
  display: flex;
  justify-content: center;
  grid-area: bullet;
  color: $text-primary;
  text-align: left;
}
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: contact;
  gap: 10px;
  img {
    height: 8vh;
  }
  color: white;
}

.details {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  color: $green;
}

.s1,
.s2,
.s3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}

.h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

li {
  font-size: 1.2rem;
}
</style>
