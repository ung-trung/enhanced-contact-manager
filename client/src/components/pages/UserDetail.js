import React, { useContext } from 'react';
import AuthContext from '../../contexts/auth/AuthContext';

const UserDetail = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="ui segment">
      <div className="ui header">
        Welcome <i> {user.name}</i>
      </div>

      <p>Your email is: {user.email}</p>
    </div>
  );
};

export default UserDetail;
