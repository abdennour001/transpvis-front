import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

// Redux store
import store from "../redux/store";

function App() {
    return (
        <Router>
            <Provider store={store}>
                <div className="app"></div>
            </Provider>
        </Router>
    );
}

export default App;
