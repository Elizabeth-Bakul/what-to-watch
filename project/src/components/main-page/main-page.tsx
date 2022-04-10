import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Footer from '../footer/footer';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';

import PromoFilm from '../promo-film/promo-film';
import MainPageContent from './main-page-content/main-page-content';

function MainPage(): JSX.Element {
  const { isDataLoaded, promoFilm } = useAppSelector((state) => state.DATA);
  const { films } = useAppSelector((state) => state.DATA);
  if (!isDataLoaded || promoFilm === null) {
    return <LoadingScreen />;
  }
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm?.backgroundImage} alt={promoFilm?.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>
        <PromoFilm promoFilm={promoFilm} />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MainPageContent films={films} />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
