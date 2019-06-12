import React, { useContext } from 'react';
import AlertContext from '../../contexts/alert/AlertContext';

const Alert = () => {
  const { alerts } = useContext(AlertContext);

  return (
    alerts.length > 0 && (
      <div className="ui error message">
        <ol className="list">
          {alerts.map(alert => (
            <li key={alert.id}>{alert.msg}</li>
          ))}
        </ol>
      </div>
    )
  );
};

export default Alert;
