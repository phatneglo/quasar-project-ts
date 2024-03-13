import { api } from '../boot/axios';

import { LoginCredentials, UserRegistration } from '../models/user.model';
export const AuthService = {
  async login(credentials: LoginCredentials) {
    const response = await api.post('/user/login', credentials, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    if (response.status !== 200) {
      throw new Error(response.data.details);
    }

    return response.data;
  },

  async register(userData: UserRegistration) {
    const response = await api.post('/user/register', userData);
    if (response.status !== 200) {
      throw new Error(response.data.details);
    }
    return response.data;
  },
};
