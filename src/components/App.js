import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { connect } from "react-redux";

// pages
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Redux store
import store from "../redux/store";
import setAuthToken from "../utils/setAuthToken";

function App() {
    setAuthToken("ee69594f98481738e89d2dab15ed582176a683cd");

    return (
        <Router>
            <Provider store={store}>
                {/* <div className="app"> */}
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/dashboard">
                        <Splash />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                {/* </div> */}
            </Provider>
        </Router>
    );
}

export default App;
