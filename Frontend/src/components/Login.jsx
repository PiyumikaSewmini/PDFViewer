import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/auth/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data.token) {
                    localStorage.setItem('token', result.data.token);
                    onLogin();
                   
                    alert("Successfully logged in!");
                    navigate("/Homepage");
                } else {
                    setError("Email or password is wrong");
                }
            })
            .catch(err => {
                console.error(err);
                setError("An error occurred during login");
            });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='container'>
            <div className='left-side'>
                <div className='Hellotext'>
                    <h1>
                        Hello,<br />
                        Want to view PDF!
                    </h1>
                    <div className='Secondtopic'>
                        <p>Welcome to the best PDF viewer,</p>
                        <div className='UserDetails'>
                            <div className='input-username'>
                                <label>
                                    <div className='input-with-icon'>
                                        <input
                                            type="text"
                                            placeholder='Enter Username'
                                            className='inputField'
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <i className="fas fa-envelope icon"></i>
                                    </div>
                                </label>
                            </div>
                            <div className='input-password'>
                                <label>
                                    <div className='input-with-icon'>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder='Enter password'
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
                            {error && <p className="error-message">{error}</p>}
                            <div className="signup-container">
                                <button className='signup-button' onClick={handleSubmit}>Login</button>
                            </div>
                        </div>
                        <div className='account-text'>
                            <p className='have-account'>Don't have an Account? <Link to="/" className='loginlink'>Sign up</Link></p>
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

export default Login;
