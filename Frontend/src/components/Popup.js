import React from "react";
import "./Popup.css"

function Popup({ handleClose }) {
    return (
        <div className="popup">
            <div className="popup-inner">
                <p>Storage is full. Please delete one PDF to upload a new one.</p>
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    );
}

export default Popup;
