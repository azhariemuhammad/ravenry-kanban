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

export const addTask = (task) => async dispatch => {
  console.log(task)
  const newData = {
    title: task.title,
    desc: task.desc,
    point: task.point,
    assignedTo: task.assignedTo
  }
  const newTaskKey = taskRef.push().key
  console.log(task)
  taskRef.push(newData)
  dispatch({
    type: types.ADD_NEW_TASK
  })
}