import { FETCH_USER, LOGOUT_USER, LOGIN, AuthenticateTypes, UserType } from "../../types/authenticate.type";

export interface Authenticate {
  isAuth: boolean,
  access_token: string,
  user: UserType | undefined
}
const initialState: Authenticate = {
  isAuth: false,
  access_token: localStorage.getItem('access_token') || '',
  user: undefined
}

export function AuthenticateReducer(state = initialState, action: AuthenticateTypes){
  switch (action?.type) {
    case LOGIN:
      localStorage.setItem('access_token', action.payload.access_token);
      return { ...state, isAuth: true, token: action?.payload?.access_token, user: action.payload.user}
    case FETCH_USER:
      return { ...state, user: action.payload.user }
    case LOGOUT_USER:
      return { ...state, isAuth: false}
    default:
      return {...state};
  }
}