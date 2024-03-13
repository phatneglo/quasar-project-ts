<template>
  <q-card-section>
    <q-form @submit.prevent="emitUpdateTodo" class="q-gutter-md">
      <q-input filled v-model="localTodo.title" label="Title" />
      <q-input filled v-model="localTodo.description" label="Description" />
      <q-btn label="Update Todo" type="submit" color="primary" />
    </q-form>
  </q-card-section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Todo } from '../models/todo.model';
const emit = defineEmits(['updateTodo']);

const props = defineProps({
  todo: {
    type: Object as () => Todo,
    required: true,
  },
});

const localTodo = ref({} as Todo);

watch(
  props.todo,
  (newVal) => {
    localTodo.value = { ...newVal };
  },
  { immediate: true }
);

const emitUpdateTodo = () => {
  emit('updateTodo', localTodo.value);
};
</script>
