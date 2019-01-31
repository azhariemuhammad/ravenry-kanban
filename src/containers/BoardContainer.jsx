import React from 'react';
import CardComponent from '../components/Card';

import './BoardContainer.css'
import ModalComponent from '../components/Modal';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
class BoardContainer extends React.Component {

  render() {
    return (
      <div className="board">
        <p>FireKanban</p>
        <Modal trigger={<Button>Add</Button>} centered={false}>
          <ModalComponent />
        </Modal>
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