import { Users } from './users';

export interface AuthResponse {
  token: string;
  user: Users;
}
