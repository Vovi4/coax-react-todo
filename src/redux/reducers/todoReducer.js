import { STATUS_CHANGE, DELETE_TODO, ADD_TODO, FETCH_POSTS } from "../types/types";


const initialState = {
  items: [],
  fetchedItems: []
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
    case FETCH_POSTS:
      return { 
        ...state,
        fetchedItems: action.payload 
      };
    default: return state
  }
}

export default todoReducer;
