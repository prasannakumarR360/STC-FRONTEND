import React from 'react';
import 'swiper/swiper.scss';
import 'swiper/css/swiper.css';
import { Navigation, Pagination } from 'swiper/js/swiper.esm';
import Swiper from 'react-id-swiper';
import MoviesHomeBanner from './MoviesHomeBanner';

import Col from 'react-bootstrap/col';

class MoviesBannerInfo extends React.Component  {
    constructor() {
        super()
    /*    this.state = {
            modalOpen: false
        }

        this.handleModalOpen = () => {
            this.setState((prevState) => {
                return {
                    modalOpen: !prevState.modalOpen
                }
            })
        }*/
        this.state = {
            BannerDetails: {
                "status": true,
                "message": "success",
                "response": [
                    {
                        "title": "Baaghi 3",
                        "titleDsc": "Ronnie and Vikram are brothers who share an unbreakable bond. On a work trip abroad Vikram gets kidnapped. Ronnie goes on a rampage of destruction to see his brother safe again, even if it means that ",
                        "language": "Hindi",
                        "duration": "2h 44min",
                        "imdbRating":"9/10",
                        "pgRating":"PG 15+",
                        "genres":"Action",
                        "location": "Doha",
                        "date": "15 Feb 2020",
                        "from": "10:00 AM",
                        "to": "12.00 PM",
                        "datepicker": '/images/icons/calendar-white.svg',
                        "clock": 'images/Icons/Time.svg',
                        "mapmarker": "images/icons/marker-white.svg",
                        "path": "https://via.placeholder.com/1920x850?text=Baaghi-3",
                        "BannerId": "Baaghi"
                    },
                    {
                        "title": "Blood Shot",
                        "titleDsc": "Based on the bestselling comic book, Vin Diesel stars as Ray Garrison, a soldier recently killed in action and brought back to life as the superhero Bloodshot by the RST corporation. ",
                        "language": "English",
                        "duration": "2h 08min",
                        "imdbRating": "7/10",
                        "pgRating": "PG 15+",
                        "genres": "Action",
                        "location": "Doha",
                        "date": "15 Feb 2020",
                        "from": "10:00 AM",
                        "to": "12.00 PM",
                        "datepicker": '/images/icons/calendar-white.svg',
                        "clock": '/images/icons/clock-white.svg',
                        "mapmarker": "images/icons/marker-white.svg",
                        "path": "https://via.placeholder.com/1920x850?text=Bloodshot",
                        "BannerId": "Blood"
                    }
                ]
            }
        }
    }

    render() {
        const bannerParams = {
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
            <Swiper {...bannerParams}>
                {
                    this.state.BannerDetails.response.map(({ BannerId, ...restParams }) => (
                        <Col xl={12} key={BannerId} className="p-0">
                            <MoviesHomeBanner key={BannerId} classId="homePosters" {...restParams} />
                        </Col>

                    ))
                }
            </Swiper>
        )
    }
}

export default MoviesBannerInfo;