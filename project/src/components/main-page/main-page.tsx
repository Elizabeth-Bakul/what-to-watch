
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Footer from '../footer/footer';


import PromoFilm from '../promo-film/promo-film';
import { FilmDes } from '../../types/film';

import MainPageContent  from './main-page-content/main-page-content';

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
        <MainPageContent films={films} />
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
