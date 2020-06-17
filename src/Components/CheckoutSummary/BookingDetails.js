import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const BookingDetails = ({ classId, title, pgRating, mapMarker, location, datePicker, selectedDate, timer, selectedTime, seatSelected, seatNumber, bookingId }) => (
	<Container fluid className={classId, "p-0"}>
		<Row className="m-0">
			<Col lg={12}>
				<Row>
					<Col lg={12} className="summaryHeader">
						<h2 className="boldFont px-70 py-3">Booking Details</h2>
					</Col>
				</Row>
				<Row className="px-70">
					<Col lg={4} className="my-4">
						<Image src="https://via.placeholder.com/445x220" fluid/>
					</Col>
					<Col lg={8} className="my-4">
						<p className="f-14 my-1 font-weight-bold">{title}</p>
						<p className="f-14 secondaryTxt boldFont">{pgRating}</p>
					</Col>
				</Row>
				<Row className="px-70">
					<Col lg={4}>
						<Image src={mapMarker} className="img-fluid icons" />
						<span className="f-14 pl-2 textLabel">Location</span>
						<p className="text-black f-14 my-1 font-weight-bold">{location}</p>
					</Col>
					<Col lg={4}>
						<Image src={datePicker} className="img-fluid icons" />
						<span className="f-14 pl-2 textLabel">Date</span>
						<p className="text-black f-14 my-1 font-weight-bold">{selectedDate}</p>
					</Col>
					<Col lg={4}>
						<Image src={timer} className="img-fluid icons" />
						<span className="f-14 pl-2 textLabel">Time</span>
						<p className="text-black f-14 my-1 font-weight-bold">{selectedTime}</p>
					</Col>
					<Col lg={12}>
						<Image src={seatSelected} className="img-fluid icons" />
						<span className="f-14 pl-2 textLabel">Seats</span>
						<p className="text-black f-14 my-1 selectedSeat font-weight-bold">{seatNumber}</p>
					</Col>
				</Row>
			</Col>
		</Row>
	</Container>	
)

export default BookingDetails;