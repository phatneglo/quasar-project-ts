<template>
  <q-page>
    <todo-list
      :todos="todos"
      @addTodo="addTodo"
      @updateTodo="updateTodo"
      @deleteTodo="deleteTodo"
    />
  </q-page>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TodoList from 'components/TodoList.vue';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.model';
const todos = ref<Todo[]>([]);
onMounted(async () => {
  try {
    const response = await TodoService.getTodos();
    todos.value = response.data;
  } catch (error) {
    // Handle error
  }
});
const addTodo = async (todo: Todo) => {
  try {
    const response = await TodoService.createTodo(todo);
    const newTodo: Todo = response.data;
    todos.value.push(newTodo);
  } catch (error) {
    // Handle error
  }
};
const updateTodo = async (updatedTodo: Todo) => {
  try {
    await TodoService.updateTodo(updatedTodo);
    const index = todos.value.findIndex((todo) => todo.id === updatedTodo.id);
    if (index !== -1) {
      todos.value[index] = updatedTodo;
    }
  } catch (error) {
    // Handle error
  }
};
const deleteTodo = async (deletedTodo: Todo) => {
  try {
    await TodoService.deleteTodo(deletedTodo.id);
    const index = todos.value.findIndex((todo) => todo.id === deletedTodo.id);
    if (index !== -1) {
      todos.value.splice(index, 1);
    }
  } catch (error) {
    // Handle error
  }
};
</script>
