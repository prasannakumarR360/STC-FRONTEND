import React from 'react';
import Col from 'react-bootstrap/Col';
import { Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Dropdown, DropdownButton, ButtonGroup, SplitButton } from 'react-bootstrap';
import DatePickerInfo from '../../Common/DatePickerInfo';
import EventsListingBannerInfo from './EventsListingBannerInfo';
import SelectedTicketsInfo from '../../Common/SelectedTicketsInfo';

class EventsDetails extends React.Component {
    render() {
        return (
            <Container fluid className="p-0">
                <Row>
                    <Col xl={12}>
                        <EventsListingBannerInfo />
                    </Col>
                    <Col xl={6} className="px-70 mt-5">
                        <h2 className="boldFont categoryTitle arTextRight pl-3">Date</h2>
                        <h5 className="txtLight mb-4 arTextRight f-14 spaceWrap pl-3">Choose your preferred date</h5>
                        <DatePickerInfo />
                    </Col>
                    <hr className="hrWidth mt-5" />
                </Row>
                <Row>
                    <Col xl={6} className="px-70 mt-5">
                        <h2 className="boldFont categoryTitle arTextRight pl-3">Time</h2>
                        <h5 className="txtLight mb-4 arTextRight f-14 spaceWrap pl-3">You can choose one type of ticket only</h5>
                        <div className="mb-2 w-100">
                            {[DropdownButton].map((DropdownType, idx) => (
                                <>
                                    <DropdownType
                                        as={ButtonGroup}
                                        size="lg"
                                        title="Select time"
                                        className="dropDownCustom pl-3"
                                    >
                                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                    </DropdownType>{' '}
                                    <Image src="/images/icons/Dropdown.svg" aria-haspopup="true" fluid className="float-right dropDownIcon" />
                                </>
                            ))}
                        </div>
                    </Col>
                    <hr className="hrWidth mt-5" />
                </Row>
                <Row className="px-70 ticketTypeBottom">
                    <Col xl={12}>
                        <h2 className="boldFont categoryTitle arTextRight">Ticket type</h2>
                        <h5 className="txtLight mb-4 arTextRight f-14">You can choose multiple ticket types</h5>
                    </Col>
                    <Col xl={4} className="mt-2 pr-0">
                        <div className="ticketingValue row m-0" >
                            <div className="col-4 px-0 ticketSelect">
                                <a className="primaryTxt px-2 font-weight-bold">-</a>
                                <input type="number" className="primaryTxt font-weight-bold text-md-center pl-3 px-1 py-2 py-sm-0 inputTicket" value="0" readOnly />
                                <a className="primaryTxt font-weight-bold py-2 pr-2 py-sm-0">+</a>
                            </div>
                            <div className="col-8 d-inline p-0 pr-1">
                                <a className="float-right mb-0 f-14 mt-1">Standard<span className="font-weight-bold d-block">(BHD 70)</span></a>
                            </div>
                        </div>
                    </Col>
                    <Col xl={4} className="mt-2">
                        <div className="ticketingValue row m-0" >
                            <div className="col-4 px-0 ticketSelect">
                                <a className="primaryTxt px-2 font-weight-bold">-</a>
                                <input type="number" className="primaryTxt font-weight-bold text-md-center pl-3 px-1 py-2 py-sm-0 inputTicket" value="0" readOnly />
                                <a className="primaryTxt font-weight-bold py-2 pr-2 py-sm-0">+</a>
                            </div>
                            <div className="col-8 d-inline p-0 pr-1">
                                <a className="float-right mb-0 f-14 mt-1">Standard<span className="font-weight-bold d-block">(BHD 70)</span></a>
                            </div>
                        </div>
                    </Col>
                    <Col xl={4} className="mt-2">
                        <div className="ticketingValue row" >
                            <div className="col-4 px-0 ticketSelect">
                                <a className="primaryTxt px-2 font-weight-bold">-</a>
                                <input type="number" className="primaryTxt font-weight-bold text-md-center pl-3 px-1 py-2 py-sm-0 inputTicket" value="0" readOnly />
                                <a className="primaryTxt font-weight-bold py-2 pr-2 py-sm-0">+</a>
                            </div>
                            <div className="col-8 d-inline p-0 pr-1">
                                <a className="float-right mb-0 f-14 mt-1">Standard<span className="font-weight-bold d-block">(BHD 70)</span></a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="m-0">
                    <SelectedTicketsInfo />
                </Row>
            </Container>
        )
    }
}

export default EventsDetails;
