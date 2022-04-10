import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts';

import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import MyListPage from '../my-list-page/my-list-page';
import FilmPage from '../film-page/film-page';
import AddReviewPage from '../add-review-page/add-review-page';
import PlayerPage from '../player-page/player-page';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { useAppSelector } from '../../hooks';
import { checkAuthAction } from '../../store/api-action';
import { store } from '../../store/store';

store.dispatch(checkAuthAction());
function App(): JSX.Element {
  const { authStatus } = useAppSelector((state) => state.USER);
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={authStatus}>
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<FilmPage />} />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute authorizationStatus={authStatus}>
              <AddReviewPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<PlayerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
