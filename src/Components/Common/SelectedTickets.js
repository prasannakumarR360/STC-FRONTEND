import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/col';
import { Link } from 'react-router-dom';

const SelectedTickets = ({ classId, NumberOfTickets, TicketsType, TicketTypePrice, SeatNumber, TotalAmount }) => (
    <Container fluid className={classId, 'secondaryBg'}>
        <Row className="px-70 py-4">
            <Col lg={2} className="p-0">
                <p className="txtLight f-14 mb-1">Number of tickets</p>
                <p className="text-white f-14">{NumberOfTickets}</p>
            </Col>
            <Col lg={3} className="p-0">
                <p className="txtLight f-14 mb-1">Tickets type</p>
                <p className="text-white f-14">{TicketsType} <span className="font-weight-bold">{TicketTypePrice}</span></p>
            </Col>
            <Col lg={2} className="p-0 invisible">
                <p className="txtLight f-14 mb-1">Seats</p>
                <p className="text-white f-14">{SeatNumber}</p>
            </Col>
            <Col lg={2} className="p-0 text-right">
                <p className="txtLight f-14 mb-1">Total Amount</p>
                <p className="text-white f-14 boldFont">{TotalAmount}</p>
            </Col>
            <Col lg={3} className="text-right">
                <Link to="/" className="bannerBtn h-55 text-white">Book event</Link>
            </Col>
        </Row>
    </Container>
)

export default SelectedTickets;