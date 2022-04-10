import { Link } from 'react-router-dom';
import { AppRoute } from '../../../consts';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import {logoutAction } from '../../../store/api-action';

function UserBlockSignOut(): JSX.Element {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.USER);
  return (
    <div className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyList}>
            <img
              src={user?.avatarUrl}
              alt="User avatar"
              width="63"
              height="63"
            />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link
          className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
          to={AppRoute.Main}
        >
          Sign out
        </Link>
      </li>
    </div>
  );
}

export default UserBlockSignOut;
