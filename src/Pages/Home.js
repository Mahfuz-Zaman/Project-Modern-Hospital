import React from 'react';
import useAuth from '../hooks/useAuth';
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import { NavLink } from "react-router-dom";
import Bg from "./../assets/images/bg-5.jpg";
import BgM from "./../assets/images/bg-4.jpg";
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../components/Service/Service';
const Home = () => {
    const { services } = useAuth();
    return (
        <div>
            <div
                style={{
                    background: `url(${Bg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    width: "100%",
                }}
            >
                <Container>
                    <div
                        style={{ height: "90vh" }}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <div className="text-center my-5 py-5">
                            <Bounce left cascade>
                                <h1 className="text-warning">We can regret less and be grateful
                                    for what is good in life</h1>
                            </Bounce>
                            <Bounce right cascade>
                                <p className="my-4 text-white fs-5">
                                    Dedicated to Hope, Healing, and Recovery.
                                </p>
                            </Bounce>

                            <Bounce>
                                <NavLink
                                    to="/services"
                                    className=" btn btn-primary fs-5 py-2 px-4"
                                >
                                    Our Medical Services
                                </NavLink>
                            </Bounce>
                        </div>
                    </div>
                </Container>
            </div>

            <div style={{ background: `url(${BgM})`, backgroundAttachment: "fixed" }}>
                <Row>
                    <Col md={6} className="text-warning">
                        <h1>Believe in us, we won’t let you down</h1>
                        <ul>
                            <li>

                                MEDICAL COUNSELING
                                <br />

                                In compliance of the Order of the Hon'ble Supreme Court of India dated 23/03/2012 passed in I.A No. 16/2012 in Civil Appeal No. 1944 of 1993 - Anand S.Biji Vs State of Kerala & Others & vide order dated 09/5/2017 passed in Writ Petition

                            </li>
                            <li>
                                MEDICAL FACILITES
                                <br />
                                Health facilities are places that provide health care. They include hospitals, clinics, outpatient care centers, and specialized care centers, such as birthing centers and psychiatric care centers.
                            </li>
                            <li>
                                PERSONAL SERVICES
                                <br />
                                a 1987 British comedy film directed by Terry Jones and written by David Leland, about the rise of a madam of a suburban brothel which
                            </li>
                            <li>
                                TOP LEVEL DOCTORS
                                <br />
                                Find Usa Doctor List. Search Faster, Better & Smarter at ZapMeta Now! Web, Images & Video. Information 24/7. Wiki, News & More. 100+ Million Visitors. Trusted by Millions. The Complete Overview. Types: pdf, doc, ppt, xls, txt.
                            </li>
                            <li>
                                24 HOURS SERVICES
                                <br />
                                In commerce and industry, 24/7 or 24-7 service (usually pronounced "twenty-four seven") is service that is available at any time and usually, every day

                            </li>
                            <li>
                                DEDICATED PATIENT CARE
                                <br />
                                Implementation of a structured and standardized EHR was associated with 8.5% decrease in time for
                            </li>

                        </ul>
                    </Col>
                    <Col md={6} className="text-center text-warning">
                        <img className="img-fluid mt-5 " src="https://i.ibb.co/18tfDH4/doctor.jpg" alt="" />
                    </Col>
                </Row>
            </div>

            <div className="py-5 bg-dark">
                <div className="text-center">
                    <Slide left>
                        <h1 className="text-warning">Some Of Our Services </h1>
                    </Slide>
                    <Slide right>
                        <h2 className="mb-0 text-warning">
                            Our Strength Is Yours
                        </h2>
                    </Slide>
                </div>
                <Container>
                    <div className="my-5 d-flex flex-wrap justify-content-center">
                        {
                            services.slice(3, 9)?.map(service => <Service
                                key={service.key}
                                service={service}

                            ></Service>)
                        }
                    </div>
                </Container>
            </div>

        </div>
    );
};

export default Home;