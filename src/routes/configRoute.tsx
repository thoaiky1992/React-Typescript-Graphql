import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, RouteComponentProps, RouteProps } from "react-router";
import { Loading } from "../components/common/Loading";
import axiosInstance from "../config/axios";
import { AuthLayout } from "../layouts/AuthLayout";
import { DefaultPaylout } from "../layouts/DefaultLayout";
import { fetchUserAction } from "../store/actions/authenticate/authenticate.action";

export enum TYPE_LAYOUTS {
  AUTH,
  DEFAULT
}

export interface PrivateRouteProps extends RouteProps {
  exact?: boolean;
  path: string;
  isAuth: boolean;
  layout: TYPE_LAYOUTS,
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> | undefined;
}
export const CustomRoute = (props: PrivateRouteProps) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchCurrentUser = async () => {
    const result = await axiosInstance.get('/users/fetch-current-user');
    dispatch(fetchUserAction(result.data))
    setLoading(false);
  }

  useEffect(() => {
    if (props.isAuth) {
      fetchCurrentUser()
    }
  }, [])

  if (loading && props.isAuth) return <Loading />

  const ChildrenComponent: any = () =>
  (
    <Route
      exact={props.exact}
      path={props.path}
      component={props.component}
    />
  )
  switch (props.layout) {
    case TYPE_LAYOUTS.AUTH:
      return (
        <AuthLayout>
          <ChildrenComponent />
        </AuthLayout>
      );
    case TYPE_LAYOUTS.DEFAULT:
      return (
        <DefaultPaylout>
          <ChildrenComponent />
        </DefaultPaylout>
      )
    default:
      return (
        <DefaultPaylout>
          <ChildrenComponent />
        </DefaultPaylout>
      )
  }

}