import * as types from '../types'
import * as actionsTask from './taskAction'

const uuidv1 = require('uuid/v1');
const mockData = {
  title: 'Bikin Html',
  desc: 'bikin aja',
  point: 1,
  assignedTo: 'shita'
}

describe('actions', () => {
  it('should create an action to add a task', () => {
    const expectedAction = {
      type: types.ADD_NEW_TASK,
      payload: mockData
    }
    expect(actionsTask.addTask(mockData).title).toEqual(expectedAction.title)
  })
})