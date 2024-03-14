<template>
  <q-page class="flex flex-center">
    <q-card class="full-width">
      <q-card-section>
        <div class="text-h6">Register</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="register" class="q-gutter-md">
          <q-input filled v-model="username" label="Username" />
          <q-input filled v-model="email" label="Email" />
          <q-input filled v-model="password" label="Password" type="password" />
          <div>
            <q-btn label="Register" type="submit" color="primary" />
          </div>
        </q-form>
      </q-card-section>

      <q-card-section>
        <p>
          Already have an account?
          <router-link to="/login">Login</router-link>
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
const email = ref('');
const password = ref('');

const register = async () => {
  try {
    await authStore.register({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    $q.notify({
      color: 'positive',
      position: 'top',
      message: 'Registration successful',
      icon: 'check_circle',
    });
    router.push('/login');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    $q.notify({
      color: 'negative',
      position: 'top',
      message: error.response?.data.detail || 'Registration failed',
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
