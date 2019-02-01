import * as types from '../types';


const initialState = {
  tasks: []
}

function taskReducer (state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case types.FETCH_TASKS: 
      return { ...state, tasks: action.payload}
    case types.ADD_NEW_TASK:
      return state
    default:
      return state;
  }
};

export default taskReducer