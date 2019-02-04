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
