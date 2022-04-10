import { Fragment } from 'react';
import { FilmDes } from '../../../types/film';

type FilmOverviewProps = {
  film: FilmDes;
};
const RANK_TITLES = [
  { rank: 10, title: 'Awesome' },
  { rank: 8, title: 'Very good' },
  { rank: 5, title: 'Good' },
  { rank: 3, title: 'Normal' },
  { rank: 0, title: 'Bad' },
];

const getRankTitle = (rating: number) =>
  RANK_TITLES.find(({ rank }) => rank <= rating)?.title ?? '';

function FilmOverviewTab({ film }: FilmOverviewProps): JSX.Element {

  return (
    <Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">
            {getRankTitle(film.rating)}
          </span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director">
          <strong>Director: {film.director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>Starring: {film.starring.join(', ')}</strong>
        </p>
      </div>
    </Fragment>
  );
}

export default FilmOverviewTab;
