import { STATUS_CHANGE, DELETE_TODO, ADD_TODO } from "../types/types";


export const addTodo = (currentItem) => {
  return {
    type: ADD_TODO,
    payload: currentItem
  }
};

export const statusChange = (updatedItem) => {
  return {
    type: STATUS_CHANGE,
    payload: updatedItem
  }
};

export const deleteTodo = (filteredItems) => {
  return {
    type: DELETE_TODO,
    payload: filteredItems
  }
};
