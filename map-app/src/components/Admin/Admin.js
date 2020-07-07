import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    Redirect
} from "react-router-dom";
import decode from 'jwt-decode';

import Toolbar from './AdminToolbar';
import Insert from './Insert';
import Update from "./Update";
import Delete from "./Delete";
import AdminLoginPage from "./AdminLoginPage";

const checkAuth = () => {
    if (!sessionStorage.getItem('auth-token')) {
        return false;
    } else {
        const authToken = '123456abcdef';
        if (sessionStorage.getItem('auth-token') == authToken) {
            return true;
        } else {
            return false;
        }
    }
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                checkAuth() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/admin/login",
                        }}
                    />
                )
            }
        />
    );
}

function AdminDefault() {
    return (
        <div>
            <Toolbar/>
            <hr/>
            <h1 style={{ padding: 50 }}> Choose an option on the toolbar. </h1>
        </div>
    )
}

function Admin() {

    let {path} = useRouteMatch();

    return (
        <Router>
            <div>
                <Switch>
                    <PrivateRoute exact path="/admin">
                        <AdminDefault/>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/insert`}>
                        <Insert/>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/update`}>
                        <Update/>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/delete`}>
                        <Delete/>
                    </PrivateRoute>
                    <Route exact path={`${path}/login`}>
                        <AdminLoginPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
export default Admin;

