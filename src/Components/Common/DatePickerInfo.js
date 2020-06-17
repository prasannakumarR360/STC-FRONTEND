import React from 'react';
import 'swiper/swiper.scss';
import 'swiper/css/swiper.css';
import { Navigation, Pagination } from 'swiper/js/swiper.esm';
import Swiper from 'react-id-swiper';
import DatePickerCarousel from './DatePickerCarousel';
import Col from 'react-bootstrap/col';

class DatePickerInfo extends React.Component {
    constructor() {
        super()

        this.state = {
            DatePicker: {
                "status": true,
                "message": "success",
                "response": [
                    {
                        "Date": "15",
                        "Month": "Jun",
                        "Day": "Tue",
                        "DateId":"Today"

                    },
                    {
                        "Date": "15",
                        "Month": "Jun",
                        "Day": "Tue",
                        "DateId":"Today"

                    },
                    {
                        "Date": "15",
                        "Month": "Jun",
                        "Day": "Tue",
                        "DateId":"Today"

                    },
                    {
                        "Date": "16",
                        "Month": "Jul",
                        "Day": "Wed",
                        "DateId":"Today"
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
            loop: false,
            navigation: {
                nextEl: false,
                prevEl: false
            },
        }
        return (
                <Swiper {...swiperParams} shouldSwiperUpdate>
                    {
                        this.state.DatePicker.response.map(({ DateId, ...restParams }) => (
                            <Col xl={3} key={DateId} className="datePicker">
                                <DatePickerCarousel key={DateId} classId="selectDate" {...restParams} />
                            </Col>
                        ))
                    }
                </Swiper>
		)
	}
}

export default DatePickerInfo;