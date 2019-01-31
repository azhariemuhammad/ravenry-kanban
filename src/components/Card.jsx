import React from 'react';

import './Card.css'

const CardComponent = ({title}) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{ title }</h2>
      </div>
      <div className="card-content">
        <div className="task">
          <div className="task-title">
            <p>Something awesome!</p>
          </div>
          <div className="task-desc">
            <p>Point: 121</p>
            <p>Assigned To: Jhon Doe</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardComponent