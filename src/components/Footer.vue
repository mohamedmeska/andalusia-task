<template>
	<footer>
        <div class="container footer__container">
            <div class="footer__title">
                <h2>EXPLORE MORE</h2>
            </div>
            <div class="footer__sections">
                <div class="footer__section footer__section1 section__links">
                    <h3 class="footer__section--title">Quick links</h3>
                    <ul class="footer__section--menu">
                        <router-link :to="`/${$i18n.locale}`" tag="li" class="footer__section--menu-item">HOME</router-link>
                        <router-link :to="`/${$i18n.locale}/about-us`" tag="li" class="footer__section--menu-item">ABOUT US</router-link>
                        <router-link :to="`/${$i18n.locale}/careers`" tag="li" class="footer__section--menu-item">CAREERS</router-link>
                        <router-link :to="`/${$i18n.locale}/events`" tag="li" class="footer__section--menu-item">EVENTS</router-link>
                        <router-link :to="`/${$i18n.locale}/news`" tag="li" class="footer__section--menu-item">NEWS</router-link>
                        <router-link :to="`/${$i18n.locale}/contact`" tag="li" class="footer__section--menu-item">CONTACT</router-link>
                    </ul>
                </div>
                <div class="footer__section footer__section2 section__hospitals">
                    <h3 class="footer__section--title">OUR HOSPITALS</h3>
                    <ul class="footer__section--menu">
                        <router-link :to="`/${$i18n.locale}/alshalalat`" tag="li" class="footer__section--menu-item">AL SHALALAT</router-link>
                        <router-link :to="`/${$i18n.locale}/semouha`" tag="li" class="footer__section--menu-item">SEMOUHA</router-link>
                        <router-link :to="`/${$i18n.locale}/antoniades`" tag="li" class="footer__section--menu-item">ANTONIADES</router-link>
                        <router-link :to="`/${$i18n.locale}/maadi`" tag="li" class="footer__section--menu-item">MAADI</router-link>
                        <router-link :to="`/${$i18n.locale}/hai-elgamaa`" tag="li" class="footer__section--menu-item">HAI EL JAMAA</router-link>
                    </ul>
                </div>
                <div class="footer__section footer__section3 section__form__copyright">
                    <h3 class="footer__section--title">NEWS LETTER</h3>
                    <form action="#" method="post" name="newsletter">
                        <input type="email" name="email" placeholder="Email Address" required />
                        <input type="submit" value="SUBSCRIBE NOW">
                    </form>
                    <p class="copyright">
                        Copyright &copy; 2018 - ANDALUSIA GROUP
                    </p>
                    <ul class="socials">
                        <li><a href="#" target="_blank"><fa-icon :icon="['fab', 'facebook-f']" /></a></li>
                        <li><a href="#" target="_blank"><fa-icon :icon="['fab', 'twitter']" /></a></li>
                        <li><a href="#" target="_blank"><fa-icon :icon="['fab', 'google-plus-g']" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
	</footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>