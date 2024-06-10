import React from "react";
import "./Homepage.css";

function Homepage() {
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        console.log('File uploaded:', file);
    };
    return (
        <div className="Fullpage">
             <div className="Logo">
                    <h1><span className='letterI'>i</span><span className='PDF'>PDF</span></h1>
             </div>
                <div className="ImageContainer">
                    <img src="./BG_Plant.png" alt="Description" className="RightImage" />
                </div>
                 <div className="CenteredBox">
                     <img src="./PDFIcon.png" alt="pdf icon" className="pdf-icon-img" /> 
                     <p className="Drag-and-drop-text">Drag and Drop PDF here!</p>
                     <p className="or-text">Or</p>
                     <input type="file" id="fileUpload" className="file-input" onChange={handleFileUpload} />
                     <label htmlFor="fileUpload" className="upload-button">
                         <img src="./cloud-computing.png" alt="Upload Icon" className="upload-img" />     
                     </label>
                     <p className="Upload-text">Uploads files here!</p>

                 </div>
                <div className="LeftBottomImageContainer">
                     <img src="./kid.png" alt="Left Bottom Description" className="LeftBottomImage" />
                </div>
        </div>
    );
};

export default Homepage;
