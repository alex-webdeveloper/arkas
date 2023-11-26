import { Card, Row, Col, CardImg, CardTitle, CardBody, CardSubtitle, CardText, Button, Container } from 'reactstrap';
import './CardsGoods.scss';

const CardsGoods = ({ goods, modifier, btn = true}) => {
    
    return (
        <Container>
            <Row className={'cards-goods' + (modifier ? ' cards-goods_' + modifier: "")}>
                {goods.map((card, i) => (
                    <Col key={card.title + i} sm="6" md="4" lg="3">
                        <Card >
                            <div className="cards-goods__overflow">
                                <CardImg
                                    alt={card.title}
                                    src={card.src}
                                    top
                                />
                            </div>
                            <CardBody>
                            <CardTitle tag="h2">
                                {card.title}
                            </CardTitle>
                            <CardText>
                                {card.text}
                            </CardText>
                            {btn && (<Button>
                                        Добавить в корзину
                                    </Button>)}
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default CardsGoods;