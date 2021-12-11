import React from 'react';
import { Link } from 'react-router-dom';
import { actionsData } from './actionsData';
import './Actions.css';

const Actions = () => {
  return (
    <div className="actions-wrapper">
      <h2>Οι Δράσεις μας</h2>
      <ul>
        {actionsData.map((action) => {
          return (
            <li key={action.id}>
              <Link to={`/actions/${action.id}`}>{action.actionTitle}</Link>
              <p>{action.actionDate}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Actions;
