/* eslint-disable react-hooks/exhaustive-deps */
import {  useState } from 'react';
import { getAllGenres, getFilmsByGenre } from '../../../helpers-funstion';
import GenresList from '../../genres-list/genres-list';
import { FilmDes } from '../../../types/film';
import ShowMoreButton from '../../show-more-button/show-more-button';
import FilmList from '../../film-list/film-list';

const COUNT_FILM_LOADED = 8;
type MainPageContentProps = {
  films: FilmDes[];
};


function MainPageContent({ films }: MainPageContentProps): JSX.Element {
  const allGenre = getAllGenres(films);
  const [genre, setGenre] = useState('All genres');
  const [step, setStep] = useState(COUNT_FILM_LOADED);
  const filmsOfGenre = getFilmsByGenre(films, genre);


  return (
    <>
      <GenresList
        currentGenre={genre}
        setGenre={setGenre}
        genres={allGenre}
        setCountFilmShow={setStep}
      />
      <FilmList films={filmsOfGenre.slice(0, step)} />
      {filmsOfGenre.length > step ? (
        <ShowMoreButton countFilmShow={step} setCountFilmShow={setStep} />
      ) : (
        ''
      )}
    </>
  );
}
export default MainPageContent;
