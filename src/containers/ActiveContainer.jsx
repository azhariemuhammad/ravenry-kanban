import React from 'react';

import CardComponent from '../components/Card';
export const ActiveContainer = (props) => {

  const handleUpdateActive = (id) => {
    props.actionsActive.updateActiveToClosed(props.active, id)
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
      remove={id => handleRemoveActive(id)}
    />
  )
}

const headerStyle = {
  backgroundColor: '#340000'
};