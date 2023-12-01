import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
// import CardsGoods from '../../components/CardsGoods/CardsGoods';
import GalleryImg from '../../components/GalleryImg';
import Guarantee from "../../components/Guarantee/Guarantee";
import Feedback, {FeedbackPhone } from "../../components/Feedback";

const images = [
  {
    original: "https://thumb.tildacdn.com/tild3339-3035-4133-b339-366561363335/-/resize/284x/-/format/webp/C76A0350_1.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3339-3035-4133-b339-366561363335/-/resize/284x/-/format/webp/C76A0350_1.JPG",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3934-3161-4865-b334-326634313438/-/resize/533x/-/format/webp/IMG_5339.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3934-3161-4865-b334-326634313438/-/resize/533x/-/format/webp/IMG_5339.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3839-3430-4965-b861-316638323539/-/resize/556x/-/format/webp/C76A0355-1_1.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3839-3430-4965-b861-316638323539/-/resize/556x/-/format/webp/C76A0355-1_1.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6137-3566-4634-b431-333664393835/-/resize/443x/-/format/webp/DSC_3971.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6137-3566-4634-b431-333664393835/-/resize/443x/-/format/webp/DSC_3971.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3131-3662-4335-b539-333337663438/-/resize/441x/-/format/webp/IMG_7205.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3131-3662-4335-b539-333337663438/-/resize/441x/-/format/webp/IMG_7205.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3337-3231-4930-a437-626432326461/-/resize/441x/-/format/webp/IMG_7193.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3337-3231-4930-a437-626432326461/-/resize/441x/-/format/webp/IMG_7193.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6534-6633-4661-a266-316537613333/-/resize/553x/-/format/webp/IMG_7195.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6534-6633-4661-a266-316537613333/-/resize/553x/-/format/webp/IMG_7195.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3833-6462-4738-a237-326431306666/-/resize/265x/-/format/webp/2222.png",
    thumbnail: "https://thumb.tildacdn.com/tild3833-6462-4738-a237-326431306666/-/resize/265x/-/format/webp/2222.png",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3930-3131-4630-a263-336262323937/-/resize/553x/-/format/webp/DSC02462-1.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3930-3131-4630-a263-336262323937/-/resize/553x/-/format/webp/DSC02462-1.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
];

const OblicovkaFasadov = () => {
    return (
		<>
			<Header title={'Облицовка фасадов'} />
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

export default OblicovkaFasadov;