import React from "react";
import ReactDOM from 'react-dom';
const Modal = (props) => {

  const content = (
    <div
        className={`modal ${props.show?'show':'fade'}`}
        // id="centermodal"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        
        style={{display:props.show?"block":"none", paddingRight:"12px", fontSize:"24px"}}

        // style="display: block; padding-right: 12px;"
        // aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="myCenterModalLabel">
                {props.title}
              </h2>
              <button
                type="button"
                className="close"
                // data-dismiss="modal"
                // aria-hidden="true"
                onClick={props.onCancel}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              {props.children}
            </div>
            <div className="modal-footer">
              {props.footer}
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
     
  )

  return ReactDOM.createPortal(content, document.getElementById('modal')); 
};

export default Modal;
