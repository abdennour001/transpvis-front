import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./_register.scss";
import logo from "../../../assets/logo.png";
import { register, loadUser } from "../../../redux/actions/authActions";

const Register = ({ isAuthenticated, register, loadUser }) => {
    const history = useHistory();
    const [username, setUsername] = useState("");
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
        register({
            firstName: username.split(" ")[0],
            lastName: username.split(" ")[1],
            email,
            password
        });
    };

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
                            The process of manipulating transparency
                            requirements is very easy with the Transpvis
                            platform. You can create your own applications and
                            start simulating transparency requirements now.
                        </p>
                        <br />
                        <br />
                    </div>
                </div>
                <div className="register__right">
                    <div className="register__form">
                        {/* <h2>Login</h2> */}
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <span className="form-label">Username</span>
                                <input
                                    type="text"
                                    placeholder="Amokrane Abdennour"
                                    className="form-control"
                                    value={username}
                                    onChange={e => {
                                        setUsername(e.target.value);
                                    }}
                                    autoFocus
                                    required
                                />
                            </div>
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
                                    required
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
                                Register
                            </button>
                        </form>
                    </div>
                    <div className="register__register">
                        <p>Already have login and password? </p>
                        <Link to="/login">Sign in</Link>
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

export default connect(mapSateToProps, { register, loadUser })(Register);
