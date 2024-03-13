<template>
  <div>
    <q-card class="full-width">
      <q-card-section>
        <div class="text-h6">Todos</div>
      </q-card-section>

      <q-card-section>
        <q-table
          :rows="todos"
          row-key="id"
          :columns="columns"
          virtual-scroll
          v-model:pagination="pagination"
        />
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="emitAddTodo" class="q-gutter-md">
          <q-input filled v-model="newTodo.title" label="Title" />
          <q-input filled v-model="newTodo.description" label="Description" />
          <q-btn label="Add Todo" type="submit" color="primary" />
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import { Todo } from '../models/todo.model';
const emit = defineEmits(['addTodo']);

defineProps({
  todos: {
    type: Array as () => Todo[],
    required: true,
  },
});

const newTodo = ref({
  title: '',
  description: '',
} as Todo);

const emitAddTodo = () => {
  emit('addTodo', newTodo.value);
  newTodo.value = { title: '', description: '' } as Todo;
};

const columns = [
  {
    name: 'title',
    required: true,
    label: 'Title',
    align: 'left',
    field: 'title',
  },
  {
    name: 'description',
    required: true,
    label: 'Description',
    align: 'left',
    field: 'description',
  },
];

const pagination = ref({
  sortBy: 'title',
  descending: false,
  page: 1,
  rowsPerPage: 5,
});
</script>

<style scoped>
.full-width {
  width: 100%;
  max-width: 400px;
}
</style>
