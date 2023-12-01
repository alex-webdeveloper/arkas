import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
// import CardsGoods from '../../components/CardsGoods/CardsGoods';
import GalleryImg from '../../components/GalleryImg';
import Guarantee from "../../components/Guarantee/Guarantee";
import Feedback, { FeedbackPhone } from "../../components/Feedback";

const images = [
  {
    original: "https://thumb.tildacdn.com/tild3338-3631-4636-b263-303563383264/-/resize/250x/-/format/webp/20160823_080109.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3338-3631-4636-b263-303563383264/-/resize/250x/-/format/webp/20160823_080109.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6462-3965-4637-a332-316164396637/-/resize/558x/-/format/webp/IMG_5366.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6462-3965-4637-a332-316164396637/-/resize/558x/-/format/webp/IMG_5366.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3236-3833-4766-b930-373161343933/-/resize/558x/-/format/webp/4.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3236-3833-4766-b930-373161343933/-/resize/558x/-/format/webp/4.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3736-3830-4161-b264-623865653738/-/resize/318x/-/format/webp/1.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3736-3830-4161-b264-623865653738/-/resize/318x/-/format/webp/1.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3938-6266-4931-b162-383633393165/-/resize/530x/-/format/webp/IMG_5345.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3938-6266-4931-b162-383633393165/-/resize/530x/-/format/webp/IMG_5345.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6435-3863-4936-a364-326632346563/-/resize/530x/-/format/webp/IMG_5375.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6435-3863-4936-a364-326632346563/-/resize/530x/-/format/webp/IMG_5375.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3964-3266-4036-b062-393434643563/-/format/webp/5.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3964-3266-4036-b062-393434643563/-/format/webp/5.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3837-3064-4236-a238-306438666132/-/resize/431x/-/format/webp/IMG_5307_1.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3837-3064-4236-a238-306438666132/-/resize/431x/-/format/webp/IMG_5307_1.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6163-6335-4863-b235-666265613538/-/resize/511x/-/format/webp/20160824_121959.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6163-6335-4863-b235-666265613538/-/resize/511x/-/format/webp/20160824_121959.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
];

const TelaVrashcheniya = () => {
    return (
		<>
			<Header title={'Тела вращения'} />
			<main className='main-goods'>
        <GalleryImg items={images} />
        <FeedbackPhone/>
        <Guarantee />
        <Feedback/>
			</main>
			<Footer/>
		</>
	);
}

export default TelaVrashcheniya;