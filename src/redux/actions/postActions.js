import { STATUS_CHANGE, DELETE_TODO, ADD_TODO } from "../types/types";


export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload
  }
};

export const statusChange = (payload) => {
  return {
    type: STATUS_CHANGE,
    payload
  }
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload
  }
};
