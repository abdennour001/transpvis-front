import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ component: Component }) {
    return (
        <Route
            {...rest}
            render={props =>
                loading ? (
                    <div className="my-5 text-center">{/* <Spinner /> */}</div>
                ) : !isAuthenticated ? (
                    <Redirect to="/login" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
}

const mapSateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading
});

export default connect(mapSateToProps)(PrivateRoute);
