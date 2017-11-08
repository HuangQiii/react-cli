/**
 * action types
 */
export const ADD_TODO = 'Add_Todo';


/**
 * action creators
 */
export const addTodo = (text) => ({ type: ADD_TODO, text })