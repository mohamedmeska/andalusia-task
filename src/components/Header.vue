<template>
  <header>
    <div class="container header__container">
      <div class="header__logo">
        <router-link :to="`/${$i18n.locale}`" tag="a">
          <img src="@/assets/images/logo.png" alt="Andalusia Logo" />
        </router-link>
      </div>
      <div class="header__nav">
        <nav class="navigation">
          <ul class="main__menu">
            <router-link
              :to="`/${$i18n.locale}`"
              tag="li"
              exact
              class="main__menu--item"
              >{{ $t("nav.home") }}</router-link
            >
            <router-link
              :to="`/${$i18n.locale}/about-us`"
              tag="li"
              class="main__menu--item"
              @click="toggleSubMenu"
            >
              {{ $t("nav.about-us") }}
            </router-link>
            <router-link
              :to="`/${$i18n.locale}/business-units`"
              tag="li"
              class="main__menu--item"
              >{{ $t("nav.business-units") }}</router-link
            >
            <router-link
              :to="`/${$i18n.locale}/projects`"
              tag="li"
              class="main__menu--item"
              >{{ $t("nav.projects") }}</router-link
            >
            <router-link
              :to="`/${$i18n.locale}/partners`"
              tag="li"
              class="main__menu--item"
              >{{ $t("nav.partners") }}</router-link
            >
            <router-link
              :to="`/${$i18n.locale}/media-events`"
              tag="li"
              class="main__menu--item"
              >{{ $t("nav.media-events") }}</router-link
            >
            <router-link
              :to="`/${$i18n.locale}/contacts`"
              tag="li"
              class="main__menu--item"
              >{{ $t("nav.contacts") }}</router-link
            >
            <router-link
              :to="`/${$i18n.locale}/careers`"
              tag="li"
              class="main__menu--item"
              >{{ $t("nav.careers") }}</router-link
            >
          </ul>
        </nav>
        <div class="search">
          <span class="search__icon">
            <fa-icon :icon="['fas', 'search']" />
          </span>
        </div>
        <div class="languages">
          <span class="languages__item" @click.prevent="setLocale(language.locale)">
            <img :src="getImgUrl(language.icon)" :alt="language.alt" />
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: function() {
      return {
          language: {
              locale: 'ar',
              icon: 'arabic-circle-icon',
              alt: 'Arabic'
          },
      }
  },
  methods: {
    getImgUrl(pic) {
        return require('@/assets/images/' + pic + '.png');
    },
    toggleSubMenu: function(e) {
        console.log('wdf');
        console.log(e.target.childNodes);
        e.target.childNodes[0].style.display = 'block';
    },
    setLocale: function (locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });

      if(locale === 'ar') {
          document.body.style.direction = "rtl";

          this.language = {
              locale: 'en',
              icon: 'english-circle-icon',
              alt: 'English'
          }
      } else {
          document.body.style.direction = "ltr";

          this.language = {
              locale: 'ar',
              icon: 'arabic-circle-icon',
              alt: 'Arabic'
          }
      }
    },
  },
};
</script>