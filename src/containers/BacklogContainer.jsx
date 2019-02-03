import React from 'react';
import CardComponent from '../components/Card'

import { connect } from "react-redux";
import { bindActionCreators } from 'redux'; 

import * as actionsTask from '../actions/taskAction'

class BacklogContainer extends React.Component {
  constructor(props) {
    super(props)
    
  }

  handleUpdateTask(id) {
    console.log('uooo', id)
    console.log(this.props.tasks)
    this.props.actionsTask.updateTaskToTodo(this.props.tasks, id)
  }

  render() {
    console.log(this.props.tasks)
    return (
      <CardComponent 
        title={'Backlog'}
        move={'Todo'}
        tasks={this.props.tasks}
        callBackParent={id => this.handleUpdateTask(id)}
      />
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    actionsTask: bindActionCreators(actionsTask, dispatch)
  }
}



BacklogContainer = connect(null, mapDispatchToProps)(BacklogContainer)
export default BacklogContainer