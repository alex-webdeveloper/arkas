import './About.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col } from 'reactstrap';
import { CardsPages } from '../../components/Сards/Cards';
import { aboutKarer, aboutProizvodstvo } from '../../data';

const About = () => {
	return (
		<>
			<Header title={'О нас'} />
			<main className='main-pages'>
				<Container>
					<h2 className="main-pages__title">«Аркаскамень»</h2>
					<p className='main-pages__sign'>Общество с ограниченной ответственностью</p>
					<div className="main-pages__descr">
						<p className="main-pages__text">
						Камнеобрабатывающее предприятие «Аркаскамень» создано в 1991 году для добычи
						крупных блоков мраморизованного известняка на месторождении «Перевальное» и производства
						облицовочных плит, а также изготовления различных архитектурно-декоративных изделий.
						</p>
						<p className="main-pages__text">
							Наша продукция всегда отличается высочайшим качеством исполнения.
							Этого позволяют добиться квалифицированный персонал и современное оборудование, на котором проходят все этапы обработки мрамора.
						</p>
					</div>
					<CardsPages cards={aboutKarer} />
					<h3 className="main-pages__subtitle">Продукция</h3>
					<div className="main-pages__descr">
						<p className="main-pages__text">
							Камнеобрабатывающее предприятие «БИРЮЗА» на рынке по производству изделий из мрамора уже более 30 лет.
							Всё это время мы совершенствуем техническое оснащение, что позволяет предложить обширный ассортимент продукции из натурального камня:
						</p>
						<Row>
							<Col md='6'>
								<h4 className="main-pages__subtitle-4">Ассортимент</h4>
								<ul className='main-pages__list'>
									<li className='main-pages__item'>Слэбы, толщиной от 20 мм до 50 мм</li>
									<li className='main-pages__item'>Плитка полированная, лощеная, шлифованная</li>
									<li className='main-pages__item'>Плитка колотая и галтованная (брусчатка)</li>
									<li className='main-pages__item'>Мраморные заготовки (полосы и толстомеры)</li>
									<li className='main-pages__item'>Ступени и подступени</li>
									<li className='main-pages__item'>Подоконники и столешницы</li>
									<li className='main-pages__item'>Балясины, тумбы, перила</li>
									<li className='main-pages__item'>Камины</li>
									<li className='main-pages__item'>Различные архитектурные элементы и формы</li>
									<li className='main-pages__item'>Мраморная крошка различных фракций</li>
								</ul>
							</Col>
							<Col md='6'>
								<h4 className="main-pages__subtitle-4">Физико-механические свойства камня:</h4>
								<ul className='main-pages__list'>
									<li className='main-pages__item'>Предел прочности при сжатии в сухом состоянии 74,16 МПа (756,2 кгс/см2)</li>
									<li className='main-pages__item'>Предел прочности при сжатии в насыщенном водой состоянии 73,01 МПа (744,5 кгс/см2)</li>
									<li className='main-pages__item'>Средняя плотность 2,87 г/смЗ</li>
									<li className='main-pages__item'>Водопоглощение 0,25 %</li>
									<li className='main-pages__item'>Коэффициент размягчения 0,98</li>
									<li className='main-pages__item'>Истираемость 0,45 г/см2</li>
									<li className='main-pages__item'>Морозостойкость F150</li>
								</ul>
							</Col>
						</Row>
					</div>
					<h3 className="main-pages__subtitle">Производство</h3>
					<CardsPages cards={aboutProizvodstvo} />
				</Container>
			</main>
			<Footer/>
		</>
	);
}

export default About;