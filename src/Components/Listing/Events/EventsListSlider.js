import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import EventsListing from './EventsListing';

class EventsListSlider extends React.Component {
    render() {
        return (
            <Container fluid className="px-70 my-5">
                <Row>
                    <Col xs={8} xl={8} className="p-0">
                        <h2 className="boldFont categoryTitle">Events</h2>
                    </Col>
                    <Col xs={4} xl={4} className="text-right p-0">
                        <a class="text-white viewAll" href="Movies">View All</a>
                    </Col>
                    <Col xl={12} className="eventsTopEventsTab p-0 my-4">
                        <Tabs defaultActiveKey="Top events">
                            <Tab eventKey="Top events" title="Top events">
                                <EventsListing />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default EventsListSlider;