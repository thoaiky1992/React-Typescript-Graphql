export const FETCH_USER = 'FETCH_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const LOGIN = 'LOGIN'

interface fetchUserType{
  type: typeof FETCH_USER,
  payload: {
    user: UserType | undefined
  }
}

interface logoutType{
  type: typeof LOGOUT_USER
}

export interface UserType {
  _id: string;
  email: string;
  username: string
  avatar: string;
  timestamps: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
interface LoginType {
  type: typeof LOGIN
  payload: {
    access_token: string,
    user: UserType
  }
}
export type AuthenticateTypes = LoginType 
| fetchUserType
| logoutType