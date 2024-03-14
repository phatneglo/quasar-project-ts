<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-xs-12">
        <q-btn label="Add Todo" @click="showAddDialog = true" color="primary" />
        <q-dialog v-model="showAddDialog">
          <q-card>
            <todo-add-form @addTodo="addTodo" />
          </q-card>
        </q-dialog>

        <q-dialog v-model="showUpdateDialog">
          <q-card>
            <todo-update-form :todo="selectedTodo" @updateTodo="updateTodo" />
          </q-card>
        </q-dialog>

        <q-table
          :rows="todos"
          row-key="id"
          :columns="columns"
          virtual-scroll
          v-model:pagination="pagination"
        >
          <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn icon="edit" @click="editTodo(props.row)" />
              <q-btn icon="delete" @click="deleteTodo(props.row)" />
            </q-td>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { Todo } from '../models/todo.model';
import TodoAddForm from './TodoAddForm.vue';
import TodoUpdateForm from './TodoUpdateForm.vue';
const emit = defineEmits(['addTodo', 'updateTodo', 'deleteTodo']);
defineProps({
  todos: {
    type: Array as () => Todo[],
    required: true,
  },
});

const showAddDialog = ref(false);
const showUpdateDialog = ref(false);
const selectedTodo = ref({} as Todo);

const addTodo = (todo: Todo) => {
  emit('addTodo', todo);
  showAddDialog.value = false;
};

const editTodo = (todo: Todo) => {
  selectedTodo.value = todo;
  showUpdateDialog.value = true;
};

const updateTodo = (todo: Todo) => {
  emit('updateTodo', todo);
  showUpdateDialog.value = false;
};
const $q = useQuasar();

const deleteTodo = (todo: Todo) => {
  $q.dialog({
    title: 'Confirm',
    message: 'Are you sure you want to delete this todo?',
    ok: {
      label: 'Yes',
      color: 'positive',
    },
    cancel: {
      label: 'No',
      color: 'negative',
    },
  }).onOk(() => {
    emit('deleteTodo', todo);
  });
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
  {
    name: 'actions',
    required: true,
    label: 'Actions',
    align: 'left',
    field: 'actions',
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
