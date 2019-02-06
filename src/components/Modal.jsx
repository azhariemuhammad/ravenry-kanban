import React from 'react';
import { 
  Button,
  Input,
  Modal,
  Divider,
  Form,
  Icon
} from 'semantic-ui-react'

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: '',
      desc: '',
      point: 1,
      assignedTo: '',
      onEdit: false
    };
  }

  componentWillMount() {
    if (this.props.editedTask) {
      const {editedTask} = this.props
      this.setState({ id: editedTask.id })
      this.setState({ title: editedTask.title })
      this.setState({ desc: editedTask.desc })
      this.setState({ point: editedTask.point })
      this.setState({ assignedTo: editedTask.assignedTo })
      this.setState({ onEdit: true })
    }
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
    alert('success add')
  }

  handleOnEdit(e) {
    e.preventDefault()
    this.props.handleOnEditTask(this.state)
    alert('success edit')
  }

  handleRemoveTask(id, e) {
    alert('success remove')
    e.preventDefault()
    this.props.removeTask(id)
  }

  render() {
    return (
      <div style={modal}>
        <Modal.Header style={modalHeader}> {(!this.state.onEdit) ? 'Add New' : 'Edit'} Task</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Form>
                  <Form.Field>
                    <label>Title</label>
                    <Input placeholder='Title' value={this.state.title} onChange={(e) => this.handleInput('title', e)}/>
                  </Form.Field>
                  <Divider />
                  <Form.Field>
                    <label>Description</label>
                    <Input placeholder='Description' value={this.state.desc} onChange={(e) => this.handleInput('desc', e)} />
                  </Form.Field>
                  <Form.Field>
                    <label>Point</label>
                      <select value={this.state.point} onChange={(e) => this.handleInput('point', e)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                  </Form.Field>
                  <Form.Field>
                    <label>Assigned To</label>
                    <Input placeholder='Assigned To' value={this.state.assignedTo} onChange={(e) => this.handleInput('assignedTo', e)} />
                  </Form.Field>
                  {(!this.state.onEdit) ? <Button type='submit' onClick={(e) => this.handleOnSubmit(e)}>Submit</Button>
                    : 
                    <div className="flex-around">  
                      <Button primary type='submit' onClick={(e) => this.handleOnEdit(e)}>Edit</Button>
                      <Button  color='red' type='submit' onClick={(e) => this.handleRemoveTask(this.state.id, e)}><Icon name='remove'/></Button>
                    </div>
                  }
                  
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