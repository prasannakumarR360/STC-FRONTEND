import React from 'react';
import Col from 'react-bootstrap/col';
import { Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

class DownloadTicket extends React.Component {
    render() {
        return (
            <Container fluid className="px-70 mt-5">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={12} xl={6} className="p-0 d-none d-lg-block">
                        <Image src="/images/Images/checkout_ GUESTthanks.jpg" alt="DownloadTicket" className="img-fluid w-75 mx-auto d-block" />
                    </Col>
                    <Col xs={12} xl={4}>
                        <h2 className="boldFont">Thank you</h2>
                        <Image src="/images/icons/success.svg" alt="Success" className="img-fluid mt-3" />
                        <p className="text-black mt-3 f-14 mb-1">
                            Your order has been completed. An email has been sent to your  email address with booking details!
                        </p>
                        <input type="button" className="btn primaryBg text-white h-55 text-center mb-3 w-100" id="downloadTicket" value="Download ticket" />
                        <span className="text-black f-14">Share with your friends.</span>
                        <Image src="/images/icons/FBInvite.svg" alt="ShareFB" className="img-fluid ml-3 imdbIcon" />
                        <Image src="/images/icons/TwitInvite.svg" alt="ShareFB" className="img-fluid ml-3 imdbIcon" />
                    </Col>
                </Row>
            </Container>        
        )
    }
}

export default DownloadTicket;