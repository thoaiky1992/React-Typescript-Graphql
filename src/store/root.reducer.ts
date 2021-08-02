import { combineReducers } from "redux";
import { AuthenticateReducer } from "./reducers/authenticate/authenticate.reducer";

export const rootReducers = combineReducers({
  auth: AuthenticateReducer
})
export type RootState = ReturnType<typeof rootReducers>