import * as types from '../types'

export const removeItemOnClosed = (id) => {
  return {
    type: types.REMOVE_ITEM_ON_CLOSED,
    payload: id
  }
}

export const editClosed = (task) => {
  const newData = {
    id: task.id,
    title: task.title,
    desc: task.desc,
    point: task.point,
    assignedTo: task.assignedTo,
  }
  return {
    type: types.EDIT_CLOSED,
    payload: newData
  }
}