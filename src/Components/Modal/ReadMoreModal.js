import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ReadMore from './ReadMore';

const ReadMoreModal = (props) => {
    return (
        <>
            <Modal className="d-none"  show={props.modalOpen} onHide={props.handleModalOpen}>
                <ReadMore />
            </Modal>
        </>
    )
}

//export default ReadMoreModal;