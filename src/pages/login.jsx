import React, { useState } from 'react';
import "./style.css"
import login1 from "../assets/logingrap1.svg"
import login2 from "../assets/logingrap2.svg"
import mail from "../assets/icon01.svg"
import pass from "../assets/icon02.svg"
import eye from "../assets/Button.svg"
import Button from '../components/button';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const switchToLogin = () => {
        setIsLogin(true);
        setShowPassword(false);
        setShowConfirm(false);
    };

    const switchToSignup = () => {
        setIsLogin(false);
        setShowPassword(false);
        setShowConfirm(false);
    };

    return ( 
        <>
        <main>
            <div className="login">
                <div className="frame">
                    <div className="imageframe">
                        <img src={login1} alt="" />
                        <img src={login2} alt="" />
                        <img src={login1} alt="" />
                        <img src={login2} alt="" />
                        <img src={login1} alt="" />
                        <img src={login2} alt="" />
                        <img src={login1} alt="" />
                    </div>
                </div>
                <div className="logincont">
                    <div className="loginback">
                        <svg xmlns="http://www.w3.org/2000/svg" width="416" height="645" viewBox="0 0 416 645" fill="none">
                        <path d="M415.432 105.246L413.502 644.381H0.501953L2.43164 105.245L206.722 0.560547L415.432 105.246ZM206.603 17.5527L11.71 115.266L11.4346 115.403L11.4336 115.71L9.5 634.879L9.49805 635.381H404.498L404.5 634.883L406.434 115.714L406.435 115.401L406.154 115.264L207.047 17.5508L206.824 17.4414L206.603 17.5527ZM405.432 116.022L403.502 634.381H10.502L12.4316 116.021L206.828 18.5576L405.432 116.022Z" fill="#0B0B0B" stroke="#F0E1CE"/>
                        </svg>
                    </div>

                    <div className="logininput">

                        <div className="loginbtns">
                            <Button
                                style={isLogin ? "beigebtn" : "blackbtn"}
                                text="Login"
                                rec="rec2"
                                onClick={switchToLogin}
                            />
                            <Button
                                style={isLogin ? "blackbtn" : "beigebtn"}
                                text="Sign up"
                                rec="rec2"
                                onClick={switchToSignup}
                            />
                        </div>

                        <div className="inputs">
                            {isLogin ? (
                                <>
                                    <div className="in">
                                        <img src={mail} alt="" />
                                        <input type="text" placeholder="Email address" />
                                    </div>
                                    <div className="in">
                                        <img src={pass} alt="" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                        />
                                        <button
                                            type="button"
                                            className="eye-btn"
                                            onClick={() => setShowPassword(prev => !prev)}
                                            aria-label={showPassword ? "Hide password" : "Show password"}
                                        >
                                            <img src={eye} alt="" />
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                <div className="row">
                                    <div className="in">
                                        <input type="text" placeholder="First name" />
                                    </div>
                                    <div className="in">
                                        <input type="text" placeholder="Last name" />
                                    </div>

                                </div>
                                    <div className="in">
                                        <img src={mail} alt="" />
                                        <input type="text" placeholder="Email address" />
                                    </div>
                                    <div className="in">
                                        <img src={pass} alt="" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Create password"
                                        />
                                        <button
                                            type="button"
                                            className="eye-btn"
                                            onClick={() => setShowPassword(prev => !prev)}
                                            aria-label={showPassword ? "Hide password" : "Show password"}
                                        >
                                            <img src={eye} alt="" />
                                        </button>
                                    </div>
                                    <div className="in">
                                        <img src={pass} alt="" />
                                        <input
                                            type={showConfirm ? "text" : "password"}
                                            placeholder="Confirm password"
                                        />
                                        <button
                                            type="button"
                                            className="eye-btn"
                                            onClick={() => setShowConfirm(prev => !prev)}
                                            aria-label={showConfirm ? "Hide password" : "Show password"}
                                        >
                                            <img src={eye} alt="" />
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="line"></div>

                        <div className="log">
                            <Link to={"/home"}>
                                <Button
                                    style="beigebtn"
                                    text={isLogin ? "Login" : "Create Account"}
                                    rec="rec"
                                />
                            </Link>
                            {isLogin && (
                            <Link to={"/home"}>
                                
                                <Button style="blackbtn" text="Continue as Guest" rec="rec2" />
                                </Link>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </main>
        </>
    );
}

export default Login;