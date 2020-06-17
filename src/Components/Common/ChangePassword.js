import React from 'react';
import Col from 'react-bootstrap/col';
import { Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

class CreatePassword extends React.Component {
    render() {
        return (
            <Container fluid className="px-70 mt-5">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={12} xl={5} className="p-0 d-none d-lg-block">
                        <Image src="/images/Images/ChangePasswordinactive.jpg" alt="SignIn" className="img-fluid w-75 mx-auto d-block" />
                    </Col>
                    <Col xs={12} xl={4}>
                        <h2 className="boldFont hrBorder">Change Password</h2>
                        <div className="form-group mt-5">
                            <div className="inputs">
                                <input type="text" id="currentPassword" className="inputs__field inputs__field--text" required />
                                <label for="currentPassword" className="inputs__label">
                                    Enter current password
                                </label>
                            </div>
                        </div>
                        <div className="form-group pt-1">
                            <div className="inputs">
                                <input type="password" id="newPassword" className="inputs__field inputs__field--text" required />
                                <label for="Enter new password" className="inputs__label">
                                    Enter new password
                                </label>
                            </div>
                        </div>
                        <div className="form-group pt-1">
                            <div className="inputs">
                                <input type="password" id="confirmNewPassword" className="inputs__field inputs__field--text" required />
                                <label for="Re-Enter new password" className="inputs__label">
                                    Re-enter new password
                                </label>
                            </div>
                        </div>
                        <Link to="/ChangePasswordSuccess" className="btn h-55 boldFont text-center mb-3 w-100 btnDisabled rounded" id="changePassword" value="Change" />
                    </Col>
                </Row>
            </Container>        
        )
    }
}

export default CreatePassword;