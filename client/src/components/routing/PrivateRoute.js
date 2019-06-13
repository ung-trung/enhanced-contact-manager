import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../contexts/auth/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? <Redirect to="login" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
