<template>
  <q-card-section>
    <q-form @submit.prevent="emitAddTodo" class="q-gutter-md">
      <q-input filled v-model="localTodo.title" label="Title" />
      <q-input filled v-model="localTodo.description" label="Description" />
      <q-btn label="Add Todo" type="submit" color="primary" />
    </q-form>
  </q-card-section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Todo } from '../models/todo.model';
const emit = defineEmits(['addTodo']);

const localTodo = ref({
  title: '',
  description: '',
} as Todo);

const emitAddTodo = () => {
  emit('addTodo', localTodo.value);
  localTodo.value = { title: '', description: '' } as Todo;
};
</script>
