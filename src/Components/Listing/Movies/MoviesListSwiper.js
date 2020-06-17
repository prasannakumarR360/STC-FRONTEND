import React from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

const MoviesListSwiper = ({ classId, effect, rating, thumbnail, movieName, genre, duration }) => (
    <div className={classId}>
        <div className="col-12 position-absolute">
            <p className="text-white boldFont posterRating">{effect}</p>
            <p className="text-white float-right"><Image src="images/icons/Star.svg" className="icons mr-2" />{rating}</p>
        </div>
        <Image src={thumbnail} alt={thumbnail} className="img-fluid posterMovie" />
        <div className="overlayHover d-md-flex">
            <div className="col-12 p-0">
                <div className="col-12 p-0 mt-5">
                    <Link to="movieListing" className="bannerBtn mr-4">Book ticket</Link>
                    <Link to="" className="playTrailer btnTrailer mt-2">Play trailer <Image src="./images/icons/PlayTrailer.svg" className="ml-2" alt="Play trailer" /></Link>
                </div>
            </div>
        </div>
        <div className="col-12 posterLineHeight p-0">
            <p className="posterTitle text-truncate mt-1 mb-0 font-weight-bold">{movieName}</p>
            <p className="text-truncate textLabel mb-0 f-14">{genre}</p>
            <p className="text-truncate textLabel f-14"><Image src="/Images/icons/Time.svg" className="img-fluid mr-2" />{duration}</p>
        </div>
    </div>
)

export default MoviesListSwiper;