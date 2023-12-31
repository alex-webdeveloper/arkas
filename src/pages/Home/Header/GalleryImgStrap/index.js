import React, { useState } from 'react';
import './index.scss';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';


const items = [
	{
		src: 'https://thumb.tildacdn.com/tild3433-3636-4464-a664-643463326130/-/format/webp/img_0004241_1.jpg',
		altText: 'Slide 1',
		caption: 'Slide 1',
		key: 1,
	},
	{
		src: 'https://thumb.tildacdn.com/tild6165-3361-4836-b366-633562383339/-/format/webp/WhatsApp_Image_2023-.jpeg',
		altText: 'Slide 2',
		caption: 'Slide 2',
		key: 2,
	},
	{
		src: 'https://thumb.tildacdn.com/tild6337-3335-4439-a438-316163396564/-/resize/668x/-/format/webp/0186_-_16-12_2.jpg',
		altText: 'Slide 3',
		caption: 'Slide 3',
		key: 3,
	},
];

const GalleryImgStrap = (props) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map((item) => {
		return (
			<CarouselItem 
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
				key={item.src}
			>
				<img src={item.src} alt={item.altText} className={'d-block w-100'}/>
			</CarouselItem>
		);
	});

	return (
		<>
			<Carousel
			className={'edit'}
			interval={3000}
			fade={true}
			activeIndex={activeIndex}
			next={next}
			previous={previous}
			>
				<CarouselIndicators
					items={items}
					activeIndex={activeIndex}
					onClickHandler={goToIndex}
				/>
				{slides}
				<CarouselControl
					direction="prev"
					directionText="Previous"
					onClickHandler={previous}
				/>
				<CarouselControl
					direction="next"
					directionText="Next"
					onClickHandler={next}
				/>
			</Carousel>
			</>
	);
}

export default GalleryImgStrap;




