import { Navigate } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const { authStatus } = useAppSelector((state) => state.USER);

  return authStatus === AuthorizationStatus.Authorized ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
