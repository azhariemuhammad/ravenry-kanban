import React from 'react';
import CardComponent from '../components/Card';

import './BoardContainer.css'
class BoardContainer extends React.Component {

  render() {
    return (
      <div className="board">
        <p>FireKanban</p>
        <div className="wrapper-board">
          <CardComponent title="Back-log" />
          <CardComponent title="To-do" />
          <CardComponent title="Doing" />
          <CardComponent title="Done" />
        </div>
        
      </div>
    )
  }
}

export default BoardContainer