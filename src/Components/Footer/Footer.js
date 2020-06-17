import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class Footer extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row className="px-70 borderTop">
                    <Col xl={12} className="py-5 px-0">
                        <Row>
                            <Col lg={6} md={12} className="mt-4">
                                <h2 className="font-weight-bold">Stay in touch</h2>
                                <p className="textLabel">Signup for newsletter to receive the latest news and event postings.</p>
                                <input type="text" placeholder="Email" className="form-control br-ltb d-inline-block borderInput subscribeInput mt-2" id="sub_email" />
                                <button type="button" className="btn linkBg text-white br-rtb d-inline-block mb-1 position-absolute subscribeRadius mt-2 blinkBtn generalPinkBtn subscribeBtn" id="btnSubscribe">Subscribe</button>
                            </Col>
                            <Col lg={6} md={12} className="text-md-right mt-3 mt-lg-0">
                                <a href="/" className="navbar-brand mr-0 text-dark p-0">
                                    <img src="images/footerLogo.svg" className="img-fluid footerLogo" alt="Footer LOGO" />
                                </a>
                                <p className="mb-2 textLabel f-14">&copy;2020 stc, Inc.All rights reserved.</p>
                                <a className="textLabel f-14" href="terms-conditions.aspx">Terms & Conditions</a>&nbsp;|&nbsp;
							            <a className="textLabel f-14" href="privacy-policy.aspx">Privacy Policy</a>&nbsp;|&nbsp;
                                        <a className="textLabel f-14">Contact Us</a>
                                <p className="mt-2 pt-1 mb-0">
                                    <Image src="images/ic_apple_store.png" className="img-fluid mr-2" alt="App Store" />
                                    <Image src="images/ic_google_app.png" className="img-fluid" alt="Google play" />
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="borderTop px-70 py-4">
                    <Col xs={12} lg={4} className="text-center text-md-left p-0">
                        <a href="#" className="text-dark pr-3 f-14">STC Homepage</a>
                        <a href="#" className="text-dark f-14">Privacy Statement</a>
                    </Col>
                    <Col xs={12} lg={4} className="text-center text-md-left p-0">
                        <Image src="images/poweredby.png" className="img-fluid w-25 mx-auto d-block my-3 my-sm-0" />
                    </Col>
                    <Col xs={12} lg={4} className="text-center text-md-right iconsCenter px-0">
                        <a href="#" className="d-flex d-sm-inline-block">
                            <Image src="images/Icons/FB.svg" className="img-fluid socialIcon" />
                        </a>
                        <a href="#" className="d-flex d-sm-inline-block">
                            <Image src="images/Icons/Twit.svg" className="img-fluid socialIcon" />
                        </a>
                        <a href="#" className="d-flex d-sm-inline-block">
                            <Image src="images/Icons/Insta.svg" className="img-fluid socialIcon" />
                        </a>
                        <a href="#" className="d-flex d-sm-inline-block">
                            <Image src="images/Icons/Youtu.svg" className="img-fluid socialIcon mr-0" />
                        </a>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;