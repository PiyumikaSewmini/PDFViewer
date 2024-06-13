import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        axios.post('http://localhost:3001/auth/register', { email, password, confirmPassword })
            .then(result => {
                console.log(result);
                if (result.data.message === "User already exists") {
                    setError("User already exists");
                } else {
                    setMessage("Successfully signed up!");
                    setError('');
                    
                    alert("Successfully signed up!");
                    navigate('/Homepage');
                }
            })
            .catch(err => {
                console.log(err);
                setError("Signup failed. Please try again.");
            });
    }

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className='container'>
            <div className='left-side'>
                <div className='Hellotext'>
                    <h1>
                        Hello,<br />
                        Welcome to <span className='letterI'>i</span><span className='PDF'>PDF</span>
                    </h1>
                    <div className='Secondtopic'>
                        <p>Welcome to the best PDF viewer,</p>
                        <div className='UserDetails'>
                            <div className='input-username'>
                                <label>
                                    <div className='input-with-icon'>
                                        <input type="email" placeholder='Enter Username' className='inputField' onChange={(e) => setEmail(e.target.value)} />
                                        <i className="fas fa-envelope icon"></i>
                                    </div>
                                </label>
                            </div>
                            <div className='input-password'>
                                <label>
                                    <div className='input-with-icon'>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder='Create password'
                                            className='inputField'
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <i className="fas fa-lock icon"></i>
                                        <i
                                            className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"} password-toggle-icon`}
                                            onClick={togglePasswordVisibility}
                                        ></i>
                                    </div>
                                </label>
                            </div>
                            <div className='input-confirm-password'>
                                <label>
                                    <div className='input-with-icon'>
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder='Confirm password'
                                            className='inputField'
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                        <i className="fas fa-lock icon"></i>
                                        <i
                                            className={`fas ${showConfirmPassword ? "fa-eye" : "fa-eye-slash"} password-toggle-icon`}
                                            onClick={toggleConfirmPasswordVisibility}
                                        ></i>
                                    </div>
                                </label>
                            </div>
                            {error && <p className="error-message">{error}</p>} 
                            {message && <p className="success-message">{message}</p>} 
                            <div className="signup-container">
                                <button className='signup-button' onClick={handleSubmit}>Signup</button>
                            </div>
                        </div>
                        <div className='account-text'>
                            <p className='have-account'>Already have an Account? <Link to="/Login" className='loginlink'>Sign in</Link></p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-side'>
                <img src="./CoverImage.png" alt="Right Side" className='right-side-image' />
            </div>
        </div>
    );
}

export default Signup;
