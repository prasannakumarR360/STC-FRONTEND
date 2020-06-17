import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import GuestLogin from './GuestLogin';
import BookingInfo from './BookingInfo';
import PaymentInfo from './PaymentInfo';
import StcTicketLogin from './StcTicketLogin';

class CheckoutSummary extends React.Component {
    render() {
        return (
            <Container fluid className="mb-4">
                <Row className="px-70 secondaryBg">
                    <Col lg={12} className="pl-0 py-2">
                        <Image src="/Images/icons/CheckoutArrow.svg" fluid className="flip" />
                        <Image src="/Images/icons/close_Wht.svg" fluid className="headerIcon" />
                    </Col>
                </Row>
                <Row className="px-70 mt-5">
                    <Col lg={6} className="bookingDetails">
                        <BookingInfo />
                        <PaymentInfo />
                    </Col>
                    <Col id="checkOutNav" lg={6} className="px-70">
                        <h2 className="boldFont categoryTitle hrBorder">Checkout</h2>
                        <Tabs className="mt-5" defaultActiveKey="Guest Login" >
                            <Tab eventKey="Guest Login" className="px-0" title="Guest Login">
                                <GuestLogin />
                            </Tab>
                            <Tab eventKey="stc ticket login" className="px-0" title="stc ticket login">
                                <StcTicketLogin />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CheckoutSummary;