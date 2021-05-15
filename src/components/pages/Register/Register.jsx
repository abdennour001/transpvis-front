import React from "react";

import "./_register.scss";
import logo from "../../../assets/logo.png";

const Register = () => {
    return (
        <div className="register">
            <header className="register__header">
                <img className="register__header_logo" src={logo} alt="" />
            </header>
            <div className="register__body">
                <div className="register__left">
                    {/* <h1 className="register__h1">Transpvis</h1> */}
                    <div className="register__title">
                        <h1 className="register__h1">
                            Transparency <br /> Visual <br /> Analysis
                        </h1>
                        <p className="register__p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div className="register__right">
                    <div className="register__form">
                        {/* <h2>Login</h2> */}
                        <form className="form">
                            <div className="form-group">
                                <span className="form-label">Username</span>
                                <input
                                    type="text"
                                    placeholder="amokrane001"
                                    className="form-control"
                                />
                            </div>
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
                                Register
                            </button>
                        </form>
                    </div>
                    <div className="register__register">
                        <p>Already have login and password? </p>
                        <a href="#">Sign in</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
