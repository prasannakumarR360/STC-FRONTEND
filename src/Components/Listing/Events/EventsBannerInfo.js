import React from 'react';
import 'swiper/swiper.scss';
import 'swiper/css/swiper.css';
import { Navigation, Pagination } from 'swiper/js/swiper.esm';
import Swiper from 'react-id-swiper';
import EventsHomeBanner from './EventsHomeBanner';

import Col from 'react-bootstrap/col';

class EventsBannerInfo extends React.Component  {
    constructor() {
        super()

        this.state = {
            EventsBannerDetails: {
                "status": true,
                "message": "success",
                "response": [
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
                        "path": "https://via.placeholder.com/1920x850?text=Formula-1",
                        "EventBannerId": "Event"
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
                        "path": "https://via.placeholder.com/1920x850?text=Formula-1",
                        "EventBannerId": "Event"
                    }
                ]
            }
        }
    }
    render() {
        const swiperParams = {
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
            <Swiper {...swiperParams} shouldSwiperUpdate>
                {
                    this.state.EventsBannerDetails.response.map(({ EventBannerId, ...restParams }) => (
                        <Col xl={12} key={EventBannerId} className="p-0">
                            <EventsHomeBanner key={EventBannerId} classId="homePosters" {...restParams} />
                        </Col>

                    ))
                }
            </Swiper>
        )
    }
}

export default EventsBannerInfo;