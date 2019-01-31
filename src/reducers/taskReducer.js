import * as types from '../types';


const initialState = {
  tasks: []
}

function taskReducer (state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case types.FETCH_TASKS: 
    console.log(action.payload)
      return { ...state, tasks: action.payload}
    default:
      return state;
  }
};

export default taskReducer