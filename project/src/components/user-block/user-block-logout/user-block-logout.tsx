import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { logoutAction } from '../../../store/api-action';

function UserBlockSignOut(): JSX.Element {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.USER);
  return (
    <div className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={user?.avatarUrl} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item"></li>
      <Link
        className="user-block__link"
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(logoutAction());
        }}
        to="/main"
      >
        Sign out
      </Link>
    </div>
  );
}

export default UserBlockSignOut;
