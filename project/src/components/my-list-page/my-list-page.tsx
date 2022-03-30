import Footer from '../footer/footer';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import { FilmDes } from '../../types/film';
import FilmList from '../film-list/film-list';

type MyListPageProps = {
  films: FilmDes[];
};
function MyListPage({ films }: MyListPageProps): JSX.Element {
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
