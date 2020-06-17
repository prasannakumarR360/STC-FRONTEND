import React from 'react';
import Col from 'react-bootstrap/col';
import { Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

class EditProfile extends React.Component {
    render() {
        return (
            <Container fluid className="px-70 mt-5">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={12} xl={6} className="p-0 d-none d-lg-block">
                        <Image src="/images/Images/Edit_profile.jpg" alt="SignIn" className="img-fluid w-75 mx-auto d-block" />
                    </Col>
                    <Col xs={12} xl={4}>
                        <h2 className="boldFont hrBorder">Edit Profile</h2>
                        <div className="form-group mt-5">
                            <div className="inputs">
                                <input type="text" id="editName" className="inputs__field inputs__field--text" required />
                                <label for="editName" className="inputs__label">
                                    NAME
                                </label>
                            </div>
                        </div>
                        <div className="form-group mt-1">
                            <div className="inputs">
                                <input type="text" id="editEmail" className="inputs__field inputs__field--text" required />
                                <label for="email" className="inputs__label">
                                    EMAIL
                                </label>
                            </div>
                        </div>
                        <div className="form-group pt-1">
                            <div className="inputs">
                                <Image src="Images/icons/success.svg" className="img-fluid inputSuccessImg position-absolute d-none" />
                                <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" min="0" id="editPhoneNumber" className="inputs__field inputs__field--text" required />
                                <label for="PhoneNumber" className="inputs__label">
                                    PHONE NUMBER
                                </label>
                            </div>
                        </div>
                        <Link to="/SignUp" className="btnDisabled h-55 boldFont d-flex justify-content-center align-items-center mb-4">
                            Save Changes
                        </Link>
                    </Col>
                </Row>
            </Container>        
        )
    }
}

export default EditProfile;