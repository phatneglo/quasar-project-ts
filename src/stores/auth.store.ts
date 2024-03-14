import { defineStore } from 'pinia';
import { AuthService } from '../services/auth.service';
import {
  LoginCredentials,
  UserRegistration,
  AuthState,
  AppJwtPayload,
} from '../models/user.model';
import { Cookies } from 'quasar';

import { jwtDecode } from 'jwt-decode';
export const useAuthStore = defineStore('authStore', {
  state: (): AuthState => {
    const state: AuthState = {
      token: Cookies.get(process.env.COOKIES_TOKEN_NAME || 'app_token') || null,
      userid: null,
      parentuserid: null,
      userlevel: null,
      username: null,
    };

    if (state.token) {
      const decoded = jwtDecode<AppJwtPayload>(state.token);
      state.userid = decoded.values.userid || null;
      state.parentuserid = decoded.values.parentuserid;
      state.userlevel = decoded.values.userlevel;
      state.username = decoded.values.username;
    }

    return state;
  },
  getters: {
    isLoggedIn: (state) => {
      if (!state.token) {
        return false;
      }

      const decoded = jwtDecode(state.token);
      const expirationDate = decoded?.exp ? decoded.exp * 1000 : null; // Convert to milliseconds
      const isExpired = expirationDate ? Date.now() > expirationDate : false;

      if (isExpired) {
        state.token = null;
        Cookies.remove(process.env.COOKIES_TOKEN_NAME || 'app_token');
        return false;
      }

      return true;
    },
    getUserId: (state) => state.userid,
    getParentId: (state) => state.parentuserid,
    getUserLevel: (state) => state.userlevel,
    getUsername: (state) => state.username,
  },
  actions: {
    parseToken() {
      if (this.token) {
        const decoded = jwtDecode<AppJwtPayload>(this.token);
        this.userid = decoded.values.userid || null;
        this.parentuserid = decoded.values.parentuserid;
        this.userlevel = decoded.values.userlevel;
        this.username = decoded.values.username;
      }
    },
    async login(credentials: LoginCredentials) {
      const response = await AuthService.login(credentials);
      if (response.access_token) {
        this.token = response.access_token;
        this.parseToken();
        const options = { path: '/', secure: true };
        Cookies.set(
          process.env.COOKIES_TOKEN_NAME || 'app_token',
          response.access_token,
          options
        );
      }
    },

    async register(userData: UserRegistration) {
      await AuthService.register(userData);
    },

    logout() {
      this.token = null;
      this.userid = null;
      this.parentuserid = null;
      this.userlevel = null;
      this.username = null;
      const options = { path: '/', sameSite: 'None', secure: true };
      Cookies.remove(process.env.COOKIES_TOKEN_NAME || 'app_token', options);
    },
  },
});
