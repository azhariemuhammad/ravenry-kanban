import React from 'react';

import './Card.css'

let temp = []

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      point: '',
      assignedTo: '',
    };
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(obj, key) {
    console.log('fooo')
    this.setState({
      title: obj[key].title,
      desc: obj[key].desc,
      point: obj[key].point,
      assignedTo: obj[key].assignedTo
    })
    // this.props.handleButton(this.state)
  }

  render() {
    let item;
    if (this.props.tasks) {
      item = this.props.tasks.tasks 
    }
    return (
      <div className="card">
        <div className="card-header">
          <h2>{ this.props.title }</h2>
        </div>
        <div className="card-content">
        <ul>
          {
            (this.props.tasks) && Object.keys(item).map(key => {
              return ( 
                <div className="task" key={key}>
                  <div className="task-title">
                    <p>{item[key].title}</p>
                  </div>
                  <div className="task-desc">
                    <p>Point: {item[key].point}</p>
                    <p>Assigned To: {item[key].assignedTo}</p>
                  </div>
                  <button onClick={this.handleOnClick(item, key)}>Move To Todo</button>
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