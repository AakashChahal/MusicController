import React from "react";
import Button from "@material-ui/core";
import Link from "react-router-dom";

function handleFeedback() {
    console.log(window.location);
    window.location = window.location.href + "feedback";
    console.log(window.location);
}

function Login(props) {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccoutn,
        emailError,
        passwordError,
    } = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <h2>
                    JOIN THE HOUSE PARTY
                    <br /> MUSIC CONTROLLER
                </h2>
                <label htmlFor="">Email</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label htmlFor="">Password</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button className="sign-btn" onClick={handleLogin}>
                                Sign In
                            </button>
                            <p>
                                Dont have an account ?
                                <span
                                    onClick={() => setHasAccoutn(!hasAccount)}
                                >
                                    Sign Up
                                </span>
                            </p>
                        </>
                    ) : (
                        <>
                            <button className="sign-btn" onClick={handleSignup}>
                                Sign Up
                            </button>
                            <p>
                                Have an account ?
                                <span
                                    onClick={() => setHasAccoutn(!hasAccount)}
                                >
                                    Sign In
                                </span>
                            </p>
                        </>
                    )}
                </div>
                <button className="feedback-btn" onClick={handleFeedback}>
                    Feedback/Password Change Request
                </button>
            </div>
        </section>
    );
}

export default Login;
