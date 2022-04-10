/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { FilmDes } from '../../types/film';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import { useNavigate, useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import MoreLike from '../more-like/more-like';
import Tab from '../tabs/tabs';
import { useAppSelector } from '../../hooks';
import { getFilmById } from '../../services/api';
import LoadingScreen from '../loading-screen/loading-screen';
import { AuthorizationStatus} from '../../consts';
import AddMyListBotton from '../add-my-list-botton/add-my-list-botton';

function FilmPage(): JSX.Element {
  const { id: idParams } = useParams();

  const navigate = useNavigate();
  const [film, setFilm] = useState<FilmDes | null>(null);
  const [loading, setLoading] = useState(true);
  const { authStatus } = useAppSelector((state) => state.USER);

  useEffect(() => {
    getFilmById(Number(idParams)).then((data) => {
      setFilm(data);
      setLoading(false);
    });
  }, [idParams]);
  if (loading) {
    return <LoadingScreen />;
  }
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
                  onClick={() => navigate(`/player/${film.id}`)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                {AuthorizationStatus.Authorized === authStatus && (
                  <AddMyListBotton film={film}/>
                )}
                {AuthorizationStatus.Authorized === authStatus && (
                  <Link
                    to={`/films/${film.id}/review`}
                    className="btn film-card__button"
                  >
                    Add review
                  </Link>
                )}
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

            <Tab film={film} />
          </div>
        </div>
      </section>
      <div className="page-content">
        <MoreLike filmId={film.id} />
        <Footer />
      </div>
    </>
  );
}

export default FilmPage;
