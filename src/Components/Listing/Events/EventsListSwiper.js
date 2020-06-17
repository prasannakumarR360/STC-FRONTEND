import React from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

const EventsListSwiper = ({ classId, title, duration, thumbnail, location }) => (
    <div className={classId, 'imgZoom postion-relative'}>
        <Image src={thumbnail} alt={thumbnail} className="img-fluid" />
        <div className="overlayHover">
            <div className="col-12 p-0 mt-5">
                <Link to="movieListing" className="bannerBtn mr-4">Book ticket</Link>
            </div>
        </div>
        <div className="col-12 posterLineHeight p-0">
            <p className="posterTitle text-truncate mt-1 mb-0 font-weight-bold f-14">{title}</p>
            <p className="text-truncate textLabel mb-0 f-14">{duration}</p>
            <p className="text-truncate textLabel f-14"><Image src="/Images/icons/Time.svg" className="img-fluid mr-2" />{location}</p>
        </div>
    </div>
)

export default EventsListSwiper;