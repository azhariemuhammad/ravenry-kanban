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
