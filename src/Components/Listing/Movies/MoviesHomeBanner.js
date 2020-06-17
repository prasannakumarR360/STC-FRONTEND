import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';
//import ReadMoreModal from '../../Modal/ReadMoreModal.js';  <ReadMoreModal className="d-none" modalOpen={() => this.state.modalOpen()} />

const MoviesHomeBanner = ({ classId, movieId, title, titleDsc, language, duration, imdbRating, pgRating, genres, path }) =>  (
    <div className={classId}>
        <div class="bannerShade"></div>
        <Image src={path} alt={path} className="img-fluid" />
        <div className="overlay">
            <div className="col-12 p-0">
                <p className="text-white boldFont mb-1 mb-lg-2 f-14">Rated: {pgRating}</p>
                <p className="text-white mb-1 mb-lg-2 f-14">Duration: {duration}</p>
                <p className="text-white mb-1 mb-lg-2 f-14"><Image src="./images/icons/imdb.png" className="overlayIcons" alt="Language" /> {imdbRating}, {genres} </p>
                <p className="text-white movieTitle mb-1 mb-lg-2"> {title}</p>
                <p className="mb-1 mb-lg-2">
                <span className="pr-2 align-items-center text-white f-14">{titleDsc}</span>
                <a className="pr-2 d-inline-flex align-items-center primaryTxt boldFont f-14 readMore d-none" onClick={() => this.handleModalOpen()}>READ MORE</a>
                </p>
                <div className="col-12 p-0 mt-2 mt-lg-5">
                    <a className="bannerBtn mr-4">Book ticket</a>
                    <a className="bannerBtnTrailer">Play trailer <Image src="./images/icons/PlayTrailer.svg" className="ml-4" alt="Play trailer" /></a>
                </div>
            </div>
        </div>
    </div>
)

export default MoviesHomeBanner;