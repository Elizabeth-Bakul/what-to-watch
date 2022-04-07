import { useNavigate } from 'react-router-dom';
import { FilmDes } from '../../types/film';
import { AppRoute } from '../../consts';
type FilmPromoProps = {
  promoFilm: FilmDes| null;
};

function PromoFilm({ promoFilm }: FilmPromoProps): JSX.Element {
  const navigate = useNavigate();

  const onPlayerBtnClickHandler = () => navigate(AppRoute.Player);
  const onMyListBtnClickHandler = () => navigate(AppRoute.MyList);
  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          {promoFilm && <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />}
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{promoFilm && promoFilm.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{promoFilm && promoFilm.genre}</span>
            <span className="film-card__year">{promoFilm && promoFilm.released}</span>
          </p>

          <div className="film-card__buttons">
            <button
              className="btn btn--play film-card__button"
              type="button"
              onClick={onPlayerBtnClickHandler}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button
              className="btn btn--list film-card__button"
              type="button"
              onClick={onMyListBtnClickHandler}
            >
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoFilm;
