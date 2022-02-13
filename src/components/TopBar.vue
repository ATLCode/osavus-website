<template>
  <nav>
    <div class="top-bar">
      <ul class="nav-menu-list">
        <li class="nav-list-item">
          <router-link to="/" class="rl">Home</router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="/about-us" class="rl">About Us</router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="/services" class="rl">Services</router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="/contact" class="rl">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss">
* {
  font-family: "Poppins", sans-serif;
}

.top-bar {
  position: sticky;
  width: 100vw;
  height: auto;
  background: #1a4e1d;
  font-family: "Poppins", sans-serif;
  padding-bottom: 10px;
  .nav-menu-list {
    list-style: none;
    padding: 0;
    color: white;
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding-top: 5px;
    margin: 0px;

    .nav-list-item {
      &::after {
        content: "";
        width: 0%;
        height: 3px;
        background: #f8f8f8;
        display: block;
        margin: auto;
        transition: 0.5s;
      }
      &:hover::after {
        width: 100%;
      }
    }
  }

  .router-link-exact-active {
    &::after {
      content: "";
      width: 100%;
      height: 3px;
      background: #f8f8f8;
      display: block;
      margin: auto;
    }
  }

  .rl {
    text-decoration: none;
    color: white;
  }
}
</style>
