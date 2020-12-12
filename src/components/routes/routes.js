import React from "react";
import { Route, Switch } from "react-router-dom";

const ROUTES = [
    { path: "/", key: "ROOT", exact: true, component: () => <h1>Log in</h1> },
    {
        path: "/app",
        key: "APP",
        component: () => <h1>App</h1>,
        // nested routes
        routes: []
    }
];

export default ROUTES;

function RouteWithSubRoutes(route) {
    return (
        // protect routes here use PrivateRoute component
        <Route
            path={route.path}
            exact={route.exact}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

export function RenderRoutes({ routes }) {
    return (
        <Switch>
            {routes.map((route, i) => {
                return <RouteWithSubRoutes key={route.key} {...route} />;
            })}
            {/* 404 Not found */}
            <Route component={() => <h1>Not Found!</h1>} />
        </Switch>
    );
}
