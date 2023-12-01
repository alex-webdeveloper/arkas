import './Home.scss';
import Cards from "../../components/Сards";
import { CardsPages } from "../../components/Сards";
import { Button } from 'reactstrap';
import Header from './Header';
import Footer from '../../components/Footer/Footer';
import CardsGoods from '../../components/CardsGoods/CardsGoods';
import { mramor } from '../../data';
import GalleryImg from '../../components/GalleryImg';
import Feedback, { FeedbackPhone } from '../../components/Feedback';

const nobelius = [
  {
    original: "https://thumb.tildacdn.com/tild6430-3936-4238-b135-366230636636/-/resize/300x/-/format/webp/C76A0333_1.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6430-3936-4238-b135-366230636636/-/resize/300x/-/format/webp/C76A0333_1.JPG",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3934-6636-4834-b364-303232336638/-/resize/276x/-/format/webp/C76A0336_1.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3934-6636-4834-b364-303232336638/-/resize/276x/-/format/webp/C76A0336_1.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6538-6433-4461-a633-313563393461/-/resize/300x/-/format/webp/C76A0350_1.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6538-6433-4461-a633-313563393461/-/resize/300x/-/format/webp/C76A0350_1.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3834-3965-4264-b835-363330373030/-/resize/586x/-/format/webp/C76A0355-1.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3834-3965-4264-b835-363330373030/-/resize/586x/-/format/webp/C76A0355-1.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3765-6663-4034-b833-363466666165/-/resize/515x/-/format/webp/C76A0361.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3765-6663-4034-b833-363466666165/-/resize/515x/-/format/webp/C76A0361.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3738-6235-4137-b237-343264383636/-/resize/294x/-/format/webp/C76A0391_1.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3738-6235-4137-b237-343264383636/-/resize/294x/-/format/webp/C76A0391_1.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6331-3365-4665-b933-383837663337/-/resize/566x/-/format/webp/C76A0396_1.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6331-3365-4665-b933-383837663337/-/resize/566x/-/format/webp/C76A0396_1.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6237-3839-4363-a633-383334653439/-/resize/273x/-/format/webp/C76A0405_1.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6237-3839-4363-a633-383334653439/-/resize/273x/-/format/webp/C76A0405_1.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6533-3630-4137-a136-303363363363/-/resize/586x/-/format/webp/C76A0420.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6533-3630-4137-a136-303363363363/-/resize/586x/-/format/webp/C76A0420.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original:  "https://thumb.tildacdn.com/tild3932-3065-4836-a531-373463663430/-/resize/512x/-/format/webp/DSC02462-1.jpg",
    thumbnail:  "https://thumb.tildacdn.com/tild3932-3065-4836-a531-373463663430/-/resize/512x/-/format/webp/DSC02462-1.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3933-6332-4434-a265-343632353639/-/resize/493x/-/format/webp/DSC02496.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3933-6332-4434-a265-343632353639/-/resize/493x/-/format/webp/DSC02496.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3266-6566-4432-a237-396535363465/-/resize/493x/-/format/webp/DSC02537.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3266-6566-4432-a237-396535363465/-/resize/493x/-/format/webp/DSC02537.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6661-3466-4633-a334-396338386131/-/resize/406x/-/format/webp/DSC02605.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild6661-3466-4633-a334-396338386131/-/resize/406x/-/format/webp/DSC02605.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3035-6262-4338-a637-613466386532/-/resize/604x/-/format/webp/DSC02648.JPG",
    thumbnail: "https://thumb.tildacdn.com/tild3035-6262-4338-a637-613466386532/-/resize/604x/-/format/webp/DSC02648.JPG",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
];
const bathhouse = [
  {
    original: "https://thumb.tildacdn.com/tild6537-3135-4130-b730-373230646230/-/resize/474x/-/format/webp/_1___2.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6537-3135-4130-b730-373230646230/-/resize/474x/-/format/webp/_1___2.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6433-3638-4662-a564-623965623861/-/resize/252x/-/format/webp/_1__.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6433-3638-4662-a564-623965623861/-/resize/252x/-/format/webp/_1__.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6332-3330-4532-b961-636639376564/-/resize/252x/-/format/webp/_1___1.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6332-3330-4532-b961-636639376564/-/resize/252x/-/format/webp/_1___1.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6530-6561-4662-a632-643336623566/-/resize/421x/-/format/webp/162.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6530-6561-4662-a632-643336623566/-/resize/421x/-/format/webp/162.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6335-6163-4838-a462-373639636165/-/resize/533x/-/format/webp/163.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6335-6163-4838-a462-373639636165/-/resize/533x/-/format/webp/163.jpg",
    //  originalWidth: '800px',
    // originalHeight: '300px',
  },
]
const apartment = [
  {
    original: "https://thumb.tildacdn.com/tild3639-3364-4734-b265-353664616264/-/resize/442x/-/format/webp/DSC_3866.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3639-3364-4734-b265-353664616264/-/resize/442x/-/format/webp/DSC_3866.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6166-3961-4538-a139-303133363862/-/resize/442x/-/format/webp/DSC_3867.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6166-3961-4538-a139-303133363862/-/resize/442x/-/format/webp/DSC_3867.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3238-3466-4430-a264-346639373337/-/resize/442x/-/format/webp/DSC_3868.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3238-3466-4430-a264-346639373337/-/resize/442x/-/format/webp/DSC_3868.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3839-6238-4764-a538-346631633463/-/resize/442x/-/format/webp/DSC_3882.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3839-6238-4764-a538-346631633463/-/resize/442x/-/format/webp/DSC_3882.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3436-3638-4235-a536-396536613361/-/resize/442x/-/format/webp/DSC_3885.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3436-3638-4235-a536-396536613361/-/resize/442x/-/format/webp/DSC_3885.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3131-6637-4761-b831-326633646635/-/resize/442x/-/format/webp/DSC_3895.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3131-6637-4761-b831-326633646635/-/resize/442x/-/format/webp/DSC_3895.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3837-3561-4364-b363-383364626561/-/resize/543x/-/format/webp/DSC_3900.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3837-3561-4364-b363-383364626561/-/resize/543x/-/format/webp/DSC_3900.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3039-3533-4662-a333-376238333631/-/resize/543x/-/format/webp/DSC_3915.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3039-3533-4662-a333-376238333631/-/resize/543x/-/format/webp/DSC_3915.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild6134-3535-4236-b965-356363323965/-/resize/288x/-/format/webp/DSC_3928.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild6134-3535-4236-b965-356363323965/-/resize/288x/-/format/webp/DSC_3928.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3034-6636-4264-b236-373564323865/-/resize/288x/-/format/webp/DSC_3943.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3034-6636-4264-b236-373564323865/-/resize/288x/-/format/webp/DSC_3943.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3237-3432-4066-a261-323934643233/-/resize/543x/-/format/webp/DSC_3963.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3237-3432-4066-a261-323934643233/-/resize/543x/-/format/webp/DSC_3963.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
  {
    original: "https://thumb.tildacdn.com/tild3836-3063-4865-a366-393933346161/-/resize/543x/-/format/webp/DSC_3984.jpg",
    thumbnail: "https://thumb.tildacdn.com/tild3836-3063-4865-a366-393933346161/-/resize/543x/-/format/webp/DSC_3984.jpg",
    // originalWidth: '900px',
    // originalHeight: '300px',
  },
]

const Home = () => {

  const handleChange = (e) => {
    const target = e.target;

    const [...arrGal] = target.nextElementSibling.children;
		arrGal.forEach(block => {
      block.classList.remove('main-pages__gallery_active');
			if (block.id === target.value) block.classList.add('main-pages__gallery_active');
		});

	}

	return (
		<>
			<Header />
			<main className="main-home">
				<Cards />
				<section className="block-dark  bg-dark text-light">
					<div className="container">
						<h2 className='block-dark__title'>Наши преимущества</h2>
						<h3 className='block-dark__subtitle'>Quam adipisci velit, sed quia numquam eius modi tempora incidunt!</h3>
						<p className="text-light mb-5">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia est.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, adipisci!</p>
						<Button color={'success'}>
              Позвонить
             </Button>
					</div>
				</section>
				<section className='block-light'>
					<div className="container">
						<h2 className='block-light__title'>Изделия из Мрамора</h2>
						<CardsGoods goods={mramor} modifier={'mramor'} />
					</div>
				</section>
				<section className="block-dark bg-dark text-light">
					<div className="container">
						<h2 className='block-dark__title'>Партнерам</h2>
						<h3 className='block-dark__subtitle'>Quam adipisci velit, sed quia numquam eius modi tempora incidunt!</h3>
						<p className="text-light mb-5">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia est.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, adipisci!</p>
						<Button color={'success'}>
              Позвонить
             </Button>
					</div>
				</section>
				<section className='block-light'>
					<div className="container">
						<h2 className='block-light__title'>Мрамор</h2>
						<CardsGoods goods={mramor} modifier={'mramor'} />
					</div>
        </section>
        <FeedbackPhone/>
				<section className="block-dark  bg-dark text-light">
					<div className="container">
						<h2 className='block-dark__title'>О нас</h2>
						<h3 className='block-dark__subtitle'>Quam adipisci velit, sed quia numquam eius modi tempora incidunt!</h3>
						<p className="text-light mb-5">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia est.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, adipisci!</p>
						<Button color={'success'}>
              Позвонить
            </Button>
					</div>
				</section>
				<section className='block-light'>
					<div className="container">
            <h2 className='block-light__title'>Наши проекты</h2>
            <div className="main-pages__collapse-block">
              <select name='select-gallery' className="main-pages__tabs" defaultValue="nobelius" onChange={handleChange}>
                <option value="nobelius">ЖК Нобелиус</option>
                <option value="bathhouse">Бани Алексеева г. Подольск</option>
                <option value="apartment">Апарт-комплекс Красная стрела</option>
              </select>
							<div className="main-pages__galleries">
								<div id='nobelius' className='main-pages__gallery main-pages__gallery_active'><GalleryImg items={nobelius} /></div>
								<div id='bathhouse' className='main-pages__gallery'><GalleryImg items={bathhouse} /></div>
								<div id='apartment' className='main-pages__gallery'><GalleryImg items={apartment} /></div>
							</div>
							</div>
					</div>
        </section>
        <Feedback/>
			</main>
			<Footer/>
		</>
	)
}

export default Home;