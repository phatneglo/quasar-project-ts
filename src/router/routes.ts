import { RouteRecordRaw } from 'vue-router';
import { AccessLevel } from 'src/models/user.model';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'todos',
        component: () => import('pages/TodoPage.vue'),
        meta: { access_level: [AccessLevel.Member, AccessLevel.Admin] },
      },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      {
        path: 'register',
        component: () => import('pages/RegistrationPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
