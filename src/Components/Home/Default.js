import React from 'react';
import { Container } from 'react-bootstrap';
import MovieHomeBanner from '../Listing/Movies/MoviesBannerInfo';
import MoviesHomeTab from '../Listing/Movies/MoviesHomeTab';
import EventsListSlider from '../Listing/Events/EventsListSlider';
import Footer from '../Footer/Footer';

class HomePage extends React.Component {
    render() {
        return (
            <Container fluid className="p-0">
                <MovieHomeBanner />
                <MoviesHomeTab />
                <EventsListSlider />
                <Footer />
            </Container>
        )
    }
}

export default HomePage;