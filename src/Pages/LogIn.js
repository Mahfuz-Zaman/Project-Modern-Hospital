import React from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import BgThree from "./../assets/images/bg-3.jpg";
import useAuth from '../hooks/useAuth';
import "./../assets/LogIn.css"
import { NavLink } from 'react-router-dom';

const LogIn = () => {
    const { AllContexts } = useAuth()
    const { signInWithGoogle, signInWithGithub, signInWithEmail, setUser, setError, getEmail, error, getPassword } = AllContexts;
    const history = useHistory();

    const location = useLocation();
    const redirect = location?.state?.from || "/home";
    return (

        <div className="text-center text-white" style={{ background: `url(${BgThree})`, backgroundAttachment: "fixed" }}>
            <h2 className="text-warning">Login</h2>
            <p className=" mt-2">Login with registered Email & Password</p>
            <p className="text-danger text-center">{error}</p>
            <div className="w-25 mx-auto">
                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        signInWithEmail()
                            .then((result) => {
                                setUser(result.user);
                                history.push(redirect);
                            })
                            .catch((err) => {
                                setError(err.message);
                            });
                    }}
                >
                    <Row>
                        <Col className="text-start">
                            <Form.Label htmlFor="email" visuallyHidden>
                                Your Email Address
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <FormControl
                                    onBlur={getEmail}
                                    type="email"
                                    autoComplete="current-email"
                                    id="email"
                                    placeholder="Enter your email address"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col className="text-start">
                            <Form.Label htmlFor="password" visuallyHidden>
                                Your Password
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <FormControl
                                    onBlur={getPassword}
                                    type="password"
                                    autoComplete="current-password"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <button type="submit" className="btn btn-primary mt-2 w-100">
                        Login
                    </button>
                </Form>
            </div>
            <p className="mt-2">
                <NavLink className="text-decoration-none" to="/signup">
                    Need an Account? Please Sign up!
                </NavLink>
            </p>

            <br />
            <div className='signIn-btn-custom '>

                <button onClick={() => {
                    signInWithGoogle()
                        .then((result) => {
                            setUser(result.user);
                            history.push(redirect);
                        })
                        .catch((err) => {
                            setError(err.message);
                        });
                }} className='singInBtn m-2'>Google Sing In</button>

                <button onClick={() => {
                    signInWithGithub()
                        .then((result) => {
                            setUser(result.user);
                            history.push(redirect);
                        })
                        .catch((err) => {
                            setError(err.message);
                        });
                }} className='singInBtn m-2'> Github Sing In</button>
            </div>
        </div>



    );
};

export default LogIn;
