/* eslint-disable jsx-a11y/anchor-is-valid */
import { FilmDes } from '../../types/film';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PlayerPreview from '../player-preview/player-preview';

type FilmCardProps = {
  film: FilmDes
};
function CardFilm({ film }: FilmCardProps): JSX.Element {
  const [isActive, setIsActive] = useState(false);
  let activeTimer: NodeJS.Timeout;

  const onMouseOverHanlder = () => {
    activeTimer = setTimeout(() => setIsActive(true), 1000);
  };

  const onMouseLeaveHanlder = () => {
    if(activeTimer) {
      clearTimeout(activeTimer);
    }

    setIsActive(false);
  };
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={onMouseOverHanlder}
      onMouseLeave={onMouseLeaveHanlder}
    >
      <div className="small-film-card__image">
        <PlayerPreview
          src={film.videoLink}
          poster={film.posterImage}
          isActive={isActive}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`/films/${film.id}`}
          onClick={() => clearTimeout(activeTimer)}
        >
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default CardFilm;
