
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Footer from '../footer/footer';

import GenresList from '../genres-list/genres-list';
import PromoFilm from '../promo-film/promo-film';
import { FilmDes } from '../../types/film';
import FilmList from '../film-list/film-list';


type PromoFilmProps = {
  films: FilmDes[];
};

function MainPage({ films }: PromoFilmProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>
        <PromoFilm
          title={films[0].name}
          genre={films[0].genre}
          yearRelease={films[0].released}
        />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <div className="catalog__films-list">
            <FilmList films={films} />
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
