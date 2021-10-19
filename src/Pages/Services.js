import React from 'react';
import { Container } from 'react-bootstrap';
import BgThree from "./../assets/images/bg-3.jpg";
import Slide from "react-reveal/Slide";
import Service from '../components/Service/Service';
import useAuth from '../hooks/useAuth';

const Services = () => {
    const { services } = useAuth();
    return (
        <div className="py-5" style={{ background: `url(${BgThree})`, backgroundAttachment: "fixed" }}>
            <div className="text-center">
                <Slide left>
                    <h1 className="text-warning"> Procedure and Process Treatment Services</h1>
                </Slide>
                <Slide right>
                    <h2 className="mb-0 text-warning">
                        Healing for a better world.
                    </h2>
                </Slide>
            </div>
            <Container>
                <div className="my-5 d-flex flex-wrap justify-content-center">
                    {
                        services.map(service => <Service
                            key={service.key}
                            service={service}

                        ></Service>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Services;