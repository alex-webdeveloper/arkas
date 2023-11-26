import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
// import CardsGoods from '../../components/CardsGoods/CardsGoods';
import GalleryImg from '../../components/GalleryImg';

const images = [
  {
    original: "https://thumb.tildacdn.com/tild3335-3063-4566-a562-326664363262/-/format/webp/B-104.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3335-3063-4566-a562-326664363262/-/format/webp/B-104.JPG",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6434-3036-4563-b339-636632303538/-/format/webp/_.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6434-3036-4563-b339-636632303538/-/format/webp/_.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3764-3564-4334-a430-316537316461/-/format/webp/_.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3764-3564-4334-a430-316537316461/-/format/webp/_.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6630-3062-4365-a365-356264396537/-/format/webp/__.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6630-3062-4365-a365-356264396537/-/format/webp/__.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3866-3733-4532-a332-306334346363/-/format/webp/Untitled-8.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3866-3733-4532-a332-306334346363/-/format/webp/Untitled-8.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3433-6466-4633-b038-613163323535/-/format/webp/_MG_6968.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3433-6466-4633-b038-613163323535/-/format/webp/_MG_6968.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6530-3231-4965-a338-633364366235/-/resize/420x/-/format/webp/___2.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6530-3231-4965-a338-633364366235/-/resize/420x/-/format/webp/___2.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6434-6335-4466-b432-633365343666/-/format/webp/_29.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6434-6335-4466-b432-633365343666/-/format/webp/_29.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3938-6665-4963-b337-346437393766/-/resize/409x/-/format/webp/DarkGrey_4.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3938-6665-4963-b337-346437393766/-/resize/409x/-/format/webp/DarkGrey_4.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original:  "https://thumb.tildacdn.com/tild3063-6538-4961-b764-616435643962/-/resize/458x/-/format/webp/_.jpg",
    thumbnail:  "https://thumb.tildacdn.com/tild3063-6538-4961-b764-616435643962/-/resize/458x/-/format/webp/_.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3864-6665-4433-b237-306330336163/-/resize/469x/-/format/webp/_.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3864-6665-4433-b237-306330336163/-/resize/469x/-/format/webp/_.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3038-3035-4433-a664-633663323437/-/resize/469x/-/format/webp/M-652.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3038-3035-4433-a664-633663323437/-/resize/469x/-/format/webp/M-652.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3231-6437-4635-a464-386239623262/-/resize/464x/-/format/webp/Legioner.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3231-6437-4635-a464-386239623262/-/resize/464x/-/format/webp/Legioner.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6133-6431-4436-a264-356266633165/-/resize/442x/-/format/webp/IMG_5719.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6133-6431-4436-a264-356266633165/-/resize/442x/-/format/webp/IMG_5719.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
];
const KaminyPortaly = () => {
    return (
		<>
			<Header title={'Камины, порталы'} />
			<main className='main-goods'>
				<GalleryImg items={images} />
			</main>
			<Footer/>
		</>
	);
}

export default KaminyPortaly;