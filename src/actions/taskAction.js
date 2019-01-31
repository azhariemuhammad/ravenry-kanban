import * as types from '../types'
import {taskRef}  from '../fire'

export const fetchTasksSucces = (tasks) => {
  console.log('masuk sinin')
  return {
    type: types.FETCH_TASKS_SUCCES,
    payload: {tasks}
  }
}

// export const fetchTasks = () => {
//   return (dispatch) => {
//     taskRef.on('value', snapshot => {
//       console.log('ini snap', snapshot.val())
//       dispatch(fetchTasksSucces(snapshot.val()))
//     })
//   }
// }

export const fetchTasks = () => async dispatch => {
    taskRef.on("value", snapshot => {
      dispatch({
        type: types.FETCH_TASKS,
        payload: snapshot.val()
      });
    });
};