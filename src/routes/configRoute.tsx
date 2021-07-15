import { useQuery } from "@apollo/client";
import React from "react";
import { useDispatch } from "react-redux";
import { Route, RouteComponentProps, RouteProps, useHistory } from "react-router";
import { FETCH_CURRENT_USER } from "../graphql/user/user.query";
import { AuthLayout } from "../layouts/AuthLayout";
import { DefaultPaylout } from "../layouts/DefaultLayout";
import { fetchUserAction } from "../store/actions/authenticate/authenticate.action";
import { UserType } from "../store/types/authenticate.type";


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
export const CustomRoute: React.FC<PrivateRouteProps> = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { data, loading } = useQuery<{ fetchUser: UserType }>(FETCH_CURRENT_USER);
  if (loading)
    return (
      <div className="page-loader-wrapper">
        <div className="loader">
          <div className="m-t-30">
            <img className="zmdi-hc-spin" src="assets/images/logo.svg" width="48" height="48" alt="Compass" />
          </div>
          <p>Please wait...</p>
        </div>
      </div>
    )
  if (props.isAuth)
    console.log(data?.fetchUser);

  (data) ? dispatch(fetchUserAction(data?.fetchUser)) : history.push('/');
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