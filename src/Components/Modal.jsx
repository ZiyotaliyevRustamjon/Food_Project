import React from 'react';

const Modal = (props, closeModal) => {
    return (
        <>
            <div className="modalBg">
                <div className="modalEl">
                    {props.children}
                    <button onClick={props.closeModal}>Close</button>
                </div>
            </div>
        </>
    );
};


export default Modal;