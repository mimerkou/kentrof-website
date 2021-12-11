import React from 'react';
import { useParams } from 'react-router-dom';
import { actionsData } from './actionsData';
import Button from '../../components/Button/Button';
import './ActionDetail.css';

const ActionDetail = () => {
  const params = useParams();

  const singleAction = actionsData.find(
    (action) => action.id === params.actionId
  );

  if (!singleAction) {
    return (
      <div className="no-action-found">
        <p>Δεν βρέθηκε κάποια δράση!</p>
        <Button path="/actions" darkBg={false}>
          Πίσω στις Δράσεις μας
        </Button>
      </div>
    );
  }

  return (
    <div className="action-detail-container">
      <div className="action-detail-info">
        <h2>{singleAction.actionTitle}</h2>
        <p className="detail-date">{singleAction.actionDate}</p>
        <p className="detail-text">{singleAction.actionText}</p>
      </div>

      <div className="action-detail-btn-wrap">
        <Button path="/actions" darkBg={false}>
          Πίσω στις Δράσεις μας
        </Button>
      </div>
    </div>
  );
};

export default ActionDetail;
