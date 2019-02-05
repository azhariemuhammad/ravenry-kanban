import React from 'react';

import CardComponent from '../components/Card';

export const TodoContainer = (props) => {

  const updateTodoToActive = (id) => {
    props.actionsTodo.updateTodoToActive(props.todo, id)
  }
  
  const handleEditTodo = (newState) => {
    props.actionsTodo.editTodo(newState)
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
      editTask={newState => handleEditTodo(newState)}
      removeTask={id => handleRemoveTodo(id)}
    />
  )
}

const headerStyle = {
  backgroundColor: '#72789f'
};