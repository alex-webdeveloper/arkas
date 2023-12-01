import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import CardsGoods from '../../components/CardsGoods/CardsGoods';
import { plitka, bruschatka } from '../../data';
import GalleryImg from '../../components/GalleryImg';
import Guarantee from "../../components/Guarantee/Guarantee";
import Feedback, {FeedbackPhone} from "../../components/Feedback";

const images = [
  {
    original: "https://thumb.tildacdn.com/tild6634-3562-4438-b239-383530323030/-/resize/442x/-/format/webp/DSC_3944.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6634-3562-4438-b239-383530323030/-/resize/442x/-/format/webp/DSC_3944.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3034-3862-4630-b761-666638303263/-/resize/442x/-/format/webp/DSC_4021.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3034-3862-4630-b761-666638303263/-/resize/442x/-/format/webp/DSC_4021.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6261-3437-4963-a466-316566313961/-/resize/442x/-/format/webp/DSC_3986.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6261-3437-4963-a466-316566313961/-/resize/442x/-/format/webp/DSC_3986.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6163-3764-4832-a363-326364376262/-/resize/443x/-/format/webp/DSC_7827.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6163-3764-4832-a363-326364376262/-/resize/443x/-/format/webp/DSC_7827.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6332-3934-4965-a166-376265656136/-/resize/441x/-/format/webp/IMG_1517.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6332-3934-4965-a166-376265656136/-/resize/441x/-/format/webp/IMG_1517.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6331-3136-4062-b030-666661356464/-/resize/443x/-/format/webp/DSC_7788.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6331-3136-4062-b030-666661356464/-/resize/443x/-/format/webp/DSC_7788.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6534-6637-4430-a130-336239376634/-/resize/442x/-/format/webp/DSC_44641_.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6534-6637-4430-a130-336239376634/-/resize/442x/-/format/webp/DSC_44641_.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3862-6366-4632-b261-623530333263/-/resize/442x/-/format/webp/DSC_44381_1.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3862-6366-4632-b261-623530333263/-/resize/442x/-/format/webp/DSC_44381_1.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3766-3263-4731-a133-323462303863/-/resize/442x/-/format/webp/DSC_44361.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3766-3263-4731-a133-323462303863/-/resize/442x/-/format/webp/DSC_44361.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6335-3666-4465-b037-336337353539/-/resize/427x/-/format/webp/IMG_1515.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6335-3666-4465-b037-336337353539/-/resize/427x/-/format/webp/IMG_1515.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original:  "https://thumb.tildacdn.com/tild3230-6436-4038-b663-643835663839/-/resize/427x/-/format/webp/IMG_1508.jpg",
    thumbnail:  "https://thumb.tildacdn.com/tild3230-6436-4038-b663-643835663839/-/resize/427x/-/format/webp/IMG_1508.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3537-3530-4137-b535-346466666466/-/resize/471x/-/format/webp/CremaGrey_2.png",
    thumbnail: "https://thumb.tildacdn.com/tild3537-3530-4137-b535-346466666466/-/resize/471x/-/format/webp/CremaGrey_2.png",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3734-3562-4636-a239-613164636333/-/resize/600x/-/format/webp/IMG_7573.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3734-3562-4636-a239-613164636333/-/resize/600x/-/format/webp/IMG_7573.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3965-6636-4238-b137-623563306161/-/resize/418x/-/format/webp/_.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3965-6636-4238-b137-623563306161/-/resize/418x/-/format/webp/_.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  }
];

const PlitkaBruschatka = () => {
    return (
		<>
			<Header title={'Плитка, брусчатка'} />
			<main className='main-goods'>
				<h2 className="main-goods__title">Плитка</h2>
				<CardsGoods goods={plitka} />
				<h2 className="main-goods__title">Брусчатка</h2>
				<CardsGoods goods={bruschatka} />
        <GalleryImg items={images} />
        <FeedbackPhone/>
        <Guarantee />
        <Feedback/>
			</main>
			<Footer/>
		</>
	);
}

export default PlitkaBruschatka;