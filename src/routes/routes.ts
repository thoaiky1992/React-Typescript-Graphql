import { ForgotPassword } from "../pages/auth/forgot-password";
import { LoginPage } from "../pages/auth/login";
import { RegisterPage } from "../pages/auth/Register";
import { HomePage } from "../pages/chat/home";
import { ChatDetailPage } from "../pages/chat/chat-detail";
import { PrivateRouteProps, TYPE_LAYOUTS } from "./configRoute";
import { ChangePasswordPage } from "../pages/user/change-password";

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
    path: '/home',
    isAuth: true,
    layout: TYPE_LAYOUTS.DEFAULT,
    component: HomePage,
    exact: true
  },
  {
    path: '/',
    isAuth: true,
    layout: TYPE_LAYOUTS.DEFAULT,
    component: HomePage,
    exact: true
  },
  {
    path: '/chat/:id',
    isAuth: true,
    layout: TYPE_LAYOUTS.DEFAULT,
    component: ChatDetailPage,
    exact: true
  },
  {
    path: '/change-password',
    isAuth: true,
    layout: TYPE_LAYOUTS.DEFAULT,
    component: ChangePasswordPage,
    exact: true
  }
]