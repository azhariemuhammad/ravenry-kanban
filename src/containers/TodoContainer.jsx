import React from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux'; 

import * as actionsTodo from '../actions/todoAction'
import CardComponent from '../components/Card';
export const TodoContainer = (props) => {

  const updateTodoToActive = (id) => {
    props.actionsTodo.updateTodoToActive(props.todo, id)
  }

  const handleRemoveTodo = (id) => {
    props.actionsTodo.removeItemOnTodo(id)
  }

  return (
    <CardComponent 
      title={'Todo'}
      move={'Active'}
      headerStyle={headerStyle}
      tasks={props.todo}
      callBackParent={id => updateTodoToActive(id)}
      remove={id => handleRemoveTodo(id)}
    />
  )
}

const headerStyle = {
  backgroundColor: '#72789f'
};