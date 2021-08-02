import { UserEntity } from "../../entity/user.entity"

export const FETCH_USER = 'FETCH_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const LOGIN = 'LOGIN'
export const UPDATE_USER_ONLINES = 'UPDATE_USER_ONLINES'


interface fetchUserType {
  type: typeof FETCH_USER,
  payload: {
    user: UserEntity | undefined
  }
}

interface updateUserOnlines {
  type: typeof UPDATE_USER_ONLINES,
  payload: {
    listUserId: Array<string>
  }
}

interface logoutType {
  type: typeof LOGOUT_USER
}

interface LoginType {
  type: typeof LOGIN
  payload: {
    access_token: string,
    user: UserEntity
  }
}
export type AuthenticateTypes = LoginType
  | fetchUserType
  | logoutType
  | updateUserOnlines