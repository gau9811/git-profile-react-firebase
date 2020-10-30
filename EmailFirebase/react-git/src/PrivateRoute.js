import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { userContext } from './context/userContent'

const PrivateRoute = ({ component: Component, ...rest }) => {
    let context = useContext(userContext)
    return (
        <Route
            {...rest}
            render={
                props => context.user ? (
                    <Component {...props} />
                ) : (
                        <Redirect to="/Signin" />
                    )

            }
        />
    )
}

export default PrivateRoute
