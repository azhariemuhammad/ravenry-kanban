import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'; 

import CardComponent from '../components/Card';

export const ClosedContainer = (props) => {

  const handleRemoveClosed = (id) => {
    props.actionsClosed.removeItemOnClosed(id)
  }
  return (
    <CardComponent 
      title={'Closed'}
      headerStyle={headerStyle}
      tasks={props.closed}
      remove={id => handleRemoveClosed(id)}
    />
  )
}


const headerStyle = {
  backgroundColor: '#992929'
};