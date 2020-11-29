<template>
  <section class="news">
    <div class="container news__container">
      <h2 class="section__title news__title">
        RECENT NEWS
        <span class="section__title--divider"></span>
      </h2>
      <ul class="news__list">
        <li class="news__list--item" v-for="post in news" :key="post.key">
          <div class="news__list--item-img">
            <img :src="getImgUrl(post.img)" :alt="post.title" />
          </div>
          <div class="news__list--item-info">
            <h3>{{post.title}}</h3>
            <span>{{post.date}}</span>
            <p>{{post.shortDescription}}</p>
            <router-link :to="post.slug" tag="a" class="read_more">Read more</router-link>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
let news = [
  {
    img: 'new1',
    title: 'How to Improve Your Sales Volume',
    date: '23 AUG, 2018',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teminc ididunt ut labore et dolore.',
    slug: 'How-to-Improve-Your-Sales-Volume'
  },
  {
    img: 'new2',
    title: 'How to Improve Your Sales Volume',
    date: '23 AUG, 2018',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teminc ididunt ut labore et dolore.',
    slug: 'How-to-Improve-Your-Sales-Volume'
  },
  {
    img: 'new3',
    title: 'How to Improve Your Sales Volume',
    date: '23 AUG, 2018',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teminc ididunt ut labore et dolore.',
    slug: 'How-to-Improve-Your-Sales-Volume'
  }
]

export default {
  name: "News",
  data: function () {
    return {
      news: news
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('@/assets/images/' + pic + '.png');
    }
  }
};
</script>