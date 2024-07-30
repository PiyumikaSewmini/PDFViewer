// Homepage.jsx

import React, { useEffect, useState } from "react";
import "./Homepage.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Popup from "./Popup"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Homepage() {
    const navigate = useNavigate(); 
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [allImages, setAllImages] = useState([]);
    const [uploadLimitExceeded, setUploadLimitExceeded] = useState(false);

    useEffect(() => {
        getPdf();
    }, []);

    const getPdf = async () => {
        try {
            const result = await axios.get("http://localhost:3003/pdf/get-files");
            setAllImages(result.data.data);
        } catch (error) {
            console.error("Error fetching PDFs:", error);
        }
    };

    const submitImage = async (e) => {
        e.preventDefault();

        if (allImages.length >= 3) {
            setUploadLimitExceeded(true);
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('file', file);

        const existingPdf = allImages.find(pdf => pdf.title === title);
        if(existingPdf) {
            alert("You have already saved a file with the same name. Please rename the file.");
            return;
        }

        try {
            await axios.post("http://localhost:3003/pdf/upload-files", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            getPdf();
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    const handleDeletePDF = async (pdfId) => {
        try {
            await axios.delete(`http://localhost:3003/pdf/delete-file/${pdfId}`);
            getPdf(); 
        } catch (error) {
            console.error("Error deleting PDF:", error);
        }
    };

    const handleLogout = async () => {
        try {
            await axios.delete("http://localhost:3003/auth/delete-account", {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            });
            localStorage.removeItem('token'); 
            navigate('/'); 
        } catch (error) {
            console.error("Error deleting account:", error);
        }
    };

    const handleLogoClick = () => {
        window.location.reload(); 
    };

    return (
        <div className="Fullpage">
            <div className="top-right">
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
            <div className="Logo" onClick={handleLogoClick}>
                <h1><span className='letterI'>i</span><span className='PDF'>PDF</span></h1>
            </div>
            <div className="ImageContainer">
                <img src="./BG_Plant.png" alt="Description" className="RightImage" />
            </div>
            <div className="CenteredBox">
                <img src="./PDFIcon.png" alt="pdf icon" className="pdf-icon-img" />
                <p className="Drag-and-drop-text">Upload pdf here!</p>
                <form onSubmit={submitImage}>
                    <input type="text" className="form-control_1" placeholder="Title" required onChange={(e) => setTitle(e.target.value)} />
                    <input type="file" className="form-control" accept="application/pdf" required onChange={(e) => setFile(e.target.files[0])} />
                    <button className="upload-button" type="submit">Submit</button>
                </form>
           
                {uploadLimitExceeded && <Popup handleClose={() => setUploadLimitExceeded(false)} />} 
                <div className="view-pdf-details">
                    {allImages.map((pdf, index) => (
                        <div key={index} className="pdf-item">
                            <p className="pdf-title">{pdf.title}</p>
                            <Link to={`/pdfviewpage?url=http://localhost:3003/files/${pdf.pdf}`} className="view-pdf">View PDF</Link>
                            <FontAwesomeIcon icon={faTrashAlt} className="delete-icon" onClick={() => handleDeletePDF(pdf._id)} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="LeftBottomImageContainer">
                <img src="./kid.png" alt="Left Bottom Description" className="LeftBottomImage" />
            </div>
        </div>
    );
}

export default Homepage;
