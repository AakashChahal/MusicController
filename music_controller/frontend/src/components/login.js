import React from "react";

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
                <label htmlFor="">Username</label>
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
                            <button onClick={handleLogin}>Sign In</button>
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
                            <button onClick={handleSignup}>Sign Up</button>
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
            </div>
        </section>
    );
}

export default Login;
