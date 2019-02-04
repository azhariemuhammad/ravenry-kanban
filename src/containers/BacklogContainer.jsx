import React from 'react';
import CardComponent from '../components/Card'

import { connect } from "react-redux";
import { bindActionCreators } from 'redux'; 

import * as actionsTask from '../actions/taskAction'

export const BacklogContainer = (props) => {

  const handleUpdateTask = (id) => {
    props.actionsTask.updateTaskToTodo(props.tasks, id)
  }

  const handleRemoveTask = (id) => {
    props.actionsTask.removeItemOnTask(id)
  }
  
  return (
      <CardComponent 
        title={'Backlog'}
        move={'Todo'}
        headerStyle={headerStyle}
        tasks={props.tasks}
        callBackParent={id => handleUpdateTask(id)}
        remove={id => handleRemoveTask(id)}
      />
  )
}

const headerStyle = {
  backgroundColor: '#e0b5a6'
};