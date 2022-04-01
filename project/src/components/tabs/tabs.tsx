/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, MouseEvent } from 'react';
import { FilmDes } from '../../types/film';
import FilmDetailTab from './film-detail/film-detail';
import FilmOverviewTab from './film-overview/film-overview';
import FilmReviewsTab from './film-review/film-review';

enum FilmPageLinks {
  overview = 'Overview',
  details = 'Details',
  reviews = 'Reviews',
}

type TabsProps = {
  film: FilmDes;
};

function Tab({ film }: TabsProps): JSX.Element {
  const [currentLink, setCurrentLink] = useState(FilmPageLinks.overview);

  const clickOverviewTabLinkHandler = (evt: MouseEvent) => {
    evt.preventDefault();
    setCurrentLink(FilmPageLinks.overview);
  };

  const clickDetailsTabLinkHandler = (evt: MouseEvent) => {
    evt.preventDefault();
    setCurrentLink(FilmPageLinks.details);
  };

  const clickReviewsTabLinkHandler = (evt: MouseEvent) => {
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
              onClick={clickOverviewTabLinkHandler}
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
              onClick={clickDetailsTabLinkHandler}
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
              onClick={clickReviewsTabLinkHandler}
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
      {currentLink === FilmPageLinks.reviews && <FilmReviewsTab />}
    </div>
  );
}

export default Tab;
