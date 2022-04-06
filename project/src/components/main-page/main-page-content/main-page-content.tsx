/* eslint-disable react-hooks/exhaustive-deps */
import { FilmDes } from '../../../types/film';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks';
import FilmList from '../../film-list/film-list';
import GenresList from '../../genres-list/genres-list';

const COUNT_FILM_LOADED = 8;

type MainPageContentProps = {
  films: FilmDes[];
};

function MainPageContent({ films }: MainPageContentProps): JSX.Element {
  const [genres, setGenres] = useState<string[]>([]);
  const currentGenre = useAppSelector((state) => state.genre);
  const filmsOfGenre = films.filter(({ genre }) => currentGenre === 'All genres' || currentGenre === genre);

  useEffect(() => {
    setGenres(['All genres', ...new Set(films.map(({ genre }) => genre))]);
  }, [films]);

  const [step, setStep] = useState(COUNT_FILM_LOADED);


  const changeGenre = () => {
    setStep(COUNT_FILM_LOADED);
  };

  useEffect(() => {
    changeGenre();
  }, [currentGenre]);

  useEffect(() => {
    setStep(COUNT_FILM_LOADED);
  }, [currentGenre]);

  const handleShowMoreFilms = () => {
    setStep(step + COUNT_FILM_LOADED);
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList genres={genres} />


      <FilmList films={filmsOfGenre.slice(0, step)} />

      {filmsOfGenre.length > step && (
        <div className="catalog__more">
          <button
            onClick={handleShowMoreFilms}
            className="catalog__button"
            type="button"
          >
            Show more
          </button>
        </div>
      )}
    </section>
  );
}
export default MainPageContent;
