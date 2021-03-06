import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import logo from "../assets/logo.png";

// Redux store
import store from "../redux/store";

function App() {
    return (
        <Router>
            <Provider store={store}>
                <div className="app">
                    <img src={logo} alt="" />
                    <h1>Transpvis</h1>
                    <p>Transparency Visual Analysis</p>
                </div>
            </Provider>
        </Router>
    );
}

export default App;
