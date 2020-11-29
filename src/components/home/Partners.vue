<template>
  <section class="partners">
    <div class="container pertners__container">
      <h2 class="section__title partners__title">
        GREAT PARTNERS
        <span class="section__title--divider"></span>
      </h2>
      <div class="partners__slider">
        <div class="partners__slider--logos" :class="{'pause_animation': pauseAnimation}" @click="pauseAnimation = !pauseAnimation">
          <div class="partners__slider--logos-logo">
            <img src="@/assets/images/partner1.png" alt="partner1" />
          </div>
          <div class="partners__slider--logos-logo">
            <img src="@/assets/images/partner2.png" alt="partner2" />
          </div>
          <div class="partners__slider--logos-logo">
            <img src="@/assets/images/partner3.png" alt="partner3" />
          </div>
          <div class="partners__slider--logos-logo">
            <img src="@/assets/images/partner4.png" alt="partner4" />
          </div>
          <div class="partners__slider--logos-logo">
            <img src="@/assets/images/partner5.png" alt="partner5" />
          </div>
          <div class="partners__slider--logos-logo">
            <img src="@/assets/images/partner1.png" alt="partner1" />
          </div>
          <div class="partners__slider--logos-logo">
            <img src="@/assets/images/partner2.png" alt="partner2" />
          </div>
          <div class="partners__slider--logos-logo">
            <img src="@/assets/images/partner3.png" alt="partner3" />
          </div>
          <div class="partners__slider--logos-logo">
            <img src="@/assets/images/partner4.png" alt="partner4" />
          </div>
          <div class="partners__slider--logos-logo">
            <img src="@/assets/images/partner5.png" alt="partner5" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Partners",
  data: function() {
    return {
      pauseAnimation: false
    }
  }
};
</script>