<template>
  <section class="statistics">
    <div class="container statistics__container">
      <h2 class="section__title statistics__title">
        STATISTICS
        <span class="section__title--divider"></span>
      </h2>
      <ul class="statistics__list">
        <li class="statistics__list--item">
          <div class="statistics__list--item-icon">
            <fa-icon :icon="['fas', 'walking']" size="2x" />
          </div>
          <h3 class="statistics__list--item-counter" data-target="321570">0</h3>
          <h4 class="statistics__list--item-title">Clients Serviced</h4>
        </li>
        <li class="statistics__list--item">
          <div class="statistics__list--item-icon">
            <fa-icon :icon="['fas', 'cog']" size="2x" />
          </div>
          <h3 class="statistics__list--item-counter" data-target="5140">0</h3>
          <h4 class="statistics__list--item-title">Machines</h4>
        </li>
        <li class="statistics__list--item">
          <div class="statistics__list--item-icon">
            <fa-icon :icon="['fas', 'user-friends']" size="2x" />
          </div>
          <h3 class="statistics__list--item-counter" data-target="61473">0</h3>
          <h4 class="statistics__list--item-title">Qualified Staff</h4>
        </li>
        <li class="statistics__list--item">
          <div class="statistics__list--item-icon">
            <fa-icon :icon="['fas', 'map-marker-alt']" size="2x" />
          </div>
          <h3 class="statistics__list--item-counter" data-target="126">0</h3>
          <h4 class="statistics__list--item-title">Sites</h4>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
let counters = document.querySelectorAll('.statistics__list--item-counter');
let speed = 200; // The lower the slower

counters.forEach((counter, index) => {
	let updateCount = () => {
		let target = Number(counter.getAttribute('data-target'));
		let count = Number(counter.innerText);
    let increment = Math.ceil(target / speed);

		// Check if target is reached
		if (count < target) {
      counter.innerText = count+increment;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});

export default {
  name: "Statistics"
};
</script>