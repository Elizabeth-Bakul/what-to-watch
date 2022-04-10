/* eslint-disable jsx-a11y/anchor-is-valid */
import { FilmDes } from '../../types/film';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PlayerPreview from '../player-preview/player-preview';

type FilmCardProps = {
  film: FilmDes
};
function CardFilm({ film }: FilmCardProps): JSX.Element {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  let activeTimer: NodeJS.Timeout;

  const handeOverMouse = () => {
    activeTimer = setTimeout(() => setIsActive(true), 1000);
  };

  const handeLeaveOverMouse = () => {
    if(activeTimer) {
      clearTimeout(activeTimer);
    }

    setIsActive(false);
  };
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handeOverMouse}
      onMouseLeave={handeLeaveOverMouse}
    >
      <div
        className="small-film-card__image"
        onClick={() => {navigate(`/films/${film.id}`);clearTimeout(activeTimer);}}
      >
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
