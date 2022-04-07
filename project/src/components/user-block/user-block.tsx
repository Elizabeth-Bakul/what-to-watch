/* eslint-disable jsx-a11y/anchor-is-valid */

import { useAppSelector } from '../../hooks';
import UserBlockLogin from './user-block-login/user-block-login';
import UserBlockSignOut from './user-block-logout/user-block-logout';

function UserBlock(): JSX.Element {
  const { authStatus } = useAppSelector((state) => state);
  return (
    <ul className="user-block">
      {authStatus === 'AUTH' ? <UserBlockSignOut /> : <UserBlockLogin />}
    </ul>
  );
}

export default UserBlock;
