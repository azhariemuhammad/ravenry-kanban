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
  switch (type) {
    /* TASKS_REDUCERS */
    case types.FETCH_TASKS: 
      return state
    case types.ADD_NEW_TASK:
      return {...state, tasks: [...state.tasks, payload]}
    case types.EDIT_TASK:
      return {...state, tasks: state.tasks.map(item => {
        if (item.id !== payload.id) {
          return item
        }
        return {...item, ...payload}
      })}
    case types.UPDATE_TASK_TO_TODO:
      return {...state, todo: [...state.todo, ...payload]}
    case types.REMOVE_ITEM_ON_TASK:
      return {...state, tasks: state.tasks.filter(({id}) => id !== payload)}
    
    /* TODO_REDUCERS */
    case types.EDIT_TODO:
      return {...state, todo: state.todo.map(item => {
        if (item.id !== payload.id) {
          return item
        }
        return {...item, ...payload}
      })}
    case types.UPDATE_TODO_TO_ACTIVE:
      return {...state, active: [...state.active, ...payload]}
    case types.EDIT_ACTIVE:
      return {...state, active: state.active.map(item => {
        if (item.id !== payload.id) {
          return item
        }
        return {...item, ...payload}
      })}
    case types.REMOVE_ITEM_ON_TODO:
      return {...state, todo: state.todo.filter(({id}) => id !== payload)}

    /* ACTIVE_REDUCERS */
    case types.UPDATE_ACTIVE_TO_CLOSED:
      return {...state, closed: [...state.closed, ...payload]}
    case types.REMOVE_ITEM_ON_ACTIVE:
      return {...state, active: state.active.filter(({id}) => id !== payload)}

    /* CLOSED_REDUCERS */
    case types.EDIT_CLOSED:
      return {...state, closed: state.closed.map(item => {
        if (item.id !== payload.id) {
          return item
        }
        return {...item, ...payload}
      })}
    case types.REMOVE_ITEM_ON_CLOSED:
      return {...state, closed: state.closed.filter(({id}) => id !== payload)}
    default:
      return state;
  }
};

export default taskReducer