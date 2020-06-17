import React from 'react';
import 'swiper/swiper.scss';
import 'swiper/css/swiper.css';
import { Navigation, Pagination } from 'swiper/js/swiper.esm';
import Swiper from 'react-id-swiper';
import EventsListingBanner from './EventsListingBanner';
import Col from 'react-bootstrap/col';

class EventsListingBannerInfo extends React.Component  {
    constructor() {
        super()

        this.state = {
            EventListingInfo: {
                "status": true,
                "message": "success",
                "response": [
                    {
                        "clock": 'images/Icons/Time.svg',
                        "from": "10:00 AM",
                        "to": "12.00 PM",
                        "datepicker": "/images/icons/Calendar.svg",
                        "eventDate": "20/03/2020",
                        "mapmarker": "images/icons/Location.svg",
                        "location": "Baharin International Circuit",
                        "title": "Formula 1 Gulf Air Bahrain 2020",
                        "titleDsc": "The Formula 1 Gulf Air Bahrain Grand Prix 2020 takes the Kingdom of Bahrain by storm this March 28 to 31 in Sakhir.Combining the very best of international motorsport ",
                        "path": "https://via.placeholder.com/1920x650?text=Formula-1",
                        "EventListingBannerId": "Event"
                    },
                    {
                        "clock": 'images/Icons/Time.svg',
                        "from": "10:00 AM",
                        "to": "12.00 PM",
                        "datepicker": '/images/icons/Calendar.svg',
                        "eventDate": "20/03/2020",
                        "mapmarker": "images/icons/Location.svg",
                        "location": "Baharin International Circuit",
                        "title": "Formula 1 Gulf Air Bahrain 2020",
                        "titleDsc": "The Formula 1 Gulf Air Bahrain Grand Prix 2020 takes the Kingdom of Bahrain by storm this March 28 to 31 in Sakhir.Combining the very best of international motorsport ",
                        "path": "https://via.placeholder.com/1920x650?text=Formula-1",
                        "EventListingBannerId": "F1"
                    }
                ]
            }
        }
    }
    render() {
        const eventParams = {
            Swiper,
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            modules: [Navigation, Pagination],
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: false,
                prevEl: false
            },
        }

        return (
            <Swiper {...eventParams} shouldSwiperUpdate>
                {
                    this.state.EventListingInfo.response.map(({ EventListingBannerId, ...restParams }) => (
                        <Col xl={12} key={EventListingBannerId} className="p-0">
                            <EventsListingBanner key={EventListingBannerId} classId="EventListingPosters" {...restParams} />
                        </Col>

                    ))
                }
            </Swiper>
        )
    }
}

export default EventsListingBannerInfo;