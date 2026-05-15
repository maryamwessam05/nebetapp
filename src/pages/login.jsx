import React, { useState } from 'react';
import "./style.css"
import login1 from "../assets/logingrap1.svg"
import login2 from "../assets/logingrap2.svg"
import mail from "../assets/icon01.svg"
import pass from "../assets/icon02.svg"
import eye from "../assets/Button.svg"
import Button from '../components/button';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';

const DEMO_EMAIL    = "maryam@gmail.com";
const DEMO_PASSWORD = "1234";

const AlertIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
);
const WrongPassIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7.5" cy="15.5" r="5.5"/><path d="M21 2l-9.6 9.6"/><path d="M15.5 7.5l3 3L22 7l-3-3"/>
    </svg>
);
const NotFoundIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/>
        <line x1="18" y1="8" x2="23" y2="13"/><line x1="23" y1="8" x2="18" y2="13"/>
    </svg>
);
const SuccessIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
);

const ERROR_CONFIG = {
    required:       { icon: <AlertIcon />,     color: "#c8860a", bg: "rgba(251,191,36,.13)", border: "rgba(251,191,36,.35)" },
    wrong_password: { icon: <WrongPassIcon />, color: "#dc2626", bg: "rgba(239,68,68,.10)",  border: "rgba(239,68,68,.30)" },
    not_found:      { icon: <NotFoundIcon />,  color: "#7c3aed", bg: "rgba(139,92,246,.10)", border: "rgba(139,92,246,.30)" },
    success:        { icon: <SuccessIcon />,   color: "#059669", bg: "rgba(16,185,129,.10)", border: "rgba(16,185,129,.30)" },
    general:        { icon: <AlertIcon />,     color: "#dc2626", bg: "rgba(239,68,68,.10)",  border: "rgba(239,68,68,.30)" },
};

