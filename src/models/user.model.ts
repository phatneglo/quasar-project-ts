import { JwtPayload } from 'jwt-decode';

export enum AccessLevel {
  Anonymous = 0,
  Member = 3,
  Admin = 1,
  Manager = 2,
}

export interface LoginCredentials {
  username: string;
  password: string;
  expire?: number | null;
}

export interface UserRegistration {
  username: string;
  password: string;
  email: string;
}

export interface AuthState {
  token: string | null;
  userid: string | null;
  parentuserid: string | null;
  userlevel: string | null;
  username: string | null;
}

interface AppValues {
  userid: string;
  parentuserid: string;
  userlevel: string;
  username: string;
}

export interface AppJwtPayload extends JwtPayload {
  values: AppValues;
}
