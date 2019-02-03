import React from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux'; 

import * as actionsTask from '../actions/taskAction'
import CardComponent from '../components/Card';
export const TodoContainer = (props) => {

  const handleUpdateTodo = (id) => {
    console.log('uooo', id)
    console.log(this.props.todo)
    // this.props.actionsTask.updateTaskToTodo(this.props.tasks, id)
  }
  console.log(props.todo)
  return (
    <CardComponent 
      title={'Todo'}
      move={'Active'}
      tasks={props.todo}
      callBackParent={id => this.handleUpdateTodo(id)}
    />
  )
}