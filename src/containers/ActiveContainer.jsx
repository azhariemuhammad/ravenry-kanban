import React from 'react';

import CardComponent from '../components/Card';
export const ActiveContainer = (props) => {

  const handleUpdateActive = (id) => {
    props.actionsActive.updateActiveToClosed(props.active, id)
  }

  const handleEditActive = (newState) => {
    props.actionsActive.editActive(newState)
  }

  const handleRemoveActive = (id) => {
    props.actionsActive.removeItemOnActive(id)
  }

  return (
    <CardComponent 
      title={'Active'}
      move={'Closed'}
      headerStyle={headerStyle}
      tasks={props.active}
      callBackParent={id => handleUpdateActive(id)}
      editTask={newState => handleEditActive(newState)}
      removeTask={id => handleRemoveActive(id)}
    />
  )
}

const headerStyle = {
  backgroundColor: '#340000'
};