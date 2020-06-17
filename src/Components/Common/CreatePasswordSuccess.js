import React from 'react';
import Col from 'react-bootstrap/col';
import { Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

class CreateNewPasswordSuccess extends React.Component {
    render() {
        return (
            <Container fluid className="px-70 mt-5">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={12} xl={6} className="p-0 d-none d-lg-block">
                        <Image src="/images/Images/Restore_password_inactive.jpg" alt="ResetPasswordSuccess" className="img-fluid w-75 mx-auto d-block" />
                    </Col>
                    <Col xs={12} xl={4}>
                        <h2 className="boldFont hrBorder">Create Password</h2>
                        <Image src="/images/icons/success.svg" alt="Success" className="img-fluid mt-3" />
                        <p className="text-black mt-3 f-14">
                            Your new password has been successfully created.
                            Please use your new password when signing in.
                        </p>
                    </Col>
                </Row>
            </Container>        
        )
    }
}

export default CreateNewPasswordSuccess;