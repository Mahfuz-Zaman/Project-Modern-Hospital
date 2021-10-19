import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import BgTwo from "./../assets/images/bg-2.jpg";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
const About = () => {
    return (
        <div
            style={{ background: `url(${BgTwo})`, backgroundAttachment: "fixed" }}
            className="py-5"
        >
            <Container>
                <Zoom>
                    <h2 className="text-center text-info mb-4">
                        Dedicated to Hope, Healing, and Recovery.
                    </h2>
                </Zoom>
                <Row>
                    <Col md className="pe-3">
                        <Bounce bottom>
                            <h5 className="text-warning ">About Us</h5>
                            <p className="text-white">
                                The academic faculty has very highly qualified teachers and the attached hospital Is a most modern and standard one, well equipped with all the updated facilities. All these will help the students to gain knowledge, skill and attitude to deal with the health problems of the community and make their basic a very sound for future training and higher studies
                            </p>
                            <p className="text-white">
                                The doctor‑patient ratio is still far from adequate in this country of more than 160 million people. Along with the government initiative, private entrepreneurs have also come forward to establish medical colleges and hospitals and have made commendable progress in this field. The Government of Bangladesh has rightly prescribed some strict criteria, principles and guidelines to standardize the private medical colleges.
                            </p>
                        </Bounce>
                    </Col>
                    <Col md className="pe-3">
                        <Bounce bottom>
                            <h5 className="text-warning">Our Vision</h5>
                            <p className="text-white">
                                This college and hospital has been designed to provide broad based education and professional Development for the medical students.The academic faculty has very highly qualified teachers and the attached hospital Is a most modern and standard one, well equipped with all the updated facilities.
                            </p>
                            <h5 className="text-warning">Our Mission</h5>
                            <p className="text-white">
                                All these will help the students to gain knowledge, skill and attitude to deal with the health problems of the community and make their basic a very sound for future training and higher studies.Medical College was established In 2003, fulfilling all the guidelines and criteria set up by the Ministry of Health and Family Welfare, Bangladesh Medical & Dental Council and University of Dhaka. The government has been pleased to give permission for admission of 50 students In first year MBBS course from the session 2003‑2004 Now the admission capacity Is 145 from last session.
                            </p>
                        </Bounce>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col md>
                        <Bounce bottom>
                            <h5 className="text-warning">Sign up for Our latest News</h5>
                            <p className="text-white">
                                Be the first to know about news and updates.We never share you
                                mail with others. Stay with us!
                            </p>
                        </Bounce>
                    </Col>
                    <Col md className="d-flex align-items-center">
                        <Bounce bottom>
                            <Form className="w-100">
                                <Form.Label className="text-warning">
                                    Leave your mail below
                                </Form.Label>
                                <Form.Group
                                    className="d-flex text-white"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Control
                                        style={{ background: "transparent", color: "white" }}
                                        className="py-2 rounded-0"
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                    <button
                                        style={{ width: "120px" }}
                                        className="btn  btn-warning"
                                    >
                                        SIGN UP
                                    </button>
                                </Form.Group>
                            </Form>
                        </Bounce>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
