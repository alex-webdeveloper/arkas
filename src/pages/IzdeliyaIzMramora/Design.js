import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
// import CardsGoods from '../../components/CardsGoods/CardsGoods';
import GalleryImg from '../../components/GalleryImg';

const images = [
  {
    original: "https://thumb.tildacdn.com/tild6334-3131-4134-b064-353861353166/-/resize/264x/-/format/webp/23.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6334-3131-4134-b064-353861353166/-/resize/264x/-/format/webp/23.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6362-3432-4038-b639-613562373533/-/resize/452x/-/format/webp/646512441868cac63865.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6362-3432-4038-b639-613562373533/-/resize/452x/-/format/webp/646512441868cac63865.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3434-3035-4431-b065-313330343934/-/resize/429x/-/format/webp/_1___2.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3434-3035-4431-b065-313330343934/-/resize/429x/-/format/webp/_1___2.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6164-6634-4464-b935-626332306334/-/resize/409x/-/format/webp/163.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6164-6634-4464-b935-626332306334/-/resize/409x/-/format/webp/163.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6162-3237-4336-b463-636561383764/-/resize/204x/-/format/webp/cb276efd65b9114fc9d2.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6162-3237-4336-b463-636561383764/-/resize/204x/-/format/webp/cb276efd65b9114fc9d2.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3835-3530-4432-b135-613861373961/-/resize/455x/-/format/webp/20160629_154852.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3835-3530-4432-b135-613861373961/-/resize/455x/-/format/webp/20160629_154852.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3361-3730-4061-b230-303361636632/-/resize/477x/-/format/webp/IMG_2232.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3361-3730-4061-b230-303361636632/-/resize/477x/-/format/webp/IMG_2232.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6136-3835-4330-b363-363762353661/-/resize/425x/-/format/webp/20150129_152024.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6136-3835-4330-b363-363762353661/-/resize/425x/-/format/webp/20150129_152024.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3533-3265-4834-a662-323539646366/-/resize/424x/-/format/webp/0011.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3533-3265-4834-a662-323539646366/-/resize/424x/-/format/webp/0011.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
];

const Design = () => {
    return (
		<>
			<Header title={'Индивидуальные решения'} />
			<main className='main-goods'>
				<GalleryImg items={images} />
			</main>
			<Footer/>
		</>
	);
}

export default Design;