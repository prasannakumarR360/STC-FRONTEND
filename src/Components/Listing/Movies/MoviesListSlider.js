import React from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import MoviesListSwiper from './MoviesListSwiper';

class MoviesListSlider extends React.Component {
    render() {
        return (
            <Container fluid className="px-70 my-5">
                <h2 className="boldFont categoryTitle">Movies</h2>
                <Col xl={12} className="moviesNowShowingTab p-0 my-4">
                    <Tabs defaultActiveKey="Now Showing">
                        <Tab eventKey="Now Showing" title="Now Showing">
                            <MoviesListSwiper />
                        </Tab>
                        <Tab eventKey="topMovies" title="topMovies">
                            <MoviesListSwiper />
                        </Tab>
                    </Tabs>
                </Col>
            </Container>
        )
    }
}

export default MoviesListSlider;