<script>
// import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="container">
    <div class="nav-logo">
      <RouterLink to="/">
        <img alt="Portfolio Hub logo" src="../assets/portfolio-hub-logo.svg" />
      </RouterLink>
    </div>
    <div class="nav-links">
      <RouterLink class="nav-links__link" to="/">Home</RouterLink>
      <RouterLink class="nav-links__link" to="/about">About</RouterLink>
      <RouterLink class="nav-links__link" to="/work">Work</RouterLink>
      <RouterLink class="nav-links__link" to="/gallery">Gallery</RouterLink>
      <RouterLink class="nav-links__link" to="/contact">Contact</RouterLink>
    </div>
  </nav>
</template>


<style lang="scss" scoped>
nav {
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4vh 0;

  .nav-links {
    &__link {
      font-size: 1.8rem;

      &:not(:last-child) {
        margin-right: 3vw;
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        height: 0.5rem;
        width: 0.5rem;
        left: 50%;
        right: 50%;
        margin-top: 0.5rem;
        border-radius: 50%;
        justify-content: center;
        background: #ffffff;
        opacity: 0;
        transition: opacity 150ms ease-in-out;
      }

      &:hover {
        
        &::after {
          opacity: 1;
        }
      }
      
    }
  }
}
</style>