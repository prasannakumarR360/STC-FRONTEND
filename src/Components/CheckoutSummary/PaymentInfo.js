import React from 'react';
import Col from 'react-bootstrap/col';
import PaymentSummary from './PaymentSummary';
import { Row } from 'react-bootstrap';

class BookingInfo extends React.Component {
    constructor() {
        super()

        this.state = {
            PaymentInfo: {
                "status": true,
                "message": "success",
                "response": [
                    {
                        "totalPrice": "140BHD",
                        "serviceCharge": "10BHD",
                        "grandTotal": "150BHD",
                        "amountToPay": "150BHD",
                        "PaymentId": "eventF1"
                    }
                ]
            }
        }        
    }
    render() {
        return (
            <Row>
                {
                    this.state.PaymentInfo.response.map(({ PaymentId, ...inputParams }) => (
                        <Col xl={12} key={PaymentId} className="p-0">
                            <PaymentSummary key={PaymentId} classId="PaymentDetails" {...inputParams}/>
                        </Col>
                    ))
                }
            </Row>
        )
    }
}

export default BookingInfo;