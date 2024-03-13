import { api } from '../boot/axios';
import { Todo } from '../models/todo.model';

export const TodoService = {
  async getTodos() {
    return api.get('/todo');
  },
  async createTodo(todo: Todo) {
    return api.post('/todo', todo);
  },
  // ... other todo-related methods
};
