<template>
  <q-page>
    <todo-list-form :todos="todos" @addTodo="addTodo" />
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TodoListForm from 'components/TodoListForm.vue';
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
    await TodoService.createTodo(todo);
    todos.value.push(todo);
  } catch (error) {
    // Handle error
  }
};
</script>
