/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, MouseEvent } from 'react';
import { FilmDes } from '../../types/film';
import FilmDetailTab from './film-detail-tab/film-detail-tab';
import FilmOverviewTab from './film-overview-tab/film-overview-tab';
import FilmReviewsTab from './film-reviews-tab/film-reviews-tab';

enum FilmPageLinks {
  overview = 'Overview',
  details = 'Details',
  reviews = 'Reviews',
}

type TabsProps = {
  film: FilmDes
};

function Tabs({ film}: TabsProps): JSX.Element {
  const [currentLink, setCurrentLink] = useState(FilmPageLinks.overview);

  const handeClickOverviewTabLink = (evt: MouseEvent) => {
    evt.preventDefault();
    setCurrentLink(FilmPageLinks.overview);
  };

  const handeClickDetailsTabLink = (evt: MouseEvent) => {
    evt.preventDefault();
    setCurrentLink(FilmPageLinks.details);
  };

  const handeClickReviewsTabLink = (evt: MouseEvent) => {
    evt.preventDefault();
    setCurrentLink(FilmPageLinks.reviews);
  };

  const setClassActive = (link: FilmPageLinks) => {
    if (currentLink === link) {
      return 'film-nav__item--active';
    }

    return '';
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li
            className={`film-nav__item ${setClassActive(
              FilmPageLinks.overview,
            )}`}
          >
            <a
              href="#"
              className="film-nav__link"
              onClick={handeClickOverviewTabLink}
            >
              {FilmPageLinks.overview}
            </a>
          </li>
          <li
            className={`film-nav__item ${setClassActive(
              FilmPageLinks.details,
            )}`}
          >
            <a
              href="#"
              className="film-nav__link"
              onClick={handeClickDetailsTabLink}
            >
              {FilmPageLinks.details}
            </a>
          </li>
          <li
            className={`film-nav__item ${setClassActive(
              FilmPageLinks.reviews,
            )}`}
          >
            <a
              href="#"
              className="film-nav__link"
              onClick={handeClickReviewsTabLink}
            >
              {FilmPageLinks.reviews}
            </a>
          </li>
        </ul>
      </nav>
      {currentLink === FilmPageLinks.overview && (
        <FilmOverviewTab film={film} />
      )}
      {currentLink === FilmPageLinks.details && <FilmDetailTab film={film} />}
      {currentLink === FilmPageLinks.reviews && (
        <FilmReviewsTab filmId={film.id} />
      )}
    </div>
  );
}

export default Tabs;
