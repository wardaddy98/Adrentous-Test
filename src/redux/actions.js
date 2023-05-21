import {
  ADD_LIST_ITEM,
  DELETE_LIST_ITEM,
  SET_LISTS,
  UPDATE_LIST_ITEM
} from "./typeConstants";

export const setLists = (lists) => ({
  type: SET_LISTS,
  payload: lists
});

export const deleteListItem = (id) => ({
  type: DELETE_LIST_ITEM,
  payload: id
});

export const updateListItem = (listData) => ({
  type: UPDATE_LIST_ITEM,
  payload: listData
});

export const addListItem = (listData) => ({
  type: ADD_LIST_ITEM,
  payload: listData
});
