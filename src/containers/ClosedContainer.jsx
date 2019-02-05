import React from 'react';

import CardComponent from '../components/Card';

export const ClosedContainer = (props) => {

  const handleRemoveClosed = (id) => {
    props.actionsClosed.removeItemOnClosed(id)
  }

  const handleEditClosed = (newState) => {
    props.actionsClosed.editClosed(newState)
  }

  return (
    <CardComponent 
      title={'Closed'}
      headerStyle={headerStyle}
      tasks={props.closed}
      editTask={newState => handleEditClosed(newState)}
      removeTask={id => handleRemoveClosed(id)}
    />
  )
}


const headerStyle = {
  backgroundColor: '#992929'
};