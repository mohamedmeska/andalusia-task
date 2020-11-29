<template>
	<section class="services">
    <div class="container services__container">
      <h2 class="section__title services__title">
        OUR SERVICES
        <span class="section__title--divider"></span>
      </h2>
      <ul class="services__list">
        <li class="services__list--item" v-for="service in services" :key="service.key">
          <template v-if="service.status">
            <div class="services__list--item-icon">
              <img :src="getImgUrl(service.icon)" :alt="service.title" />
            </div>
            <h3>{{service.title}}</h3>
            <p>{{service.description}}</p>
          </template>
        </li>
      </ul>
      <button class="view-more-services" @click="viewMoreServices">VIEW MORE SERVICES</button>
    </div>
  </section>
</template>

<script>
	let services = [
		{
      status: true,
      icon: 'service1',
			title: 'Service one',
			description: 'Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted.'
    },
    {
      status: true,
      icon: 'service2',
			title: 'Service two',
			description: 'Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted.'
    },
    {
      status: true,
      icon: 'service3',
			title: 'Service three',
			description: 'Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted.'
    },
    {
      status: false,
      icon: 'service4',
			title: 'Service four',
			description: 'Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted.'
    },
    {
      status: false,
      icon: 'service5',
			title: 'Service five',
			description: 'Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted.'
    },
    {
      status: false,
      icon: 'service6',
			title: 'Service six',
			description: 'Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted.'
    }
  ]

	export default {
		name: 'Services',
		data: function() {
			return {
				services: services
			}
    },
    methods: {
      getImgUrl(pic) {
        return require('@/assets/images/' + pic + '.png');
      },
			viewMoreServices: function (e) {
				this.services.forEach(service => {
          service.status = true;
          e.target.style.display = 'none';
        });
			}
		}
	}	
</script>