import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import BgOne from "./../assets/images/bg-1.jpg";
import Bounce from "react-reveal/Bounce";
import Wobble from 'react-reveal/Wobble';


const Contact = () => {
    return (
        <div
            style={{ background: `url(${BgOne})`, backgroundAttachment: "fixed" }}
        >
            <ContactForm />
        </div>
    );
};
const formStyle = { background: "transparent", color: "white" };
function ContactForm() {
    return (
        <div style={{ padding: "58px 0 40px" }}>
            <Bounce right>
                <h2 className="text-center text-warning">Contact Us</h2>
            </Bounce>

            <Bounce left>
                <p className=" text-center text-white mb-4 px-5 ">
                    Starting with only one building, Dhaka Medical College now consists of a college building with a new extension, an auditorium, a Nuclear Medicine Centre, male and
                    female dormitories, burn units etc. scattered on about 25 acres of land. In 34
                    different departments and 42 wards - 234 doctors, 140 interns, 560 nurses and
                    1100 other staffs are dedicated to ensure 24-hour health services both in indoor
                    and outdoor. The hospital now consists of about 2300 beds with a new academic and hospital building with a bone marrow transplantation facility rendering services
                    to almost 3500 inpatients every day.


                </p>
            </Bounce>
            <div>
                <Container>
                    <Wobble>
                        <Form>
                            <Row>
                                <Col sm>
                                    <Form.Group
                                        className="mb-3 text-white"
                                        controlId="formBasicText"
                                    >
                                        <Form.Label>Your Name </Form.Label>
                                        <Form.Control
                                            style={formStyle}
                                            type="text"
                                            placeholder="Enter Your Name"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3 text-white"
                                        controlId="formBasicText"
                                    >
                                        <Form.Label>Your address </Form.Label>
                                        <Form.Control
                                            style={formStyle}
                                            type="text"
                                            placeholder="Enter Your address"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm>
                                    <Form.Group
                                        className="mb-3 text-white"
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Label>Your Email </Form.Label>
                                        <Form.Control
                                            style={formStyle}
                                            type="email"
                                            placeholder="Enter Your Email"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3 text-white"
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Label>Emergency Contact No. </Form.Label>
                                        <Form.Control
                                            style={formStyle}
                                            type="text"
                                            placeholder="Enter Your phone no."
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Label className="mb-3 text-white">Short Description Of Your Case: </Form.Label>
                            <Form.Control
                                style={formStyle}
                                className="my-3"
                                type="text"
                                placeholder="Write Your Case..."
                            />
                            <Form.Group
                                className="mb-3 text-white"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Your Messages</Form.Label>
                                <Form.Control
                                    style={formStyle}
                                    placeholder="Write you message..."
                                    as="textarea"
                                    rows={3}
                                />
                            </Form.Group>
                            <Button className="mb-5 px-4" variant="warning" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Wobble>
                </Container>
            </div>
        </div>
    );
}

export default Contact;
