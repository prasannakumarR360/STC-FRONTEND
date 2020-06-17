import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/col';
import Image from 'react-bootstrap/Image';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import EventsListSwiper from './EventsListSwiper';
import { Link } from 'react-router-dom';
import EventsListingPosterInfo from './EventsListingPosterInfo';
import EventsListing from './EventsListing';
import RangeSlider from '../../Common/RangeSlider';
import { Dropdown } from 'react-bootstrap';
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

class EventsListSTab extends React.Component {
    render() {
        return (
            <Container fluid className="px-70 my-5">
                <Row>
                    <Col xs={8} lg={8}>
                        <h2 className="boldFont categoryTitle">Events</h2>
                    </Col>
                    <Col xs={3} lg={3} className="float-right p-0 d-inline-block d-lg-none">
                        <Link to="/" className="text-white viewAll mt-1 mr-2" href="Movies">Filter</Link>
                    </Col>
                    <Col lg={2} className="float-right p-0 d-none d-lg-inline-block">
                        <Dropdown alignRight className="priceRange">
                            <Dropdown.Toggle variant="success" className="bg-transparent text-body border-0 mr-2">
                                Price Range <Image src="/images/icons/Next_D_Blk.svg" className="img-fluid icons ml-2" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <RangeSlider />
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col lg={2} className="p-0 d-none d-lg-inline-block">
                        <Dropdown alignRight className="text-center">
                            <Dropdown.Toggle variant="success" id="EventCategory" className="bg-transparent text-body border-0">
                                Category <Image src="/images/icons/Next_D_Blk.svg" className="img-fluid icons ml-2" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu right>
                                <Dropdown.Item>
                                    <Form>
                                        {['checkbox'].map((type) => (
                                            <div key={`custom-${type}`} className="mb-3">
                                                <Form.Check className="d-inline-block rounded f-14"
                                                    custom
                                                    type={type}
                                                    id={`custom-${type}`}
                                                    label={`Entertainment`}
                                                />
                                            </div>
                                        ))}
                                    </Form>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col xl={12} className="eventsTopEventsTab my-4">
                        <Tabs defaultActiveKey="Top events">
                            <Tab eventKey="Top events" title="Top events">
                                <EventsListingPosterInfo />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default EventsListSTab;