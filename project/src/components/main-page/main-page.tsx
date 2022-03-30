import Header from '../header/header';
import Footer from '../footer/footer';
import CardFilm from '../card-film/card-film';
import GenresList from '../genres-list/genres-list';
import PromoFilm from '../promo-film/promo-film';


const countFilm = 20;
const filmsList = [...new Array(countFilm)].map((_, i) => i);

type PromoFilmProps = {
  title: string;
  genre: string;
  yearRelease: number;
};

function MainPage({ title, genre, yearRelease }: PromoFilmProps): JSX.Element {
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

        <Header />
        <PromoFilm title={title} genre={genre} yearRelease={yearRelease} />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <div className="catalog__films-list">
            {filmsList.map((film) => (
              <CardFilm key={film} />
            ))}
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
