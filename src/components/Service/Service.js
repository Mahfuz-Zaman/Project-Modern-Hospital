import React from 'react';
import { Card } from 'react-bootstrap';
import Zoom from "react-reveal/Zoom";
import { NavLink } from 'react-router-dom';

const Service = ({ service }) => {
    const { key, img, title, desc, visit } = service;

    return (<Zoom>
        <Card className="m-2 " lg={4} md={6} style={{ width: "18rem" }}>
            <Card.Img variant="top" className="img-fluid" src={img} />
            <Card.Body className="my-1 py-1">
                <Card.Title>{title}</Card.Title>
                <Card.Text>{desc}</Card.Text>
            </Card.Body>
            <Card.Body className="my-1 py-1">
                <h4>visit: {visit}$</h4>
            </Card.Body>
            <Card.Body className="my-1 py-1">

            </Card.Body>
            <Card.Body className="d-flex">
                <NavLink
                    to={`/services/${key}`}
                    className="btn btn-primary w-100 me-1"
                >
                    View Details
                </NavLink>
            </Card.Body>
        </Card>
    </Zoom>
    );
};

export default Service;