import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import BookingInfo from './BookingInfo';
import PaymentSummary from './PaymentSummary';

class UserCheckout extends React.Component {
    render() {
        return (
            <Container className="px-70 my-4">
                <Row className="m-0">
                    <Col xl={6} id="userbookingDetails" className="bookingDetails">
                        <BookingInfo />
                        <div className="borderImg">
                            <Image src="/Images/images/borderImg1.PNG" className="img-fluid" />
                        </div>
                    </Col>
                    <Col xl={6} id="userPaymentSummary" className="px-70">
                        <PaymentSummary />
                        <div className="col-11 p-0">
                            <input type="button" className="btn h-55 boldFont text-center mb-3 w-100 btnDisabled rounded" id="btnSignIn" value="Proceed to checkout" />
                            <a className="secondaryBg h-55 p-3 position-absolute"><Image src="/Images/icons/CheckoutArrow.svg" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>    
        )
    }
}

export default UserCheckout;
