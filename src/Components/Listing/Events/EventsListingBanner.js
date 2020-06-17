import React from 'react';
import Image from 'react-bootstrap/Image';


const EventsListingBanner = ({ classId, title, titleDsc, datepicker, eventDate, clock, from, to, location, mapmarker,  path }) => (
    <div className={classId}>
        <div class="bannerShade"></div>
        <Image src={path} alt={path} className="img-fluid" />
        <div className="overlay">
            <div className="col-12 p-0">
                <p className="text-white mb-1"><Image src={clock} className="mr-2"/> {from} - {to}</p>
                <p className="text-white mb-1"><Image src={datepicker} className="mr-2" />{eventDate}</p>
                <p className="text-white mb-1"><Image src={mapmarker} className="mr-2"/>{location}</p>
                <p className="text-white movieTitle mt-3"> {title}</p>
                <p>
                    <span className="pr-2 d-inline-flex align-items-center text-white">{titleDsc}</span>
                </p>
                <div className="col-12 p-0 mt-5">
                    <a className="bannerBtn mr-4">Book ticket</a>
                    <a className="bannerBtnTrailer">Play trailer <Image src="./images/icons/PlayTrailer.svg" className="ml-4" alt="Play trailer" /></a>
                </div>
            </div>
        </div>
     </div>
)

export default EventsListingBanner;