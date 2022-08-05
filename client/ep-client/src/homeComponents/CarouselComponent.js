import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./HomeComponents.css"
import Carousel1 from './images/Carousel-1.jpg';
import Carousel2 from './images/Carousel-2.jpg';
import Carousel3 from './images/Carousel-3.jpg';

export default function CarouselComponent() {
return (
	<div style={{ display: 'block', width: 'auto', padding: 10 }}>
	<Carousel>
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100 h-20"
			src={Carousel1}
			alt="Image One"
			height="auto"
		/>
		<Carousel.Caption>
			<h3 className="caption">Exams Simplified</h3>
			<p className="description">A one-stop solution for all your examination needs.</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={500}>
		<img
			className="d-block w-100"
			src={Carousel2}
			alt="Image Two"
		/>
		<Carousel.Caption>
			<h3 className="caption">Student Support</h3>
			<p className="description">Access to all the examination resources and records.</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={500}>
		<img
			className="d-block w-100"
			src={Carousel3}
			alt="Image Two"
		/>
		<Carousel.Caption>
			<h3 className="caption">Teacher Support</h3>
			<p className="description">Create and manage the examination resources easily.</p>
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div>
);
}