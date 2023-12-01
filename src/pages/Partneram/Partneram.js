import './Partneram.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col, Button} from 'reactstrap';
import builder from './builder.jpg';
import designer from './designer.jpg';
import church from './church.jpg';
import stonecutter from './stonecutter.jpg';
import Guarantee from '../../components/Guarantee/Guarantee';
import Feedback from '../../components/Feedback';

const data = [
	{
		img: builder, title: 'Строителям Организациям',
		subtitle: 'Приглашаем к сотрудничеству строительные организации по всей России:',
		text: ['Поставляем камень напрямую с месторождений', 'Монтируем «под ключ», включая общие строительно-монтажные работы', 'Берём на себя документооборот, как в процессе выполнения, так и при приемке выполненных работ']
	},
	{
		img: designer, title: 'Дизайнерам и Архитекторам',
		subtitle: 'Приглашаем к сотрудничеству дизайнеров, архитекторов, проектировщиков:',
		text: ['Поставляем камень напрямую с месторождений', 'Монтируем «под ключ», включая общие строительно-монтажные работы', 'Берём на себя документооборот, как в процессе выполнения, так и при приемке выполненных работ']
	},
	{	img: church,
		title: 'Объектам культурного наследия и религии', subtitle: 'Приглашаем к сотрудничеству объекты религии и культуры:',
		text: ['Поставляем камень напрямую с месторождений', 'Монтируем «под ключ», включая общие строительно-монтажные работы', 'Берём на себя документооборот, как в процессе выполнения, так и при приемке выполненных работ']
	},
	{	img: stonecutter,
		title: 'Камнеобработчикам', subtitle: 'Приглашаем к сотрудничеству обработчиков камня по всей России:',
		text: ['Поставляем камень напрямую с месторождений', 'Монтируем «под ключ», включая общие строительно-монтажные работы', 'Берём на себя документооборот, как в процессе выполнения, так и при приемке выполненных работ']
	}];

const Partneram = () => {
    return (
		<>
			<Header title={'Партнерам'} />
			<main className="main-partners">
				<Container>
					<Row>
						{data.map(item => (
							<Col className='mb-5' key={item.title} md='6'>
								<div className="main-partners__wrapper">
									<div className='main-partners__img-block'>
										<div className='main-partners__align-block'>
											<h2 className='main-partners__title'>{item.title}</h2>
										</div>
										<img className='main-partners__img' src={item.img} alt={item.title} />
									</div>
									<div className='main-partners__descr'>
										<h3 className='main-partners__subtitle'><strong>{item.subtitle}</strong></h3>
										<ul className="main-partners__list">
											{item.text.map(li => (
												<li className='main-partners__item' key={li}>{li}</li>
											))}
										</ul>
										<Button color={'success'}>
											Презентция
										</Button>
									</div>
								</div>
							</Col>
						))}
					</Row>
				</Container>
				<Guarantee />
				<Feedback/>
			</main>
			<Footer/>
		</>
	);
}

export default Partneram;