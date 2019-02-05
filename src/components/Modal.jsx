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

  handleInput(property, event) {
    event.preventDefault()
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
      <div style={modal}>
        <Modal.Header style={modalHeader}>Add New Task</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Form>
                  <Form.Field>
                    <label>Title</label>
                    <Input placeholder='Title' onChange={(e) => this.handleInput('title', e)}/>
                  </Form.Field>
                  <Divider />
                  <Form.Field>
                    <label>Description</label>
                    <Input placeholder='Description' onChange={(e) => this.handleInput('desc', e)} />
                  </Form.Field>
                  <Form.Field>
                    <label>Point</label>
                      <Input placeholder='Point' onChange={(e) => this.handleInput('point', e)} />
                  </Form.Field>
                  <Form.Field>
                    <label>Assigned To</label>
                    <Input placeholder='Assigned To' onChange={(e) => this.handleInput('assignedTo', e)} />
                  </Form.Field>
                  <Button type='submit' onClick={(e) => this.handleOnSubmit(e)}>Submit</Button>
                </Form>
              </Modal.Description>
            </Modal.Content>
      </div>
    )
  }
}

const modal = {
  padding: '8px'
}

const modalHeader = {
  marginBottom: '16px'
}

export default ModalComponent