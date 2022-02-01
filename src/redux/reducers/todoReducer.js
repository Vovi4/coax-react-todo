import { STATUS_CHANGE, DELETE_TODO, ADD_TODO } from "../types/types";


const initialState = {
  items: []
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: state.items.concat(action.payload)
      };
    case STATUS_CHANGE:
      return {
        ...state,
        items: action.payload
      };
    case DELETE_TODO:
      return {
        ...state,
        items: action.payload 
      };
    default: return state
  }
}

export default todoReducer;
