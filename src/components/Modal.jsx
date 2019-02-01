import React from 'react';
import { 
  Button,
  Header,
  Input,
  Modal,
  Divider,
  Form,
  Label
} from 'semantic-ui-react'

import './Modal.css'

const handleOnSubmit = (e, {props}) => {
  e.preventDefault()
  props.handleOnSubmitTask()
}
class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      point: '',
      assignedTo: '',
    };
  }

  handleInput(event, property) {
    const newState = event.target.value  

    if (property === 'title') {
      this.setState({ title: newState })
    }
    if (property === 'desc') {
      this.setState({ desc: newState })
    }
    if (property === 'point') {
      this.setState({ point: newState })
    }
    if (property === 'assignedTo') {
      this.setState({ assignedTo: newState })
    }
  }

  handleOnSubmit(e) {
    e.preventDefault()
    this.props.handleOnSubmitTask(this.state)
  }


  render() {
    return (
      <div>
        <Modal.Header>Add New Task</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Form>
                  <Form.Field>
                    <label>Title</label>
                    <Input placeholder='Title' onChange={(e) => this.handleInput(e, 'title')}/>
                  </Form.Field>
                  <Divider />
                  <Form.Field>
                    <label>Description</label>
                    <Input placeholder='Description' onChange={(e) => this.handleInput(e, 'desc')} />
                  </Form.Field>
                  <Form.Field>
                    <label>Point</label>
                      <Input placeholder='Point' onChange={(e) => this.handleInput(e, 'point')} />
                  </Form.Field>
                  <Form.Field>
                    <label>Assigned To</label>
                    <Input placeholder='Assigned To' onChange={(e) => this.handleInput(e, 'assignedTo')} />
                  </Form.Field>
                  <Button type='submit' onClick={(e) => this.handleOnSubmit(e)}>Submit</Button>
                </Form>
              </Modal.Description>
            </Modal.Content>
      </div>
    )
  }
}

export default ModalComponent