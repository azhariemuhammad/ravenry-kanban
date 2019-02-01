import React from 'react';
import ModalComponent from '../components/Modal';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

import { connect } from "react-redux";
import { bindActionCreators } from 'redux'; 

import * as actionsTask from '../actions/taskAction'
import CardComponent from '../components/Card';
import './BoardContainer.css'

class BoardContainer extends React.Component {
  
  componentWillMount() {
    this.props.actionsTask.fetchTasks();
  }

  handleAddTask(state, ref) {
    this.props.actionsTask.addTask(state, ref)
  }

  render() {
    return (
      <div className="board">
        <p>FireKanban</p>
        <Modal trigger={<Button>Add</Button>} centered={false}>
          <ModalComponent handleOnSubmitTask={newState => this.handleAddTask(newState, 'todo')} />
        </Modal>
        <div className="wrapper-board">
          <CardComponent 
            title="Back-log" 
            tasks={this.props.tasks}
            handleOnSubmitTask={newState => this.handleAddTask(newState, 'doing')}
          />
          {/* <CardComponent title="To-do" />
          <CardComponent title="Doing" />
          <CardComponent title="Done" /> */}
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log(state.taskReducer)
  return {
    tasks: state.taskReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actionsTask: bindActionCreators(actionsTask, dispatch)
  }
}

BoardContainer = connect(mapStateToProps, mapDispatchToProps)(BoardContainer)
export default BoardContainer