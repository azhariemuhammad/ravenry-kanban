import * as types from '../types';


const uuidv1 = require('uuid/v1');

const initialState = {
  tasks: [
    {
      id: uuidv1(),
      title: 'foo',
      desc: 'bar',
      point: 123,
      assignedTo: 'shita',
    }
  ],
  todo: [],
  active: [],
  closed: []
}

function taskReducer (state = initialState, {type, payload}) {
  console.log(payload)
  switch (type) {
    case types.FETCH_TASKS: 
      return state
    case types.ADD_NEW_TASK:
      return {...state, tasks: [...state.tasks, payload]}
    case types.UPDATE_TASK_TO_TODO:
      return {...state, todo: [...state.todo, ...payload]}
    case types.REMOVE_ITEM_ON_TASK:
      return {...state, tasks: state.tasks.filter(({id}) => id !== payload)}
    default:
      return state;
  }
};

export default taskReducer