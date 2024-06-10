import React, { useState } from 'react';
import './Signup.css';

function Signup() {
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
                                            placeholder='Create password'
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
                            <div className='input-confirm-password'>
                                <label>
                                    <div className='input-with-icon'>
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder='Confirm password'
                                            className='inputField'
                                        />
                                        <i className="fas fa-lock icon"></i>
                                        <i
                                            className={`fas ${showConfirmPassword ? "fa-eye" : "fa-eye-slash"} password-toggle-icon`}
                                            onClick={toggleConfirmPasswordVisibility}
                                        ></i>
                                    </div>
                                </label>
                            </div>
                            <div className="signup-container">
                                <button className='signup-button'>Signup</button>
                                <p className='OR-text'>OR</p>
                                <div className='box'>
                                    <button className='google-button'>
                                        <img src="../googleicon.png" alt="Google" className="google-icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='account-text'>
                            <p className='have-account'>Already have an Account? <a href="./Home" className='loginlink'>Sign in</a></p>
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
