import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/col';
import SelectedTickets from './SelectedTickets';

class SelectedTicketsInfo extends React.Component {
	 constructor() {
        super()

        this.state = {
            TicketingInfo: {
                "status": true,
                "message": "success",
                "response": [
                    { 
                        "NumberOfTickets": "4",
                        "TicketsType": "4 Standard Premium",
                        "TicketTypePrice": "BHD 140",
                        "SeatNumber": "",
                        "TotalAmount": "BHD 105",
                        "TicketId": "Standard"
                    }
                ]
            }
        }
    }
	render() {
		return(
            <Container fluid className="bookingDetailsFixed p-0">
                {
                    this.state.TicketingInfo.response.map(({TicketId, ...restParams}) => (
                        <Col xl={12} key={TicketId} className="p-0">
                            <SelectedTickets key={TicketId} classId="TicketInformation" {...restParams}/>
                        </Col>
                    ))
                }
            </Container>	
		)
	}
}

export default SelectedTicketsInfo;