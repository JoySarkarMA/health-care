import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hook/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>

    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.displayName ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />

    );
};

export default PrivateRoute;