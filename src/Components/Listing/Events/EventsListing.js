import React from 'react';
import 'swiper/swiper.scss';
import { Navigation, Pagination } from 'swiper/js/swiper.esm';
import Swiper from 'react-id-swiper';
import Col from 'react-bootstrap/Col';
import EventsListSwiper from './EventsListSwiper';
import { Row } from 'react-bootstrap';

class EventsListing extends React.Component {
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
                        "title": "longiness",
                        "location": "Circuit",
                        "eventListId": "longiness"
                    }
                ]
            }
        }
    }
    render() {
        const swiperParams = {
            Swiper,
            slidesPerView: 4,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: false,
                prevEl: false
            },
            breakpoints: {
                640: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            }
        }
        return (
            <Row>
                    <Swiper {...swiperParams} shouldSwiperUpdate>
                        { 
                            this.state.EventListInfo.response.map(({ eventListId, ...restParams }) => (
                                <Col xl={3} className="p-0 thumbOnHover" key={eventListId}>
                                    <EventsListSwiper key={eventListId} classId="homeEventPosters" {...restParams} />
                                </Col>
                            ))
                        }
                    </Swiper>
            </Row>
        )
    }
}

export default EventsListing;