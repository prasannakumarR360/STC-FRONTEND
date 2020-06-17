import React from 'react';
import Col from 'react-bootstrap/col';
import BookingDetails from './BookingDetails';
import { Row } from 'react-bootstrap';

class BookingInfo extends React.Component {
    constructor() {
        super()

        this.state = {
            BookingInfo: {
                "status": true,
                "message": "success",
                "response": [
                    {
                        "title": "Formula 1 Race - Gulf",
                        "pgRating": "PG15+",
                        "mapMarker": "/images/icons/Location.svg",
                        "location": "Formula 1 Gulf",
                        "datePicker": "/images/icons/Calendar.svg",
                        "selectedDate": "07/07/20",
                        "timer": "/images/icons/Time.svg",
                        "selectedTime": "21.30",
                        "seatSelected": '/images/icons/Seat.svg',
                        "seatNumber": "A1",
                        "BookingId": "Formula 1 Gulf"
                    }
                ]
            }
        }        
    }
    render() {
        return (
            <Row>
                {
                    this.state.BookingInfo.response.map(({ BookingId, ...dataParams }) => (
                        <Col xl={12} key={BookingId} className="p-0">
                            <BookingDetails key={BookingId} classId="BookingSummary" {...dataParams}/>
                        </Col>
                    ))
                }
            </Row>
        )
    }
}

export default BookingInfo;