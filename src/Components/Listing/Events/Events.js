import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/col';
import EventsListingBannerInfo from './EventsListingBannerInfo'
import EventListTab from './EventListTab'

class Events extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xl={12} className="p-0">
                        <EventsListingBannerInfo />
                    </Col>
                    <Col xl={12} className="p-0">
                        <EventListTab />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Events;