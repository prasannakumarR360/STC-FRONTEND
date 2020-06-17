import React from 'react';
import Col from 'react-bootstrap/col';
import { Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
    render() {
        return (
            <Container fluid className="px-70 mt-5">
                <Row className="justify-content-center">
                    <Col xs={12} xl={6} className="p-0 d-none d-lg-block mt-5">
                        <Image src="/images/Images/Signup_inactive.jpg" alt="SignIn" className="img-fluid w-75 mx-auto d-block" />
                    </Col>
                    <Col xs={12} xl={4}>
                        <h2 className="boldFont categoryTitle hrBorder">Sign Up</h2>
                        <div className="form-group mt-5 mb-3">
                            <div className="inputs">
                                <input type="text" id="signInEmail" className="inputs__field inputs__field--text" required />
                                <label for="name" className="inputs__label">
                                    NAME
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="inputs">
                                <input type="text" id="signUpEmail" className="inputs__field inputs__field--text" required />
                                <label for="myEmail" className="inputs__label">
                                    EMAIL
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="inputs">
                                <input type="password" id="signUpPassword" className="inputs__field inputs__field--text" required />
                                <label for="password" className="inputs__label">
                                    PASSWORD
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="inputs">
                                <input type="password" id="confirmPassword" className="inputs__field inputs__field--text" required />
                                <label for="reEnterPassword" className="inputs__label">
                                    RE-ENTER PASSWORD
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="inputs">
                                <input id="phone" className="inputs__field inputs__field--text w-100" type="tel" name=""  required />
                            </div>
                        </div>
                        <input type="button" className="btn h-55 boldFont text-center mb-3 w-100 btnDisabled rounded" id="btnSignUp" value="Sign Up" />
                        <a className="d-flex justify-content-center align-items-center f-12">
                            By signing up, you agree to stc tickets
                        </a>
                        <a className="d-flex justify-content-center align-items-center f-12 mb-5" href="#">Conditions of Use and Privacy Policy</a>
                        <a className="d-flex justify-content-center align-items-center f-12 boldFont mb-3">
                            Already have an account?
                        </a>
                        <Link to="/SignIn" className="text-underline boldFont d-flex justify-content-center align-items-center mb-4">
                            Sign in
                        </Link>
                    </Col>
                </Row>
            </Container>        
        )
    }
}

export default SignUp;