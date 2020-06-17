import React from 'react';
import Col from 'react-bootstrap/col';
import { Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
    render() {
        return (
            <Container fluid className="px-70 mt-5">
                <Row className="justify-content-center">
                    <Col xs={12} xl={6} className="p-0 d-none d-lg-block mt-5">
                        <Image src="/images/Images/Sign-In-inactive.jpg" alt="SignIn" className="img-fluid w-75 mx-auto d-block" />
                    </Col>
                    <Col xs={12} xl={4}>
                        <h2 className="boldFont categoryTitle hrBorder">Sign In</h2>
                        <div className="form-group mt-5">
                            <div className="inputs">
                                <input type="text" id="signInEmail" className="inputs__field inputs__field--text" required />
                                <label for="email" className="inputs__label">
                                    EMAIL
                                </label>
                            </div>
                        </div>
                        <div className="form-group pt-1">
                            <div className="inputs">
                                <input type="password" id="password" className="inputs__field inputs__field--text" required />
                                <label for="password" className="inputs__label">
                                    PASSWORD
                                </label>
                            </div>
                        </div>
                        <input type="button" className="btn h-55 boldFont text-center mb-3 w-100 btnDisabled rounded" id="btnSignIn" value="Sign in" />
                        <p className="my-3">
                            <Link to="/CreatePassword" className="text-muted text-underline d-flex justify-content-center align-items-center w-100">Forgot Username / Password?</Link>
                        </p>
                        <p className="text-center my-3 borderTxtLine">or</p>
                        <Link to="" className="w-100 h-55 fb d-flex align-items-center justify-content-center mt-4 font-weight-bold rounded">
                            <img src="images/Icons/facebookSignup.svg" className="socialIconLogo img-fluid ml-2" /> Sign in with Facebook
                        </Link>
                        <Link to="" className="w-100 h-55 google d-flex align-items-center justify-content-center mt-4 font-weight-bold rounded">
                            <img src="images/Icons/GoogleSignup.svg" className="socialIconLogo img-fluid ml-2" /> Sign in with Google
                        </Link>
                        <hr />
                        <a className="d-flex justify-content-center align-items-center">
                            Don't have an account yet?
                        </a>
                        <Link to="/SignUp" className="primaryTxt boldFont d-flex justify-content-center align-items-center mb-4">
                            Sign up now
                        </Link>
                    </Col>
                </Row>
            </Container>        
        )
    }
}

export default SignIn;