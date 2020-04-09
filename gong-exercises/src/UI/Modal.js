import React from 'react';
import '../css/modal.css';

function Modal (props) {
    return (<div id="modal-back" className="modal-back closex">
        {props.children}
    </div>)
    }

export default Modal;