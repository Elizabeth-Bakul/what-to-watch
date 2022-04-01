import { FilmDes } from '../../types/film';
import CardFilm from '../card-film/card-film';

type FilmListProps = {
  films: FilmDes[];
};


function FilmList({ films }: FilmListProps): JSX.Element {

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <CardFilm key={film.id} film={film}  />
      ))}
    </div>
  );
}

export default FilmList;
