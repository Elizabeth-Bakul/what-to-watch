import Footer from '../footer/footer';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import FilmList from '../film-list/film-list';
import { useAppSelector } from '../../hooks';


function MyListPage(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="visually-hidden">WTW</h1>
        <UserBlock />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={films} />
      </section>
      <Footer />
    </div>
  );
}

export default MyListPage;
