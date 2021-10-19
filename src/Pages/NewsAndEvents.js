import React from 'react';
import { Col, FormControl, InputGroup, Row, Button, Container } from 'react-bootstrap';

const NewsAndEvents = () => {
    return (
        <div className="bg-dark text-white">

            <InputGroup className=" w-50 mx-auto">
                <FormControl
                    placeholder="Search article"

                />
                <Button variant="warning" >
                    Search
                </Button>
            </InputGroup>
            <Container>
                <Row xs={1} md={2} className="py-5"  >
                    <Col>
                        <div>
                            <h4>We serves you</h4>
                            <ul>
                                <li>Blood Bank</li>
                                <li>Day Care</li>
                                <li>Vaccination</li>
                                <li>Emergency</li>
                            </ul>
                        </div>
                        <div>
                            <div><img className="img-fluid py-3" src="https://i.ibb.co/CbVzdJK/1.jpg" alt="" /></div>
                            <div>
                                <h1>HOSPITAL SIGNS MOU WITH ROYAL FREE INTERNATIONAL FOR FUTURE COLLABORATION</h1>
                                <p>n 12th November 2019, a Memorandum of Understanding was signed between United Hospital and Royal Free International which is part of the Royal Free London NHS Foundation Trust. It is the first instance in Bangladesh where a Bangladeshi Hospital has signed an agreement with a British Hospital within NHS network. Royal Free Hospital, Barnet Hospital, and Chase Farm Hospital are part of the Royal Free London NHS Foundation Trust. </p>
                                <br />
                                <button className="btn btn-warning">Read More</button>
                            </div>
                            <div><img className="img-fluid py-3" src="https://i.ibb.co/k5bvd6Z/2.jpg" alt="" /></div>
                            <div>
                                <h1>HOSPITAL OBSERVED WORLD HEART DAY</h1>
                                <p>The theme of World Heart Day for the year 2019 is “My heart, Your heart”. Like every year, United Hospital observed World Heart Day this year in befitting manner by conducting Free Health Check-up in a health check booth at hospital lobby.  More than 500 patients and their family member’s availed free check up throughout the day. Mohammad Faizur Rahman, Chief Executive Officer United Hospital Limited, Dr. Jahangir Kabir,</p>
                                <br />
                                <button className="btn btn-warning">Read More</button>
                            </div>
                            <div><img className="img-fluid py-3" src="https://i.ibb.co/FhG2x65/3.jpg" alt="" /></div>
                            <div>
                                <h1>CORPORATE MEDICAL SERVICES AGREEMENT SIGNING CEREMONY BETWEEN ASIATIC 3SIXTY & UNITED HOSPITAL LIMITED</h1>
                                <p>UNITED HOSPITAL LIMITED
                                    Recently Modern Hospital Limited signed a Corporate Medical Services Agreement with ASIATIC 3sixty. Under this agreement Staffs and their dependents of ASIATIC 3sixty may avail special healthcare facilities at United Hospital Limited. Sara Zaker, Vice Chairperson of ASIATIC 3sixty and Dr. Shagufa Anwar.</p>
                                <br />
                                <button className="btn btn-warning">Read More</button>
                            </div>

                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h4>Some Extra Facilities</h4>
                            <ul>
                                <li>Prayer Room</li>
                                <li>Online Payment Information</li>
                                <li>Pharmacy</li>
                                <li>MORTUARY</li>
                            </ul>
                        </div>
                        <div>
                            <div><img className="img-fluid py-3" src="https://i.ibb.co/Chnp9QB/4.jpg" alt="" /></div>
                            <div>
                                <h1>HOSPITAL TOUCHES MILESTONE OF 13TH YEAR OF HEALTH SERVICE</h1>
                                <p>Hospital Limited, the 500 bedded international standard multidisciplinary Hospital in Gulshan Dhaka commemorated its 13th Anniversary on 24th August 2019. The day started by recitation from holy Quraan after Fazr prayers. Patients who are admitted in the hospital were greeted with flowers and get-well wish card. CEO of the hospital Mr. Mohammad Faizur Rahman inaugurated a free health check-up booth at the hospital lobby in presence of hospital Consultants,</p>
                                <br />
                                <button className="btn btn-warning">Read More</button>
                            </div>
                            <div><img className="img-fluid py-3" src="https://i.ibb.co/mhbQGg7/5.jpg" alt="" /></div>
                            <div>
                                <h1>SCIENTIFIC SEMINAR ON "DRUGS AND KIDNEY DISEASE” AT UNITED HOSPITAL SEMINAR HALL</h1>
                                <p>Hospital Limited organized a Scientific Seminar on “Drugs and Kidney Disease” on 14th March, Thursday 2019 at the Hospital’s Seminar Hall. Dr. Tanveer Bin Latif, Consultant, Nephrology delivered the introductory speech. Dr. Elena Haque, Specialist, Nephrology Department & Dr. Salina Akter, Specialist, Nephrology Department of United Hospital delivered speech on mention topic. Prof. Dr. Taimor Nawaz, Consultant – Internal Medicine, Dr. Tanveer Bin Latif, Consultant – Nephrology & Dr. Tania Mahbub.</p>
                                <br />
                                <button className="btn btn-warning">Read More</button>
                            </div>
                            <div><img className="img-fluid py-3" src="https://i.ibb.co/GcsKS9x/6.jpg" alt="" /></div>
                            <div>
                                <h1>PATIENT FORUM WITH CANCER SURVIVORS AT MODERN HOSPITAL</h1>
                                <p>World Cancer Day is observed globally on 4 February every year; to commemorate the day United Hospital organized a Patient Forum with Cancer Survivors on 3rd February. I am & I will, with this theme, Consultants of United Hospital Cancer Centre Dr Ashim Kumar Sen Gupta, Dr Rashid un Nabi and Dr Saumen Basu expressed their pledge in the program to the cancer patients that they are not alone.</p>
                                <br />
                                <button className="btn btn-warning">Read More</button>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsAndEvents;









