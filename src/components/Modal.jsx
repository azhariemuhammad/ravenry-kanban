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

const ModalComponent = () => {
  return (
    <div>
      <Modal.Header>Add New Task</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Form>
                <Form.Field>
                  <label>Title</label>
                  <Input placeholder='Title' />
                </Form.Field>
                <Divider />
                <Form.Field>
                  <label>Description</label>
                  <Input placeholder='Description' />
                </Form.Field>
                <Form.Field>
                  <label>Point</label>
                    <Input placeholder='Point' />
                </Form.Field>
                <Form.Field>
                  <label>Assigned To</label>
                  <Input placeholder='Assigned To' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
              </Form>
            </Modal.Description>
          </Modal.Content>
    </div>
          
  )
}

export default ModalComponent