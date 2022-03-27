<template>
  <div class="business">
    <div class="profile">
      <div class="img"><img class="img-tl" src="@/assets/tuomas1.jpg" /></div>
      <div class="bullet">
        <ul>
          <li>Over 20 years of experience as an Executive Search consultant</li>
          <li>
            Previous experience in the international machine building industry
            in various roles
          </li>
          <li>Master of Science in Electrical and Electronics Engineering</li>
        </ul>
      </div>
      <div class="contact">
        <a href="mailto: tuomas.leinonen@osavus.fi">
          <img class="icon" src="@/assets/email.png"
        /></a>
        <a target="_blank" href="https://www.linkedin.com/in/tuomasleinonen/">
          <img class="icon2" src="@/assets/linkedin.png" />
        </a>
        <img class="icon" src="@/assets/mobile.png" />
        <h3>+358 400 843 809</h3>
      </div>
    </div>
    <div class="details">
      <div class="s1">
        <h1 class="h1">Executive Search</h1>
        <ol>
          <li>
            Meeting with your company to understand the needs and values that
            you have!
          </li>
          <li>Gathering and presenting the list of candidates!</li>
          <li>
            Setting you up to meet with the candidates that you found most
            interesting!
          </li>
          <li>Contract negotiations and leadership evaluations!</li>
          <li>Follow ups after 12 months!</li>
        </ol>
      </div>
      <div class="s2">
        <h1 class="h1">Executive Evaluation</h1>
        <ol>
          <li>
            Customizing the evaluation process and tools that we use according
            to your needs and wishes!
          </li>
          <li>
            Collecting information from the participants with the chosen tools
            (eg. forms and interviews)
          </li>
          <li>Performing leadership evaluation!</li>
          <li>Going through the results together with you!</li>
        </ol>
      </div>
      <div class="s3">
        <h1 class="h1">Custom Service</h1>
        <ul>
          <li>Have something else in mind?</li>
          <li>We can create customized package just for you!</li>
          <li>Contact us and let's figure out how we can help!</li>
        </ul>
      </div>
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
