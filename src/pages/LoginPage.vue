<template>
  <q-page class="flex flex-center">
    <q-card class="full-width">
      <q-card-section>
        <div class="text-h6">Login</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="login" class="q-gutter-md">
          <q-input filled v-model="username" label="Username" />
          <q-input filled v-model="password" label="Password" type="password" />
          <div>
            <q-btn label="Login" type="submit" color="primary" />
          </div>
        </q-form>
      </q-card-section>

      <q-card-section>
        <p>
          Don't have an account?
          <router-link to="/register">Register</router-link>
        </p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth.store';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

const authStore = useAuthStore();
const router = useRouter();
const $q = useQuasar();

const username = ref('');
const password = ref('');

const login = async () => {
  try {
    await authStore.login({
      username: username.value,
      password: password.value,
    });
    router.push('/');
  } catch (error) {
    $q.notify({
      color: 'negative',
      position: 'top',
      message: 'Incorrect username or password',
      icon: 'report_problem',
    });
  }
};
</script>

<style scoped>
.full-width {
  width: 100%;
  max-width: 400px;
}
</style>
