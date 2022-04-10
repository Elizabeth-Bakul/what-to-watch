/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import { Link, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import ReviewForm from '../review-form/review-form';
import { useEffect, useState } from 'react';
import { FilmDes } from '../../types/film';
import { getFilmById } from '../../services/api';
import LoadingScreen from '../loading-screen/loading-screen';
import {  AppRoute } from '../../consts';
import { useAppSelector } from '../../hooks';


function AddReviewPage(): JSX.Element {
  const { id: idParams } = useParams();
  const [film, setFilm] = useState<FilmDes | null>(null);
  const [loading, setLoading] = useState(true);
  const { authStatus } = useAppSelector((state) => state.USER);
  useEffect(() => {
    getFilmById(Number(idParams)).then((data) => {
      setFilm(data);
      setLoading(false);
    });
  }, [idParams]);

  if (authStatus !== 'AUTH') {
    return <Navigate to={AppRoute.Login} />;
  }
  if (loading) {
    return <LoadingScreen />;
  }
  if (!film) {
    return <NotFoundPage />;
  }
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">
                  {film.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={film.name}
            width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm filmId={film.id} />
      </div>
    </section>
  );
}

export default AddReviewPage;
