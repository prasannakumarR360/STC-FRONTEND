import React from 'react';
import 'swiper/swiper.scss';
import 'swiper/css/swiper.css';
import { Navigation, Pagination } from 'swiper/js/swiper.esm';
import Swiper from 'react-id-swiper';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import MoviesListSwiper from './MoviesListSwiper';

class MoviesListing extends React.Component {
    constructor() {
        super()

        this.state = {
            MovieListInfo: {
                "status": true,
                "message": "success",
                "response": [
                    {
                        "thumbnail": "https://via.placeholder.com/380x475",
                        "effect": "3D",
                        "rating": "7.5",
                        "movieName": "Baaghi-3",
                        "genre": "Action",
                        "duration": "2h 09m(2019)",
                        "MovieListId": "Baaghi"
                    },
                    {
                        "thumbnail": "https://via.placeholder.com/380x475",
                        "effect": "3D",
                        "rating": "7.5",
                        "movieName": "Bloodshot",
                        "genre": "Action",
                        "duration": "2h 09m(2019)",
                        "MovieListId": "BloodShot"
                    }
                ]
            }
        }
    }
    render() {
        const swiperParams = {
            Swiper,
            slidesPerView: 6,
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
                        this.state.MovieListInfo.response.map(({ MovieListId, ...restParams }) => (
                            <Col xl={3} className="p-0" key={MovieListId}>
                                <MoviesListSwiper key={MovieListId} classId="homeMoviePosters" {...restParams} />
                            </Col>
                            ))
                        }
                    </Swiper>
            </Row>
        )
    }
}

export default MoviesListing;