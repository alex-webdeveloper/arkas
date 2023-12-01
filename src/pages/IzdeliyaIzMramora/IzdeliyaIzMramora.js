import './IzdeliyaIzMramora.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Guarantee from '../../components/Guarantee/Guarantee';
import Feedback, { FeedbackPhone } from '../../components/Feedback';

const data = [
	{
		url: '/lestnicy-stupeni',
		src: "https://thumb.tildacdn.com/tild6238-6136-4064-b265-626139613065/-/resize/538x/-/format/webp/2bb721f604ee0e5a61c7.jpg",
		title: 'Лестницы, Ступени',
		subtitle: 'Приглашаем к сотрудничеству строительные организации по всей России:',
		text: ['Поставляем камень напрямую с месторождений', 'Монтируем «под ключ», включая общие строительно-монтажные работы', 'Берём на себя документооборот, как в процессе выполнения, так и при приемке выполненных работ']
	},
	{
		url: '/kaminy-portaly',
		src: 'https://thumb.tildacdn.com/tild3866-3733-4532-a332-306334346363/-/format/webp/Untitled-8.jpg',
		title: 'Камины, порталы',
		subtitle: 'Приглашаем к сотрудничеству дизайнеров, архитекторов, проектировщиков:',
		text: ['Поставляем камень напрямую с месторождений', 'Монтируем «под ключ», включая общие строительно-монтажные работы', 'Берём на себя документооборот, как в процессе выполнения, так и при приемке выполненных работ']
	},
	{
		url: '/stoly-stoleshnicy',
		src: 'https://thumb.tildacdn.com/tild3661-6231-4366-a335-646335663839/-/resize/463x/-/format/webp/IMG_2134.JPG',
		title: 'Столы, столешницы',
		subtitle: 'Приглашаем к сотрудничеству объекты религии и культуры:',
		text: ['Поставляем камень напрямую с месторождений', 'Монтируем «под ключ», включая общие строительно-монтажные работы', 'Берём на себя документооборот, как в процессе выполнения, так и при приемке выполненных работ']
	},
	{
		url: '/tela-vrashcheniya',
		src: 'https://thumb.tildacdn.com/tild6163-6335-4863-b235-666265613538/-/resize/511x/-/format/webp/20160824_121959.jpg',
		title: 'Тела вращения',
		subtitle: 'Приглашаем к сотрудничеству обработчиков камня по всей России:',
		text: ['Поставляем камень напрямую с месторождений', 'Монтируем «под ключ», включая общие строительно-монтажные работы', 'Берём на себя документооборот, как в процессе выполнения, так и при приемке выполненных работ']
	},
	{
		url: '/plitka-bruschatka',
		src: 'https://thumb.tildacdn.com/tild3034-3862-4630-b761-666638303263/-/resize/442x/-/format/webp/DSC_4021.jpg',
		title: 'Плитка, брусчатка',
		subtitle: 'Приглашаем к сотрудничеству обработчиков камня по всей России:',
		text: ['Поставляем камень напрямую с месторождений', 'Монтируем «под ключ», включая общие строительно-монтажные работы', 'Берём на себя документооборот, как в процессе выполнения, так и при приемке выполненных работ']
	},
	{
		url: '/oblicovka-fasadov',
		src: 'https://thumb.tildacdn.com/tild3839-3430-4965-b861-316638323539/-/resize/556x/-/format/webp/C76A0355-1_1.jpg',
		title: 'Облицовка фасадов',
		subtitle: 'Приглашаем к сотрудничеству обработчиков камня по всей России:',
		text: ['Поставляем камень напрямую с месторождений', 'Монтируем «под ключ», включая общие строительно-монтажные работы', 'Берём на себя документооборот, как в процессе выполнения, так и при приемке выполненных работ']
	},
	{
		url: '/design',
		src: 'https://thumb.tildacdn.com/tild3533-3265-4834-a662-323539646366/-/resize/424x/-/format/webp/0011.jpg',
		title: 'Индивидуальные решения',
		subtitle: 'Приглашаем к сотрудничеству обработчиков камня по всей России:',
		text: ['Поставляем камень напрямую с месторождений', 'Монтируем «под ключ», включая общие строительно-монтажные работы', 'Берём на себя документооборот, как в процессе выполнения, так и при приемке выполненных работ']
	}
];

const IzdeliyaIzMramora = () => {
    return (
		<>
			<Header title={'Изделия из Мрамора'} />
			<main className="main-product">
				<Container>
					<Row>
						{data.map(item => (
							<Col key={item.title} md='6'>
								<div className="main-product__wrapper">
										<Link to={'/izdeliya-iz-mramora' + item.url}>
											<div className='main-product__align-block'>
												<h2 className='main-product__title'>{item.title}</h2>
											</div>
										</Link>
									<div className="main-product__img-block">
										<img className='main-product__img' src={item.src} alt={item.title} />
									</div>
								</div>
							</Col>
						))}
					</Row>
				</Container>
				<FeedbackPhone/>
				<Guarantee />
				<Feedback/>
			</main>
			<Footer/>
		</>
	);
}

export default IzdeliyaIzMramora;