function ErrorBanner({ type, message }) {
    const cfg = ERROR_CONFIG[type] || ERROR_CONFIG.general;
    return (
        <div style={{
            display: "flex", alignItems: "center", gap: "8px",
            padding: "10px 13px", borderRadius: "8px",
            fontSize: "12.5px", fontWeight: 600,
            color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.border}`,
            animation: "errSlide .25s ease", marginTop: "4px",
        }}>
            <span style={{ flexShrink: 0, display: "flex" }}>{cfg.icon}</span>
            {message}
        </div>
    );
}

const Login = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm]   = useState(false);
    const [isLogin, setIsLogin]           = useState(true);
    const [loading, setLoading]           = useState(false);
    const [error, setError]               = useState(null);
    const [loginEmail, setLoginEmail]       = useState("");
    const [loginPassword, setLoginPassword] = useState("");    
    const [firstName, setFirstName]             = useState("");
    const [lastName, setLastName]               = useState("");
    const [signupEmail, setSignupEmail]         = useState("");
    const [signupPassword, setSignupPassword]   = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const switchToLogin  = () => { setIsLogin(true);  setShowPassword(false); setShowConfirm(false); setError(null); };
    const switchToSignup = () => { setIsLogin(false); setShowPassword(false); setShowConfirm(false); setError(null); };

    const handleLogin = () => {
        setError(null);

        if (!loginPassword) {
            setError({ type: "required", message: "Password is required. Please enter your password." });
            return;
        }

        if (!loginEmail) {
            setError({ type: "required", message: "Email address is required." });
            return;
        }

        if (loginEmail !== DEMO_EMAIL) {
            setError({ type: "not_found", message: "No account found with this email. Please sign up first." });
            return;
        }

        if (loginPassword !== DEMO_PASSWORD) {
            setError({ type: "wrong_password", message: "Wrong password. Please double-check and try again." });
            return;
        }

        navigate("/home");
    };

    const handleSignup = async () => {
        setError(null);

        if (!firstName.trim())   { setError({ type: "required", message: "First name is required." }); return; }
        if (!lastName.trim())    { setError({ type: "required", message: "Last name is required." }); return; }
        if (!signupEmail.trim()) { setError({ type: "required", message: "Email address is required." }); return; }
        if (!signupPassword)     { setError({ type: "required", message: "Password is required." }); return; }
        if (signupPassword.length < 6) {
            setError({ type: "wrong_password", message: "Password must be at least 6 characters." }); return;
        }
        if (signupPassword !== confirmPassword) {
            setError({ type: "wrong_password", message: "Passwords do not match." }); return;
        }

        setLoading(true);

        const { error: dbError } = await supabase
            .from("user")
            .insert([{
                first_name: firstName.trim(),
                last_name:  lastName.trim(),
                email:      signupEmail.trim(),
                joined:     new Date().toISOString().split("T")[0], // YYYY-MM-DD
            }]);

        setLoading(false);

        if (dbError) {
            setError({ type: "general", message: "Could not create account: " + dbError.message });
            return;
        }

        setError({ type: "success", message: "Account created successfully! You can now log in." });
        setFirstName(""); setLastName(""); setSignupEmail(""); setSignupPassword(""); setConfirmPassword("");
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
                            <Button style={isLogin ? "beigebtn" : "blackbtn"} text="Login"   rec="rec2" onClick={switchToLogin}  />
                            <Button style={isLogin ? "blackbtn" : "beigebtn"} text="Sign up" rec="rec2" onClick={switchToSignup} />
                        </div>

                        {error && <ErrorBanner type={error.type} message={error.message} />}

                        <div className="inputs">
                            {isLogin ? (
                                <>
                                    <div className="field-group">
                                        <label htmlFor="login-email">Email address</label>
                                        <div className={`in ${error?.type === "not_found" ? "in-error" : ""}`}>
                                            <img src={mail} alt="" />
                                            <input
                                            tabIndex={1}
                                                id="login-email"
                                                type="text"
                                                placeholder="you@example.com"
                                                value={loginEmail}
                                                onChange={e => setLoginEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="field-group">
                                        <label htmlFor="login-password">Password</label>
                                        <div className={`in ${error?.type === "wrong_password" || error?.type === "required" ? "in-error" : ""}`}>
                                            <img src={pass} alt="" />
                                            <input
                                            tabIndex={2}

                                                id="login-password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="••••••••"
                                                value={loginPassword}
                                                onChange={e => setLoginPassword(e.target.value)}
                                            />
                                            <button type="button" className="eye-btn" onClick={() => setShowPassword(p => !p)} aria-label={showPassword ? "Hide password" : "Show password"}>
                                                <img src={eye} alt="" />
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="row">
                                        <div className="field-group">
                                            <label htmlFor="signup-firstname">First name</label>
                                            <div className="in">
                                                <input tabIndex={1}  id="signup-firstname" type="text" placeholder="Maryam" value={firstName} onChange={e => setFirstName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="field-group">
                                            <label htmlFor="signup-lastname">Last name</label>
                                            <div className="in">
                                                <input tabIndex={2} id="signup-lastname" type="text" placeholder="Hassan" value={lastName} onChange={e => setLastName(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="field-group">
                                        <label htmlFor="signup-email">Email address</label>
                                        <div className="in">
                                            <img src={mail} alt="" />
                                            <input tabIndex={3} id="signup-email" type="text" placeholder="you@example.com" value={signupEmail} onChange={e => setSignupEmail(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="field-group">
                                        <label htmlFor="signup-password">Password</label>
                                        <div className={`in ${error?.type === "wrong_password" ? "in-error" : ""}`}>
                                            <img src={pass} alt="" />
                                            <input
                                                id="signup-password"
                                                tabIndex={4}
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Min. 6 characters"
                                                value={signupPassword}
                                                onChange={e => setSignupPassword(e.target.value)}
                                            />
                                            <button type="button" className="eye-btn" onClick={() => setShowPassword(p => !p)} aria-label={showPassword ? "Hide" : "Show"}>
                                                <img src={eye} alt="" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="field-group">
                                        <label htmlFor="signup-confirm">Confirm password</label>
                                        <div className={`in ${error?.type === "wrong_password" ? "in-error" : ""}`}>
                                            <img src={pass} alt="" />
                                            <input
                                            tabIndex={5}
                                                id="signup-confirm"
                                                type={showConfirm ? "text" : "password"}
                                                placeholder="Repeat password"
                                                value={confirmPassword}
                                                onChange={e => setConfirmPassword(e.target.value)}
                                            />
                                            <button type="button" className="eye-btn" onClick={() => setShowConfirm(p => !p)} aria-label={showConfirm ? "Hide" : "Show"}>
                                                <img src={eye} alt="" />
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="line"></div>

                        <div className="log">
                            {isLogin ? (
                                <>
                                    <Button style="beigebtn" text="Login" rec="rec" onClick={handleLogin} />
                                    <Link to="/home">
                                        <Button style="blackbtn" text="Continue as Guest" rec="rec2" />
                                    </Link>
                                </>
                            ) : (
                                <Button
                                    style="beigebtn"
                                    text={loading ? "Creating account…" : "Create Account"}
                                    rec="rec"
                                    onClick={handleSignup}
                                />
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
