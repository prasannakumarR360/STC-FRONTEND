import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const PaymentSummary = ({ classId, totalPrice, serviceCharge, grandTotal, amountToPay}) => (
	<Container fluid className={classId, "p-0"}>
		<Row className="mt-5">
			<Col lg={12}>
				<Row className="m-0">
					<Col lg={12} className="summaryHeader">
						<h2 className="boldFont px-70 py-3">Payment Summary</h2>
					</Col>
				</Row>
				<Row id="priceSummary" className="px-70 mt-3">
					<Col lg={7} className="my-2">
						<span className="textLabel f-14">Total Price</span>
					</Col>
					<Col lg={3} className="my-2">
						<p className="f-14 my-1 f-14">{totalPrice}</p>
					</Col>
					<Col lg={7} className="my-2">
						<span className="textLabel f-14">Service Charges</span>
					</Col>
					<Col lg={3} className="my-2">
						<p className="f-14 my-1 f-14">{serviceCharge}</p>
					</Col>
					<Col lg={7} className="my-2">
						<span className="textLabel f-14">Grand Total</span>
					</Col>
					<Col lg={3} className="my-2">
						<p className="f-14 my-1 f-14">{grandTotal}</p>
					</Col>
					<hr className="col-9 ml-3" />
					<Col lg={7} className="my-2">
						<span className="textLabel f-14">Amount To Pay</span>
					</Col>
					<Col lg={3} className="my-2">
						<p className="f-14 my-1 f-14">{amountToPay}</p>
					</Col>
					<Col lg={12} className="my-4">
						<input type="text" id="promoCode" className="inputs__field inputs__field--text col-8 d-inline" />
						<input type="button" className="px-2 primaryTxt borderInput d-inline ml-2 bg-transparent" value="Apply" />
						<label for="name" className="inputs__label">
							Enter promo code
                        </label>
					</Col>
				</Row>
			</Col>
			<div className="borderImg">
				<Image src="/Images/images/borderImg1.PNG" className="img-fluid" />
			</div>
		</Row>
	</Container>	
)

export default PaymentSummary;