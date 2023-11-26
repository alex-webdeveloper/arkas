import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
// import CardsGoods from '../../components/CardsGoods/CardsGoods';
import GalleryImg from '../../components/GalleryImg';

const images = [
  {
    original: "https://thumb.tildacdn.com/tild3361-6132-4739-b339-363763306139/-/resize/478x/-/format/webp/Untitled-8_1.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3361-6132-4739-b339-363763306139/-/resize/478x/-/format/webp/Untitled-8_1.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3661-6231-4366-a335-646335663839/-/resize/463x/-/format/webp/IMG_2134.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3661-6231-4366-a335-646335663839/-/resize/463x/-/format/webp/IMG_2134.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6235-6234-4336-b762-346361303632/-/resize/463x/-/format/webp/_MG_7053.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6235-6234-4336-b762-346361303632/-/resize/463x/-/format/webp/_MG_7053.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6632-3831-4164-a635-386464656331/-/resize/480x/-/format/webp/IMG_1547.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6632-3831-4164-a635-386464656331/-/resize/480x/-/format/webp/IMG_1547.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6464-3236-4239-b931-346539623939/-/resize/536x/-/format/webp/IMG_4280.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6464-3236-4239-b931-346539623939/-/resize/536x/-/format/webp/IMG_4280.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3431-6531-4565-b639-313436636266/-/resize/360x/-/format/webp/IMG_0717.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3431-6531-4565-b639-313436636266/-/resize/360x/-/format/webp/IMG_0717.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3234-3865-4334-b261-313434643633/-/resize/534x/-/format/webp/IMG_0853.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3234-3865-4334-b261-313434643633/-/resize/534x/-/format/webp/IMG_0853.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3663-6533-4538-b632-353065623237/-/resize/536x/-/format/webp/IMG_1215.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3663-6533-4538-b632-353065623237/-/resize/536x/-/format/webp/IMG_1215.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3031-6135-4633-b863-333437383733/-/resize/533x/-/format/webp/25112011001000.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3031-6135-4633-b863-333437383733/-/resize/533x/-/format/webp/25112011001000.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
];

const StolyStoleshnicy = () => {
    return (
		<>
			<Header title={'Столы, столешницы'} />
			<main className='main-goods'>
				<GalleryImg items={images} />
			</main>
			<Footer/>
		</>
	);
}

export default StolyStoleshnicy;