import React from 'react';

import './Card.css'

const CardComponent = ({title, tasks}) => {
  const taskList = () => {
    console.log(tasks)
    if (tasks) {
      
    }
  }
  return (
    <div className="card">
      <div className="card-header">
        <h2>{ title }</h2>
      </div>
      <div className="card-content">
        {taskList()}
        <p>fooo</p>
      </div>
    </div>
  )
}

export default CardComponent