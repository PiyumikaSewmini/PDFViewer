import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

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
                                        <input type="text" placeholder='Enter Username' className='inputField' />
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
                                        />
                                        <i className="fas fa-lock icon"></i>
                                        <i
                                            className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"} password-toggle-icon`}
                                            onClick={togglePasswordVisibility}
                                        ></i>
                                    </div>
                                </label>
                            </div>
                            <div className="signup-container">
                                <button className='signup-button'>Login</button>
                                <p className='OR-text'>OR</p>
                                <div className='box'>
                                    <button className='google-button'>
                                        <img src="../googleicon.png" alt="Google" className="google-icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='account-text'>
                            <p className='have-account'>Don't have an Account? <a href="./Login" className='loginlink'>Signup</a></p>
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
