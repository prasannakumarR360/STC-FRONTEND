import React from 'react';
import Col from 'react-bootstrap/col';

const DatePickerCarousel = ({ classId, Date, Month, Day}) => (
    <div className={classId}>
        <Col xl={12}>
            <h5 className="txtDate">
                {Month} {Date}
            </h5>
            <h5 className="txtDate mb-0">
                {Day}
            </h5>
        </Col>
    </div>
)

export default DatePickerCarousel;