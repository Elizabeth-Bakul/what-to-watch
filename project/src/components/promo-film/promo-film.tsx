import { useNavigate } from 'react-router-dom';
import { FilmDes } from '../../types/film';
import { AuthorizationStatus } from '../../consts';
import {useAppSelector } from '../../hooks';
import AddMyListBotton from '../add-my-list-botton/add-my-list-botton';
type FilmPromoProps = {
  promoFilm: FilmDes;
};

function PromoFilm({ promoFilm }: FilmPromoProps): JSX.Element {
  const navigate = useNavigate();
  const { authStatus } = useAppSelector((state) => state.USER);
  const handeClickPlayerBtn = () => navigate(`/player/${promoFilm.id}`);
  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          {promoFilm && (
            <img
              src={promoFilm.posterImage}
              alt={promoFilm.name}
              width="218"
              height="327"
            />
          )}
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{promoFilm && promoFilm.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">
              {promoFilm && promoFilm.genre}
            </span>
            <span className="film-card__year">
              {promoFilm && promoFilm.released}
            </span>
          </p>

          <div className="film-card__buttons">
            <button
              className="btn btn--play film-card__button"
              type="button"
              onClick={handeClickPlayerBtn}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            {AuthorizationStatus.Authorized === authStatus && (
              <AddMyListBotton film={promoFilm} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoFilm;
