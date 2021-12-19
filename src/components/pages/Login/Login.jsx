import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./_login.scss";
import logo from "../../../assets/logo.png";
import { login, loadUser } from "../../../redux/actions/authActions";

const Login = ({ isAuthenticated, login, loadUser }) => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (isAuthenticated) {
            history.push("/dashboard");
        } else if (localStorage.token) {
            loadUser();
        }
    }, [isAuthenticated, history]);

    const handleSubmit = e => {
        e.preventDefault();
        login({
            email,
            password
        });
    };

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
                            The process of manipulating transparency
                            requirements is very easy with the Transpvis
                            platform. You can create your own applications and
                            start simulating transparency requirements now.
                        </p>
                        <br />
                        <br />
                    </div>
                </div>
                <div className="login__right">
                    <div className="login__form">
                        {/* <h2>Login</h2> */}
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <span className="form-label">Email</span>
                                <input
                                    type="email"
                                    placeholder="user@example.com"
                                    className="form-control"
                                    value={email}
                                    onChange={e => {
                                        setEmail(e.target.value);
                                    }}
                                    autoFocus
                                    required
                                    autoComplete="true"
                                />
                            </div>
                            <div className="form-group">
                                <span className="form-label">Password</span>
                                <input
                                    type="password"
                                    placeholder="****"
                                    className="form-control"
                                    value={password}
                                    onChange={e => {
                                        setPassword(e.target.value);
                                    }}
                                    required
                                />
                            </div>
                            <button type="submit" className="form-submit">
                                Sign in
                            </button>
                        </form>
                    </div>
                    <div className="login__register">
                        <p>Don't have an account yet? </p>
                        <Link to="/register">Register now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapSateToProps = state => ({
    // user: state.auth.user
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapSateToProps, { login, loadUser })(Login);
