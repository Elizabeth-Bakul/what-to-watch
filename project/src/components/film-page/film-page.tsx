/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import MoreLike from '../more-like/more-like';
import Tab from '../tabs/tabs';
import { useAppSelector } from '../../hooks';
import { fetchReviewsAction } from '../../store/api-action';
import { store } from '../../store';
import { AppRoute } from '../../consts';

function FilmPage(): JSX.Element {
  const navigate = useNavigate();
  const { id: idParams } = useParams();
  const { films, reviews } = useAppSelector((state) => state);
  const film = films.find(({ id }) => id.toString() === idParams);
  useEffect(() => {
    if (!film) {
      navigate(AppRoute.NotFound);
      return;
    }
    store.dispatch(fetchReviewsAction(film.id));
  }, [film, navigate]);
  if (!film) {
    return <NotFoundPage />;
  }
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link
                  className="btn film-card__button"
                  to={`/films/${film.id}/review`}
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.posterImage}
                alt={film.name}
                width="218"
                height="327"
              />
            </div>

            <Tab film={film} reviews={reviews} />
          </div>
        </div>
      </section>
      <div className="page-content">
        <MoreLike films={films} genre={film.genre} />
        <Footer />
      </div>
    </>
  );
}

export default FilmPage;
