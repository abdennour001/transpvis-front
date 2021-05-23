import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadUser } from "../../redux/actions/authActions";

function PrivateRoute({
    component: Component,
    isAuthenticated,
    loading,
    loadUser,
    ...rest
}) {
    useEffect(() => {
        if (localStorage.token && !isAuthenticated) {
            loadUser();
        }
    });
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

export default connect(mapSateToProps, { loadUser })(PrivateRoute);
