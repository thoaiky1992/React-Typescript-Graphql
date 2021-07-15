import { ForgotPassword } from "../pages/auth/forgot-password";
import { LoginPage } from "../pages/auth/login";
import { RegisterPage } from "../pages/auth/Register";
import { ChatPage } from "../pages/chat/chat";
import { PrivateRouteProps, TYPE_LAYOUTS } from "./configRoute";

export const ListRoutes: PrivateRouteProps[] = [
  {
    path: '/login',
    isAuth: false,
    layout: TYPE_LAYOUTS.AUTH,
    component: LoginPage,
    exact: true
  },
  {
    path: '/register',
    isAuth: false,
    layout: TYPE_LAYOUTS.AUTH,
    component: RegisterPage,
    exact: true
  },
  {
    path: '/forgot-password',
    isAuth: false,
    layout: TYPE_LAYOUTS.AUTH,
    component: ForgotPassword,
    exact: true
  },
  {
    path: '/chat',
    isAuth: true,
    layout: TYPE_LAYOUTS.DEFAULT,
    component: ChatPage,
    exact: true
  }
]