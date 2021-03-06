import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

// pages
// import Splash from "./pages/Splash";
import Home from "./pages/Home";

// Redux store
import store from "../redux/store";

function App() {
    return (
        <Router>
            <Provider store={store}>
                {/* <Splash /> */}
                <Home />
                <div className="app"></div>
            </Provider>
        </Router>
    );
}

export default App;
