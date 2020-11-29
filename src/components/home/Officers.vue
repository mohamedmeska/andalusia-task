<template>
  <section class="officers">
    <div class="container officers__container">
      <h2 class="section__title officers__title">
        EXECUTIVERS OFFICERS
        <span class="section__title--divider"></span>
      </h2>
      <div class="officers__list">
        <div class="officers__list--active_officer">
          <div class="active_officer__img">
            <img :src="getImgUrl(activeOfficer.img)" :alt="activeOfficer.name" />
          </div>
          <div class="active_officer__info">
            <h3>{{activeOfficer.name}}</h3>
            <span v-if="activeOfficer.role">{{activeOfficer.role}}</span>
            <p>{{activeOfficer.description}}</p>
            <div class="hr"></div>
            <ul class="socials">
              <li><a :href="activeOfficer.socials['facebook']" target="_blank"><fa-icon :icon="['fab', 'facebook-f']" /></a></li>
              <li><a :href="activeOfficer.socials['twitter']" target="_blank"><fa-icon :icon="['fab', 'twitter']" /></a></li>
              <li><a :href="activeOfficer.socials['linkedin']" target="_blank"><fa-icon :icon="['fab', 'linkedin']" /></a></li>
              <li><a :href="activeOfficer.socials['pinterest']" target="_blank"><fa-icon :icon="['fab', 'pinterest']" /></a></li>
            </ul>
          </div>
        </div>
        <ul class="officers__list--menu">
          <li class="officers__list--menu-item" v-for="officer in officers" :key="officer.key" @click="changeActiveOfficer(officer)">
            <img :src="getImgUrl(officer.img)" :alt="officer.name" />
            <h3>{{officer.name}}</h3>
            <span v-if="officer.role">{{officer.role}}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
let officers = [
  {
    img: 'ceo1',
    name: 'Mr. Mohamed AbdelRasoul',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis delectus soluta sapiente repellendus adipisci minus corporis dolores? Voluptate, quae amet? Sapiente iste nisi voluptate in nulla sit adipisci repellat reiciendis?',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      pinterest: '#'
    }
  },
  {
    img: 'ceo2',
    name: 'Dr. Alaa AlGoweini',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis delectus soluta sapiente repellendus adipisci minus corporis dolores? Voluptate, quae amet? Sapiente iste nisi voluptate in nulla sit adipisci repellat reiciendis?',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      pinterest: '#'
    }
  },
  {
    img: 'ceo3',
    name: 'Dr. Walaa Kadry',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis delectus soluta sapiente repellendus adipisci minus corporis dolores? Voluptate, quae amet? Sapiente iste nisi voluptate in nulla sit adipisci repellat reiciendis?',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      pinterest: '#'
    }
  },
  {
    img: 'ceo4',
    name: 'Mr. AbdelHakim GamalElDin',
    role: 'Chief Executive Officer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis delectus soluta sapiente repellendus adipisci minus corporis dolores? Voluptate, quae amet? Sapiente iste nisi voluptate in nulla sit adipisci repellat reiciendis?',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      pinterest: '#'
    }
  }
];

export default {
  name: "Officers",
  data: function() {
    return {
      officers: officers,
      activeOfficer: {
        img: 'ceo1',
        name: 'Mr. Mohamed AbdelRasoul',
        role: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis delectus soluta sapiente repellendus adipisci minus corporis dolores? Voluptate, quae amet? Sapiente iste nisi voluptate in nulla sit adipisci repellat reiciendis?',
        socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          pinterest: '#'
        }
      }
    }
  },
  methods: {
      getImgUrl: function(pic) {
        return require('@/assets/images/' + pic + '.png');
      },
      changeActiveOfficer: function(item) {
        this.activeOfficer = item;
      }
		}
};
</script>