import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/col';
import Image from 'react-bootstrap/Image';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Link } from 'react-router-dom';
import MoviesListing from './MoviesListing';

class MoviesHomeTab extends React.Component {
    render() {
        return (
            <Container fluid className="px-70 my-5">
                <Row>
                    <Col xs={5} xl={5}>
                        <h2 className="boldFont categoryTitle">Movies</h2>
                    </Col>
                    <Col xs={7} xl={7} className="text-right">
                        <Link to="/" className="text-white viewAll mr-2" href="Movies">View All</Link>
                        <Link to="" className="customSwipePrev mr-2">
                            <Image src="images/icons/Next.svg" className="img-fluid prev movDef" />
                        </Link>
                        <Link to="" className="customSwipePrev">
                            <Image src="images/icons/Next.svg" className="img-fluid movDef" />
                        </Link>
                    </Col>
                    <Col xl={12} className="eventsTopEventsTab my-4">
                        <Tabs defaultActiveKey="Now Showing">
                            <Tab eventKey="Now Showing" title="Now Showing">
                                <MoviesListing />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MoviesHomeTab;