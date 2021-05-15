import React from "react";

import "./_login.scss";
import logo from "../../../assets/logo.png";

const Login = () => {
    return (
        <div className="login">
            <header className="login__header">
                <img className="login__header_logo" src={logo} alt="" />
            </header>
            <div className="login__body">
                <div className="login__left">
                    {/* <h1 className="login__h1">Transpvis</h1> */}
                    <div className="login__title">
                        <h1 className="login__h1">
                            Transparency <br /> Visual <br /> Analysis
                        </h1>
                        <p className="login__p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div className="login__right">
                    <div className="login__form">
                        {/* <h2>Login</h2> */}
                        <form className="form">
                            <div className="form-group">
                                <span className="form-label">Email</span>
                                <input
                                    type="email"
                                    placeholder="user@example.com"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <span className="form-label">Password</span>
                                <input
                                    type="password"
                                    placeholder="****"
                                    className="form-control"
                                />
                            </div>
                            <button type="submit" className="form-submit">
                                Sign in
                            </button>
                        </form>
                    </div>
                    <div className="login__register">
                        <p>Don't have an account yet? </p>
                        <a href="#">Register now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
