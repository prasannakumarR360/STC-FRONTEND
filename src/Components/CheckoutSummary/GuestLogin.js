import React from 'react';
import Col from 'react-bootstrap/col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

class GuestLogin extends React.Component {
    render() {
        return (
            <Col xl={12} className="p-0">
                <div className="form-group mt-5">
                    <div className="inputs">
                        <input type="text" id="guestName" className="inputs__field inputs__field--text" required />
                        <label for="guestName" className="inputs__label">
                            NAME
                        </label>
                    </div>
                </div>
                <div className="form-group mt-2">
                    <div className="inputs">
                        <input type="text" id="guestEmail" className="inputs__field inputs__field--text" required />
                        <label for="email" className="inputs__label">
                            EMAIL
                        </label>
                    </div>
                </div>
                <div className="form-group pt-1">
                    <div className="inputs">
                        <input type="text" id="phoneNumber" className="inputs__field inputs__field--text" required />
                        <label for="PhoneNumber" className="inputs__label">
                            PHONE NUMBER
                        </label>
                    </div>
                </div>
                <Form>
                    {['checkbox'].map((type) => (
                        <div key={`custom-${type}`} className="mb-3">
                            <Form.Check className="d-inline-block rounded f-14"
                                custom
                                type={type}
                                id={`custom-${type}`}
                                label={`I accept`}
                            />
                            <Link to="/" className="d-inline-block mb-4 pl-1 f-14">Terms & Conditions</Link>
                        </div>
                    ))}
                </Form>
                <div className="col-11 p-0">
                    <input type="button" className="btn h-55 boldFont text-center mb-3 w-100 btnDisabled rounded" id="btnSignIn" value="Proceed to checkout" />
                    <a className="secondaryBg h-55 p-3 position-absolute"><Image src="/Images/icons/CheckoutArrow.svg" /></a>
                </div>
            </Col>    
        )
    }
}

export default GuestLogin;