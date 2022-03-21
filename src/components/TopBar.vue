<template>
  <div class="top-bar">
    <img class="logo" src="~@/assets/OsavusWhite.png" alt="logo" />
    <ul class="nav-menu-list">
      <li>
        <router-link to="/" class="rl">Home</router-link>
      </li>
      <li>
        <router-link to="/about-us" class="rl">About Us</router-link>
      </li>
      <li>
        <router-link to="/services" class="rl">Services</router-link>
      </li>
      <li>
        <router-link to="/contact" class="rl">Contact</router-link>
      </li>
    </ul>
  </div>
</template>

<script scoped setup></script>

<style lang="scss">
* {
  font-family: "Poppins", sans-serif;
}

.logo {
  position: absolute;
  left: 30px;
  height: 40px;
  margin: 5px;
}

.top-bar {
  height: 50px;
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: hsla(123, 50%, 20%, 1);

  li {
    float: left;
    list-style: none;
    &::after {
      color: grey;
    }
    &:last-child::after {
      content: "";
    }
  }

  a {
    font-weight: bold;
    font-size: 1.5rem;
    color: $text-primary;
    padding: 10px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      text-underline-position: under;
    }

    &.router-link-exact-active {
      color: white;
      text-underline-position: under;
      text-decoration: underline;
    }
  }
}
</style>
