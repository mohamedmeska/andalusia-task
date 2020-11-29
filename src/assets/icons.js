import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch, faAngleUp, faAngleDown, faWalking, faCog, faUserFriends, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faGooglePlusG, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons'

library.add(faSearch, faAngleUp, faAngleDown, faWalking, faCog, faUserFriends, faMapMarkerAlt, faFacebookF, faTwitter, faGooglePlusG, faLinkedin, faPinterest)
 
Vue.component('fa-icon', FontAwesomeIcon)