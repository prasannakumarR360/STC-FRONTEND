import React, { useState, useEffect} from 'react';
import Col from 'react-bootstrap/col';
import ReadMore from './ReadMore';

class MoviesInfo extends React.Component {
    constructor() {
        super()

        this.state = {
            MovieInfo: {
                "status": true,
                "message": "success",
                "response": [
                    {
                        "title": "Baaghi 3",
                        "titleDsc": "Ronnie and Vikram are brothers who share an unbreakable bond. On a work trip abroad Vikram gets kidnapped. Ronnie goes on a rampage of destruction to see his brother safe again, even if it means that ",
                        "language": "Hindi",
                        "duration": "2h 44min",
                        "imdbRating": "9/10",
                        "pgRating": "PG 15+",
                        "genres": "Action",
                        "location": "Doha",
                        "date": "15 Feb 2020",
                        "from": "10:00 AM",
                        "to": "12.00 PM",
                        "datepicker": '/images/icons/calendar-white.svg',
                        "clock": 'images/Icons/Time.svg',
                        "mapmarker": "images/icons/marker-white.svg",
                        "poster": "https://via.placeholder.com/380x475?text=Baaghi-3",
                        "MovieId": "Baaghi"
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
                        "imdb": '/images/icons/imdb.png',
                        "datepicker": '/images/icons/calendar-white.svg',
                        "clock": '/images/icons/clock-white.svg',
                        "mapmarker": "images/icons/marker-white.svg",
                        "poster": "https://via.placeholder.com/380x475?text=Bloodshot",
                        "MovieId": "Blood"
                    }
                ]
            }
        }
    }
   
    render() {
        return (
                this.state.MovieInfo.response.map(({ MovieId, ...restParams }) => (
                    <Col xl={12} key={MovieId} className="p-0">
                        <ReadMore key={MovieId} classId="moviePoster" {...restParams} />
                    </Col>
                ))
        )
    }
}

export default MoviesInfo;