import React from 'react';
import Col from 'react-bootstrap/col';
import { Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

class ForgotPassword extends React.Component {
    render() {
        return (
            <Container fluid className="px-70 mt-5">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={12} xl={6} className="p-0 d-none d-lg-block">
                        <Image src="/images/Images/Forgotpassword_inactive.jpg" alt="SignIn" className="img-fluid w-75 mx-auto d-block" />
                    </Col>
                    <Col xs={12} xl={4}>
                        <h2 className="boldFont hrBorder">Reset Password</h2>
                        <div className="form-group mt-5">
                            <div className="inputs">
                                <input type="text" id="signUpEmail" className="inputs__field inputs__field--text" required />
                                <label for="email" className="inputs__label">
                                    EMAIL
                                </label>
                            </div>
                        </div>
                        <input type="button" className="btn h-55 boldFont text-center mb-3 w-100 btnDisabled rounded" id="btnResetPassword" value="Reset" />
                    </Col>
                </Row>
            </Container>        
        )
    }
}

export default ForgotPassword;