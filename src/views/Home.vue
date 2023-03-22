<template>
  <main class="container">
    <section class="hero">
      <div class="hero__bg-gradient"></div>
      <div class="hero__main-text">
        <span class="hero__main-text--line-one animated fadeInUp">Hey!</span>
        <span class="hero__main-text--line-two">I'm Nabeel</span>
      </div>
      <div class="hero__intro-text">
        <span>Welcome to My Portfolio Hub!</span>
        <span>Showcasing my skills, work and hobbies.</span>
      </div>
    </section>

    <section class="about">
      <div class="about__container">
        <div class="about__bg-gradient"></div>
        <div class="about__btn">
          <RouterLink to="/about">
            <button to="/about"><span>About me</span></button>
          </RouterLink>
        </div>
        <div class="about__para">
          <h1>An Artist, who is passionate <br />for Design and Coding.</h1>
        </div>
      </div>
    </section>

    <section class="recent-work">
      <h1 class="recent-work__heading">Recent Work</h1>
      <div class="recent-work__items">
        <div class="recent-work__items--item-one">
          <img src="../assets/images/recent-work-img-one.jpg" alt="recent-work-img">
        </div>
        <div class="recent-work__items--item-two">
          <img src="../assets/images/recent-work-img-two.jpg" alt="recent-work-img">
        </div>
      </div>
    </section>

  </main>
</template>

<style lang="scss" scoped>
</style>
