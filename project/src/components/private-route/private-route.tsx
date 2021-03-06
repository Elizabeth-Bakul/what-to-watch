import { Navigate } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import LoginPage from '../login-page/login-page';


type PrivateRouteProps = RouteProps & {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children } = props;
  if (children.type !== LoginPage) {
    return authorizationStatus === AuthorizationStatus.Authorized ? (
      children
    ) : (
      <Navigate to={AppRoute.Login} />
    );
  }

  return authorizationStatus === AuthorizationStatus.Authorized ? (
    <Navigate to={AppRoute.Main} />
  ) : (
    children
  );
}

export default PrivateRoute;
