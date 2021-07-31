import { UserEntity } from "../../../entity/user.entity";
import { FETCH_USER, LOGOUT_USER, LOGIN, AuthenticateTypes, UPDATE_USER_ONLINES } from "../../types/authenticate.type";

export function fetchUserAction(user: UserEntity | undefined): AuthenticateTypes {
  return {
    type: FETCH_USER,
    payload: {
      user
    }
  }
}
export function loginAction(payload: { access_token: string, user: UserEntity }): AuthenticateTypes {
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

export function updateUserOnlineAction(listUserId: Array<string>): AuthenticateTypes {
  return {
    type: UPDATE_USER_ONLINES,
    payload: {
      listUserId
    }
  }
}