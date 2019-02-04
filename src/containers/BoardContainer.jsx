import React from 'react';
import ModalComponent from '../components/Modal';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

import { connect } from "react-redux";
import { bindActionCreators } from 'redux'; 

import * as actionsTask from '../actions/taskAction'
import * as actionsTodo from '../actions/todoAction'
import * as actionsActive from '../actions/activeAction'

import CardComponent from '../components/Card';
import { BacklogContainer } from './BacklogContainer'
import './BoardContainer.css'
import { TodoContainer } from './TodoContainer';
import { ActiveContainer } from './ActiveContainer';
import { ClosedContainer } from './ClosedContainer';

class BoardContainer extends React.Component {
  componentWillMount() {
    this.props.actionsTask.fetchTasks();
  }

  handleAddTask(state) {
    this.props.actionsTask.addTask(state)
  }

  render() {
    return (
      <div className="board">
        <div className="board-header flex-around">
          <p>FireKanban</p>
          <Modal trigger={<Button>Add</Button>} centered={false}>
            <ModalComponent handleOnSubmitTask={newState => this.handleAddTask(newState)} />
          </Modal>
        </div>
        <div className="wrapper-board">
          <BacklogContainer
            tasks={this.props.tasks.tasks}
            actionsTask={this.props.actionsTask}
          />
          <TodoContainer
            todo={this.props.tasks.todo}
            actionsTodo={this.props.actionsTodo}
          />
          <ActiveContainer
            active={this.props.tasks.active}
            actionsActive={this.props.actionsActive}
          />
          <ClosedContainer
            closed={this.props.tasks.closed}
          />
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log(state.taskReducer)
  return {
    tasks: state.taskReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actionsTask: bindActionCreators(actionsTask, dispatch),
    actionsTodo: bindActionCreators(actionsTodo, dispatch),
    actionsActive: bindActionCreators(actionsActive, dispatch),
  }
}

BoardContainer = connect(mapStateToProps, mapDispatchToProps)(BoardContainer)
export default BoardContainer