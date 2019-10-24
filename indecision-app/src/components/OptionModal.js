import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleModal} // to close when clicked outside the box or escape key
    contentLabel= "Selected Option"
    closeTimeoutMS={400}
    className="modal"
    >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleModal}>Okay</button>
    </Modal>
);
export default OptionModal;