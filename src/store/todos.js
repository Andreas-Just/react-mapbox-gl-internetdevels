import { INIT_TODOS, DELETE_TODO } from '../constants/actionTypes';

export const initTodos = todos => ({
  type: INIT_TODOS,
  todos,
});
export const deleteTodo = todoId => ({
  type: DELETE_TODO,
  todoId,
});

const reduce = (todos = [], action) => {
  switch (action.type) {
    case INIT_TODOS:
      return action.todos;
    case DELETE_TODO:
      return todos.filter(todo => action.todoId !== todo.id);
    default:
      return todos;
  }
};

export default reduce;
