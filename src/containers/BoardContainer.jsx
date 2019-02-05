import React from 'react';
import ModalComponent from '../components/Modal';
import { Button, Modal } from 'semantic-ui-react'

import { connect } from "react-redux";
import { bindActionCreators } from 'redux'; 

import * as actionsTask from '../actions/taskAction'
import * as actionsTodo from '../actions/todoAction'
import * as actionsActive from '../actions/activeAction'
import * as actionsClosed from '../actions/closedAction'

import { BacklogContainer } from './BacklogContainer'
import { TodoContainer } from './TodoContainer';
import { ActiveContainer } from './ActiveContainer';
import { ClosedContainer } from './ClosedContainer';
import './BoardContainer.css'

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
          <h1>FireKanban</h1>
          <Modal trigger={<Button primary>Add</Button>} centered={false}>
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
            actionsClosed={this.props.actionsClosed}
          />
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    tasks: state.taskReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actionsTask: bindActionCreators(actionsTask, dispatch),
    actionsTodo: bindActionCreators(actionsTodo, dispatch),
    actionsActive: bindActionCreators(actionsActive, dispatch),
    actionsClosed: bindActionCreators(actionsClosed, dispatch),
  }
}

BoardContainer = connect(mapStateToProps, mapDispatchToProps)(BoardContainer)
export default BoardContainer