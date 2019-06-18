import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './style.css';

export default () => (
	<OwlCarousel
		loop
		center
		// animateOut="flipInX"
		// animateIn="flipInX"
		animateOut="pulse"
		animateIn="pulse"
		items={1}
		className="owl-theme"
		smartSpeed={450}
	>
		<div class="item">
			<img src="assets/img/banner1.jpg" />
		</div>
		<div class="item">
			<img src="assets/img/banner2.jpg" />
		</div>
	</OwlCarousel>
);
