import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import Modal from 'react-modal';
import Button from 'react-modal';
import Image from 'react-bootstrap/Image';

class ReadMore extends React.Component {
    render() {
        const [show, setShow] = useState(false);
        return (
            <>
                <Button variant="primary" onClick={() => setShow(true)}>
                    Custom Width Modal
      </Button>
                <Modal show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title" >
                    <Modal.Header className="px-70" closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            <h2>title</h2>
                            <h5>pgRating</h5>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col xl={4}>
                                <Image src='https://via.placeholder.com/445X219' className="img-fluid" />
                            </Col>
                            <Col xl={8}>
                                <p className="text-black f-14">The Formula 1 Gulf Air Bahrain Grand Prix 2020 takes the Kingdom of Bahrain by storm this March 28 to 31 in Sakhir. Combining the very best of international motorsport with top class family entertainment and major international music artists, the race weekend promises Limitless fun and excitement for all those attending.
                                Motorsport
                                This year's Bahrain Grand Prix is the second round of the 2019 FIA Formula 1 World Championship. The 57 lap sprint marks the 999th World Championship race in the history of the top flight. It is being held as part of the landmark 15th season of BIC and it will be the sixth time it is taking place under BICs state of the art floodlights. Aside from Formula 1, the weekend’s programme will also include racing from the FIA Formula 2 Championship and the Porsche GT3 Cup Challenge Middle East.
                                </p>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Row>
                            <Col xl={12} className="float-left">
                                <Col xl={2}>
                                    <p>Duration</p>
                                    <p>20.56min</p>
                                </Col>
                                <Col xl={2}>
                                    <p>Released</p>
                                    <p>20/20/2020</p>
                                </Col>
                                <Col xl={2}>
                                    <p>Rating</p>
                                    <p><Image src="/images/icons/imdb.png" className="img-fluid" /> imdbRating</p>
                                </Col>
                                <Col xl={3}>
                                    <p>Category</p>
                                    <p>genres</p>
                                </Col>
                            </Col>
                            <Col xl={12} className="float-right">
                                <a className="bannerBtnTrailer">Play trailer <Image src="./images/icons/PlayTrailer.svg" className="ml-4" alt="Play trailer" /></a>
                                <a className="bannerBtn mr-4">Book ticket</a>
                            </Col>
                            <Col xl={12} className="borderStripe">
                                <Image src="images/Images/borderImg1.PNG" className="img-fluid" />
                            </Col>
                        </Row>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ReadMore;
