<template>
  <section class="slider">
    <div class="slider__slide">
      <div class="slider__slide--img">
        <img :src="getImgUrl(activeSlide.img)" :alt="activeSlide.title" />
      </div>
      <div class="slider__slide--info">
        <h1>{{activeSlide.title}}</h1>
        <p>{{activeSlide.description}}</p>
        <router-link :to="activeSlide.url" tag="a" class="learn_more">Learn more</router-link>
      </div>
    </div>
    <div class="slider__controls">
      <div class="prev_slide" @click="prevSlide">
        <fa-icon :icon="['fas', 'angle-up']" />
      </div>
      <ul class="slider__controls--dots">
        <li class="slider__controls--dots-dot active" data-index="0" @click="changeSlide"></li>
        <li class="slider__controls--dots-dot" data-index="1" @click="changeSlide"></li>
        <li class="slider__controls--dots-dot" data-index="2" @click="changeSlide"></li>
      </ul>
      <div class="prev_slide" @click="nextSlide">
        <fa-icon :icon="['fas', 'angle-down']" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Slider",
  data: function() {
    return {
      activeSlide: {
        img: 'slide1',
        title: 'We are growing fast do you see.',
        description: 'Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length.',
        url: '#'
      },
      slides: [
        {
          img: 'slide1',
          title: 'We are growing fast do you see.',
          description: 'Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length.',
          url: '#'
        },
        {
          img: 'slide2',
          title: 'Title for slide #2',
          description: 'Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length.',
          url: '#'
        },
        {
          img: 'slide3',
          title: 'Title for slide #3',
          description: 'Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length.',
          url: '#'
        },
      ]
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('@/assets/images/' + pic + '.png');
    },
    checkActiveSlide: function (activeSlideIndex) {
      let dotsControls = document.querySelectorAll('.slider__controls--dots-dot');
      dotsControls.forEach((dotControl, index) => {
        if (index === activeSlideIndex) {
          dotsControls[index].classList.add('active');
        } else {
          dotsControls[index].classList.remove('active');
        }
      });
    },
    changeSlide: function(e) {
      this.activeSlide = this.slides[Number(e.target.getAttribute('data-index'))];
      this.checkActiveSlide(Number(e.target.getAttribute('data-index')));
    },
    prevSlide: function() {
      let activeSlideIndex = document.querySelector('.slider__controls--dots-dot.active').getAttribute('data-index');
      if (activeSlideIndex <= 0) {
        activeSlideIndex = this.slides.length-1
        this.activeSlide = this.slides[activeSlideIndex];
      } else {
        --activeSlideIndex;
        this.activeSlide = this.slides[activeSlideIndex];
      }
      this.checkActiveSlide(activeSlideIndex);
    },
    nextSlide: function() {
      let activeSlideIndex = document.querySelector('.slider__controls--dots-dot.active').getAttribute('data-index');
      if (activeSlideIndex >= (this.slides.length-1)) {
        activeSlideIndex = 0;
        this.activeSlide = this.slides[activeSlideIndex];
      } else {
        ++activeSlideIndex;
        this.activeSlide = this.slides[activeSlideIndex];
      }
      this.checkActiveSlide(activeSlideIndex);
    },
  }
};
</script>