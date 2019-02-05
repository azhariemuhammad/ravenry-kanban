import * as types from '../types'

export const removeItemOnClosed = (id) => {
  return {
    type: types.REMOVE_ITEM_ON_CLOSED,
    payload: id
  }
}
