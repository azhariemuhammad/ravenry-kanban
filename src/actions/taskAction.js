import * as types from '../types'
import {taskRef}  from '../fire'

export const fetchTasksSucces = (tasks) => {
  console.log('masuk sinin')
  return {
    type: types.FETCH_TASKS_SUCCES,
    payload: {tasks}
  }
}

export const fetchTasks = () => async dispatch => {
    taskRef.child('todo').on("value", snapshot => {
      dispatch({
        type: types.FETCH_TASKS,
        payload: snapshot.val()
      });
    });
};

export const addTask = (task) => async dispatch => {
  const newData = {
    title: task.title,
    desc: task.desc,
    point: task.point,
    assignedTo: task.assignedTo
  }
  taskRef.child('todo').push(newData)
  dispatch({
    type: types.ADD_NEW_TASK
  })
}