import { FilmDes } from '../../types/film';
import CardFilm from '../card-film/card-film';
import { useState } from 'react';

type FilmListProps = {
  films: FilmDes[];
};


function FilmList({ films }: FilmListProps): JSX.Element {
  const [, setActiveFilm] = useState<null | number>(null);
  const handleMouseOnCard = (id: number) => {
    setActiveFilm(id);
  };
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <CardFilm key={film.id} film={film} onMouseOver={() => handleMouseOnCard(film.id)} />
      ))}
    </div>
  );
}

export default FilmList;
