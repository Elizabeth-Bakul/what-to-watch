import {useEffect } from 'react';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Footer from '../footer/footer';
import { useAppSelector } from '../../hooks';
import {
  fetchFilmsAction,
  fetchPromoFilmAction
} from '../../store/api-action';
import { store } from '../../store';
import LoadingScreen from '../loading-screen/loading-screen';

import PromoFilm from '../promo-film/promo-film';

import MainPageContent from './main-page-content/main-page-content';

function MainPage(): JSX.Element {
  const promoFilm = useAppSelector((state) => state.promoFilm);
  const films = useAppSelector((state) => state.films);
  const isDataLoaded = useAppSelector((state) => state.isDataLoaded);
  useEffect(() => {
    store.dispatch(fetchFilmsAction());
    store.dispatch(fetchPromoFilmAction());
  }, []);
  if (!isDataLoaded) {
    return <LoadingScreen />;
  }
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={promoFilm?.backgroundImage}
            alt={promoFilm?.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>
        <PromoFilm promoFilm={promoFilm} />
      </section>

      <div className="page-content">
        <MainPageContent films={films} />
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
