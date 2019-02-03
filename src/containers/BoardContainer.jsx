import React from 'react';
import ModalComponent from '../components/Modal';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

import { connect } from "react-redux";
import { bindActionCreators } from 'redux'; 

import * as actionsTask from '../actions/taskAction'
import CardComponent from '../components/Card';
import BacklogContainer from './BacklogContainer'
import './BoardContainer.css'
import { TodoContainer } from './TodoContainer';

class BoardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddTask = this.handleAddTask.bind(this)
  }
  componentWillMount() {
    this.props.actionsTask.fetchTasks();
  }

  handleAddTask(state) {
    console.log(state)
    this.props.actionsTask.addTask(state)
  }

  render() {
    console.log(this.props.tasks.tasks)
    return (
      <div className="board">
        <p>FireKanban</p>
        <Modal trigger={<Button>Add</Button>} centered={false}>
          <ModalComponent handleOnSubmitTask={newState => this.handleAddTask(newState)} />
        </Modal>
        <div className="wrapper-board">
        <BacklogContainer
          tasks={this.props.tasks.tasks}
         />
        <TodoContainer
          todo={this.props.tasks.todo}
        />
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