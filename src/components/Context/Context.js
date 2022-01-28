import React, { useReducer, createContext, useMemo } from "react";
export const TodoContext = createContext();

export const ACTIONS = {
    STATUS_CHANGE: "STATUS-CHANGE",
    DELETE_TODO: "DELETE-TODO",
    INPUT_HANDLE: "INPUT-HANDLE",
    ADD_TODO: "ADD-TODO"
};

const initialState = {
    items: [],
    currentItem: ""
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INPUT_HANDLE:
            return {
                ...state, 
                currentItem: action.currentItem
            };
        case ACTIONS.ADD_TODO:
            return {
                ...state,
                
                items: action.items,
                currentItem: {
                    text: "", id: ""
                }
            };
        case ACTIONS.STATUS_CHANGE:
            return {
                ...state,
                items: action.updatedItem
            };
        case ACTIONS.DELETE_TODO:
            return {
                ...state,
                items: action.filteredItems
            };
        default:
            return state;
    }
};

export const statusChange = (updatedItem) => ({ type: ACTIONS.STATUS_CHANGE, updatedItem });
export const deleteTodo = (filteredItems) => ({ type: ACTIONS.DELETE_TODO, filteredItems });
export const inputHandle = (currentItem) => ({type: ACTIONS.INPUT_HANDLE, currentItem});
export const addTodo = (items) => ({type: ACTIONS.ADD_TODO, items})

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const contextValue = useMemo(() => {
        return { state, dispatch };
    }, [state, dispatch]);

    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    );
};