import { FETCH_USER, LOGOUT_USER, LOGIN, AuthenticateTypes, UserType } from "../../types/authenticate.type";

export function fetchUserAction(user: UserType | undefined): AuthenticateTypes {
  return {
    type: FETCH_USER,
    payload: {
      user
    }
  }
}
export function loginAction(payload: {access_token: string, user: UserType}): AuthenticateTypes {
  return {
    type: LOGIN,
    payload
  }
}
export function logoutAction(): AuthenticateTypes {
  return {
    type: LOGOUT_USER
  }
}