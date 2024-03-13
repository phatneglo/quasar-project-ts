import { api } from '../boot/axios';
import { Todo } from '../models/todo.model';
import { AxiosResponse } from 'axios';

export const TodoService = {
  async getTodos() {
    return api.get('/todo');
  },
  async createTodo(todo: Todo): Promise<AxiosResponse<Todo>> {
    return api.post<Todo>('/todo', todo);
  },
  async updateTodo(todo: Todo) {
    return api.put(`/todo/${todo.id}`, todo);
  },
  async deleteTodo(id: number) {
    return api.delete(`/todo/${id}`);
  },
};
