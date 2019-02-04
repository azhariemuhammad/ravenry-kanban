import React from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux'; 

import CardComponent from '../components/Card';
export const ClosedContainer = (props) => {
  return (
    <CardComponent 
      title={'Closed'}
      headerStyle={headerStyle}
      tasks={props.closed}
    />
  )
}


const headerStyle = {
  backgroundColor: '#992929'
};