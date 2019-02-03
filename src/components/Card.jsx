import React from 'react';

import './Card.css'

let temp = []

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(id, e) {
    console.log('fooo', id)
    this.props.callBackParent(id)
  }

  render() {
    const arrTask = this.props.tasks
    return (
      <div className="card">
        <div className="card-header">
            <h2>{ this.props.title }</h2>
          </div>
          <div className="card-content">
          <ul>
            {
              (arrTask) && arrTask.map((item, key) => {
                return (
                  <div className="task" key={key}>
                    <div className="task-title">
                      <p>{item.title}</p>
                    </div>
                    <div className="task-desc">
                      <p>Point: {item.point}</p>
                      <p>Assigned To: {item.assignedTo}</p>
                    </div>
                    <button onClick={(e) => this.handleOnClick(item.id, e)}>Move To {this.props.move}</button>
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

export default CardComponent