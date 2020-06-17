import React from 'react';
import Col from 'react-bootstrap/Col';
import EventsListingPoster from './EventsListingPoster';
import { Row } from 'react-bootstrap';

class EventsListingPosterInfo extends React.Component {
    constructor() {
        super()

        this.state = {
            EventListInfo: {
                "status": true,
                "message": "success",
                "response": [
                    {
                        "thumbnail": "https://via.placeholder.com/445X219",
                        "title":"f1Race",
                        "location":"Circuit",
                        "eventListId":"f1Race"
                        
                    },
                    {
                        "thumbnail": "https://via.placeholder.com/445X219",
                        "title":"f1Race",
                        "location":"Circuit",
                        "eventListId":"f1Race"
                        
                    },
                    {
                        "thumbnail": "https://via.placeholder.com/445X219",
                        "title":"f1Race",
                        "location":"Circuit",
                        "eventListId":"f1Race"
                        
                    },
                    {
                        "thumbnail": "https://via.placeholder.com/445X219",
                        "title": "longiness",
                        "location": "Circuit",
                        "eventListId": "longiness"
                    }
                ]
            }
        }
    }
    render() {
        return (
            <Row>
                { 
                    this.state.EventListInfo.response.map(({ eventListId, ...restParams }) => (
                        <Col xl={3} className="thumbOnHover" key={eventListId}>
                            <EventsListingPoster key={eventListId} classId="homeEventPosters" {...restParams} />
                        </Col>
                    ))
                }
            </Row>
        )
    }
}

export default EventsListingPosterInfo;