<template>
  <footer class="container">
    <div class="bg-gradient"></div>
    <div class="section-top">
      <div class="section-top__heading">
        <h1>Let's <br />Connect</h1>
      </div>
      <div class="section-top__btn">
        <a href="https://www.linkedin.com/in/thashrif-nabeel/" target="_blank">
          <button><span>Get in touch</span></button>
        </a>
      </div>
    </div>
    <div class="section-bottom">
      <h3>All Rights Reserved &copy; 2023</h3>
      <h3>Design & Code by Nabeel</h3>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';
@import '../assets/scss/mixins';

footer {
  border-top: 1px solid #ffffff;
  margin-top: 20vh;

  .bg-gradient {
    @include backgroundAnimation($top: 5vw, $left: 40vw, $size: 35rem);
  }

  .section-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30vh 0;

    &__heading {
      h1 {
        font-size: 9rem;
        line-height: 1;
      }
    }

    &__btn {
      top: 5rem;
      right: 10rem;

      @include roundButton($height: 20rem, $width: 20rem, $fontSize: 2rem);
    }
  }

  .section-bottom {
    font-size: 1rem;
    text-transform: uppercase;
    border-top: 1px solid #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3vh 0;
  }
}
</style>