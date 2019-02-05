import React from 'react';

import './Card.css'
import ModalComponent from './Modal';
import { Button, Icon, Modal } from 'semantic-ui-react';

let temp = []

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(id, e) {
    e.preventDefault();
    console.log('fooo', id)
    this.props.callBackParent(id)
  }

  handleRemove(id) {
    this.props.removeTask(id)
  }

  handleOnEditTask(newState) {
    this.props.editTask(newState)
  }

  render() {
    const arrTask = this.props.tasks
    return (
      <div className="card">
        <div className="card-header" style={this.props.headerStyle}>
            <h2>{ this.props.title }</h2>
          </div>
          <div className="card-content">
          <ul>
            {
              (arrTask) && arrTask.map((item, key) => {
                  const even = (key % 2)
                  return (
                    <div className='divider'>
                      <div className="task"
                        style={even ? style : null}
                        key={key} >
                        <div className="task-title">
                          <span className="flex-around">
                            <h3>{item.title}</h3>
                            <Modal trigger={
                              <Icon 
                                name="bars"
                              />} centered={false}>
                              <ModalComponent 
                                handleOnEditTask={newState => this.handleOnEditTask(newState)} 
                                editedTask={item}
                                removeTask={id => this.handleRemove(id)}
                              />
                            </Modal>
                            
                          </span>
                        </div>
                        <div className="task-desc">
                          <p>{item.desc}</p>
                          <p>Point: {item.point}</p>
                          <p>Assigned To: {item.assignedTo}</p>
                        </div>
                        <div className="task-action">
                            {(this.props.move) && 
                                <a href='#' onClick={(e) => this.handleOnClick(item.id, e)}>Move To {this.props.move}</a>
                              }
                          </div>
                      </div>
                    </div> 
                  )
              })
            }
          </ul>
        </div>
      </div>
      
    )
  }
}

const style = {
  backgroundColor: '#dddddd'
}

export default CardComponent
