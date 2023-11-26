import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import CardsGoods from '../../components/CardsGoods/CardsGoods';
import { stupeni } from '../../data';
import GalleryImg from '../../components/GalleryImg';

// const images = [
// 	{
// 	id: 1,
// 	name: "Island",
// 	src: "https://thumb.tildacdn.com/tild3438-6339-4165-b135-373637386662/-/resize/298x/-/format/webp/IMG_0040.jpg"
// 	},
// 	{
// 	id: 2,
// 	name: "Forest",
// 	src: "https://thumb.tildacdn.com/tild6238-6136-4064-b265-626139613065/-/resize/539x/-/format/webp/2bb721f604ee0e5a61c7.jpg"
// 	},
// 	{
// 	id: 3,
// 	name: "Whale",
// 	src: "https://thumb.tildacdn.com/tild3639-3161-4338-a136-313533393666/-/resize/539x/-/format/webp/IMG_0021-2.jpg"
// 	},
// 	{
// 	id: 4,
// 	name: "Mountain",
// 	src: "https://thumb.tildacdn.com/tild3235-6435-4062-b865-633731343737/-/resize/580x/-/format/webp/IMG_0022-2.jpg"
// 	},
// 	{
// 	id: 5,
// 	name: "Boat",
// 	src: "https://thumb.tildacdn.com/tild6536-3765-4134-a463-323730373761/-/resize/408x/-/format/webp/7b4cb99b-52d9-4138-b.JPG"
// 	},
// 	{
// 	id: 6,
// 	name: "Flowers",
// 	src: "https://thumb.tildacdn.com/tild3339-6231-4530-a638-393361333861/-/resize/566x/-/format/webp/11.JPG"
// 	},
// 	{
// 	id: 7,
// 	name: "Fire",
// 	src: "https://thumb.tildacdn.com/tild3862-6239-4937-a632-396130383363/-/resize/566x/-/format/webp/43.jpg"
// 	},
// 	{
// 	id: 8,
// 	name: "Garden",
// 	src: "https://thumb.tildacdn.com/tild6562-6437-4963-b639-323739343238/-/format/webp/IMG_0023-2_1.jpg"
// 	},
// 	{
// 	id: 9,
// 	name: "Bridge",
// 	src: "https://thumb.tildacdn.com/tild6332-3832-4237-a365-643638356232/-/resize/580x/-/format/webp/28009b306c8a57f5d4fd.jpg"
// 	},
// 	{
// 	id: 10,
// 	name: "Bridge",
// 	src: "https://thumb.tildacdn.com/tild6235-3832-4934-a336-393065623933/-/resize/400x/-/format/webp/7b4edd52c97511d5e3a2.jpg"
// 	},
// 	{
// 	id: 11,
// 	name: "Bridge",
// 	src: "https://thumb.tildacdn.com/tild3865-3935-4537-a637-616165393533/-/resize/480x/-/format/webp/89ff88a1987127f01545.jpg"
// 	},
// 	{
// 	id: 12,
// 	name: "Bridge",
// 	src: "https://thumb.tildacdn.com/tild3530-6531-4435-a238-643139376136/-/resize/400x/-/format/webp/fc464be2cfe9ad84be68.jpg"
// 	},
// 	{
// 	id: 13,
// 	name: "Bridge",
// 	src: "https://thumb.tildacdn.com/tild3634-3464-4033-b533-323563636365/-/resize/400x/-/format/webp/IMG_5363.JPG"
// 	},
// 	{
// 	id: 14,
// 	name: "Bridge",
// 	src: "https://thumb.tildacdn.com/tild3538-6264-4866-b462-326130646439/-/resize/600x/-/format/webp/IMG_2267.JPG"
//    }
// ];

const images = [
  {
    original: "https://thumb.tildacdn.com/tild3438-6339-4165-b135-373637386662/-/resize/298x/-/format/webp/IMG_0040.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3438-6339-4165-b135-373637386662/-/resize/298x/-/format/webp/IMG_0040.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6238-6136-4064-b265-626139613065/-/resize/539x/-/format/webp/2bb721f604ee0e5a61c7.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6238-6136-4064-b265-626139613065/-/resize/539x/-/format/webp/2bb721f604ee0e5a61c7.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3639-3161-4338-a136-313533393666/-/resize/539x/-/format/webp/IMG_0021-2.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3639-3161-4338-a136-313533393666/-/resize/539x/-/format/webp/IMG_0021-2.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3235-6435-4062-b865-633731343737/-/resize/580x/-/format/webp/IMG_0022-2.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3235-6435-4062-b865-633731343737/-/resize/580x/-/format/webp/IMG_0022-2.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6536-3765-4134-a463-323730373761/-/resize/408x/-/format/webp/7b4cb99b-52d9-4138-b.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6536-3765-4134-a463-323730373761/-/resize/408x/-/format/webp/7b4cb99b-52d9-4138-b.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3339-6231-4530-a638-393361333861/-/resize/566x/-/format/webp/11.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3339-6231-4530-a638-393361333861/-/resize/566x/-/format/webp/11.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3862-6239-4937-a632-396130383363/-/resize/566x/-/format/webp/43.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3862-6239-4937-a632-396130383363/-/resize/566x/-/format/webp/43.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6562-6437-4963-b639-323739343238/-/format/webp/IMG_0023-2_1.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6562-6437-4963-b639-323739343238/-/format/webp/IMG_0023-2_1.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6332-3832-4237-a365-643638356232/-/resize/580x/-/format/webp/28009b306c8a57f5d4fd.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6332-3832-4237-a365-643638356232/-/resize/580x/-/format/webp/28009b306c8a57f5d4fd.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6235-3832-4934-a336-393065623933/-/resize/400x/-/format/webp/7b4edd52c97511d5e3a2.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6235-3832-4934-a336-393065623933/-/resize/400x/-/format/webp/7b4edd52c97511d5e3a2.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original:  "https://thumb.tildacdn.com/tild3865-3935-4537-a637-616165393533/-/resize/480x/-/format/webp/89ff88a1987127f01545.jpg",
    thumbnail:  "https://thumb.tildacdn.com/tild3865-3935-4537-a637-616165393533/-/resize/480x/-/format/webp/89ff88a1987127f01545.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3530-6531-4435-a238-643139376136/-/resize/400x/-/format/webp/fc464be2cfe9ad84be68.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3530-6531-4435-a238-643139376136/-/resize/400x/-/format/webp/fc464be2cfe9ad84be68.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3634-3464-4033-b533-323563636365/-/resize/400x/-/format/webp/IMG_5363.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3634-3464-4033-b533-323563636365/-/resize/400x/-/format/webp/IMG_5363.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3538-6264-4866-b462-326130646439/-/resize/600x/-/format/webp/IMG_2267.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3538-6264-4866-b462-326130646439/-/resize/600x/-/format/webp/IMG_2267.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  }
];

const LestnicyStupeni = () => {
    return (
		<>
			<Header title={'Лестницы, ступени'} />
			<main className='main-goods'>
				{/* <h2 className="main-goods__title">Ступени</h2> */}
        <CardsGoods goods={stupeni} />
				<GalleryImg items={images} />
			</main>
			<Footer/>
		</>
	);
}

export default LestnicyStupeni;