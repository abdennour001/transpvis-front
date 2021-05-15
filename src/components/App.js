import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

// pages
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Redux store
import store from "../redux/store";

function App() {
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
