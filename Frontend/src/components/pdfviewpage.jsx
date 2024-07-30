import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./pdfviewpage.css";

function Pdfviewpage() {
    const location = useLocation();
    const navigate = useNavigate(); // Hook to navigate to different routes
    const searchParams = new URLSearchParams(location.search);
    const pdfUrl = searchParams.get("url");

    const handleLogoClick = () => {
        window.location.reload(); 
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <div className="Fullpage">
            <div className="top-right">
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
            <div className="Logo" onClick={handleLogoClick}>
                <h1><span className='letterI'>i</span><span className='PDF'>PDF</span></h1>
            </div>
            <div className="box-of-pdf">
                <iframe src={pdfUrl} title="PDF Viewer" className="pdf-view-box" />
            </div>
        </div>
    );
}

export default Pdfviewpage;
