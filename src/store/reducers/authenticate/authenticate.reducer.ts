import { UserEntity } from "../../../entity/user.entity";
import { FETCH_USER, LOGOUT_USER, LOGIN, AuthenticateTypes, UPDATE_USER_ONLINES } from "../../types/authenticate.type";

export interface Authenticate {
  isAuth: boolean,
  access_token: string,
  user: UserEntity | undefined
  user_onlines: Array<string>
}
const initialState: Authenticate = {
  isAuth: false,
  access_token: localStorage.getItem('access_token') || '',
  user: undefined,
  user_onlines: []
}

export function AuthenticateReducer(state = initialState, action: AuthenticateTypes) {
  switch (action?.type) {
    case LOGIN:
      return { ...state, isAuth: true, token: action?.payload?.access_token, user: action.payload.user }
    case FETCH_USER:
      return { ...state, user: action.payload.user }
    case LOGOUT_USER:
      return { ...state, isAuth: false }
    case UPDATE_USER_ONLINES:
      return { ...state, user_onlines: action.payload.listUserId }
    default:
      return { ...state };
  }
}