import * as types from '../types'

export const updateTodoToActive = (tasks, id) => {
  var temp = tasks.filter(item => {
    return item.id === id
  })
  return (dispatch, getState) => {
    dispatch(moveTodo(temp))
    dispatch(removeItemOnTodo(id))
  }
}


export const editTodo = (task) => {
  const newData = {
    id: task.id,
    title: task.title,
    desc: task.desc,
    point: task.point,
    assignedTo: task.assignedTo,
  }
  return {
    type: types.EDIT_TODO,
    payload: newData
  }
}

export const moveTodo = (item) => {
  return {
    type: types.UPDATE_TODO_TO_ACTIVE,
    payload: item
  }
}

export const removeItemOnTodo = (id) => {
  return {
    type: types.REMOVE_ITEM_ON_TODO,
    payload: id
  }
}
