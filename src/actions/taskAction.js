import * as types from '../types'

const uuidv1 = require('uuid/v1');

export const fetchTasks = () => {
  return {
    type: types.FETCH_TASKS,
  }
};

export const addTask = (task) => {
  const newData = {
    id: uuidv1(),
    title: task.title,
    desc: task.desc,
    point: task.point,
    assignedTo: task.assignedTo,
  }
  return {
    type: types.ADD_NEW_TASK,
    payload: newData
  }
    
}

export const updateTaskToTodo = (tasks, id) => {
  var temp = tasks.filter(item => {
    return item.id === id
  })
  return (dispatch, getState) => {
    dispatch(moveTask(temp))
    dispatch(removeItemOnTask(id))
  }
}

export const moveTask = (item) => {
  return {
    type: types.UPDATE_TASK_TO_TODO,
    payload: item
  }
}

export const removeItemOnTask = (id) => {
  return {
    type: types.REMOVE_ITEM_ON_TASK,
    payload: id
  }
}