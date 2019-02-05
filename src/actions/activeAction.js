import * as types from '../types'

export const updateActiveToClosed = (tasks, id) => {
  var temp = tasks.filter(item => {
    return item.id === id
  })
  return (dispatch, getState) => {
    dispatch(moveActive(temp))
    dispatch(removeItemOnActive(id))
  }
}

export const editActive = (task) => {
  const newData = {
    id: task.id,
    title: task.title,
    desc: task.desc,
    point: task.point,
    assignedTo: task.assignedTo,
  }
  return {
    type: types.EDIT_ACTIVE,
    payload: newData
  }
}

export const moveActive = (item) => {
  return {
    type: types.UPDATE_ACTIVE_TO_CLOSED,
    payload: item
  }
}

export const removeItemOnActive = (id) => {
  return {
    type: types.REMOVE_ITEM_ON_ACTIVE,
    payload: id
  }
}
