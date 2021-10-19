import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BgThree from "./../assets/images/bg-3.jpg";
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';

const Details = () => {
    const { key } = useParams();
    const { services } = useAuth();
    const matchingService = services.find((service) => service.key === Number(key));
    return (<div className="text-white" style={{ background: `url(${BgThree})`, backgroundAttachment: "fixed" }}>
        {matchingService?.title ? (
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md={6}>
                        <img className="img-fluid" src={matchingService.img} alt="" />
                    </Col>
                    <Col md={6} className="d-flex justify-content-center flex-column">
                        <h2>{matchingService.title}</h2>
                        <h5>{matchingService.desc}</h5>
                        <Row>
                            <Col>
                                <h1>Visit:{matchingService.visit}$</h1>
                            </Col>
                            <Col>
                                <div className="text-center">
                                    <img
                                        width="120px"
                                        src={matchingService.dThumb}
                                        alt=""
                                    />
                                    <h3>{matchingService.specialist}</h3>
                                    <h5>{matchingService.category}</h5>
                                    <p className="mb-0">From Our Modern Hospital </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        ) : (
            <div >
            </div>
        )}
    </div>
    );
};

export default Details;