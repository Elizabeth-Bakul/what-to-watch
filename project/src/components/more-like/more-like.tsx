import { FilmDes } from '../../types/film';
import FilmList from '../film-list/film-list';

type MoreLikeProps = {
  films: FilmDes[];
  genre: string;
};

function MoreLike({ films, genre }: MoreLikeProps): JSX.Element {
  const likeFilms = films.filter((film) => film.genre === genre);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <FilmList films={likeFilms} />
    </section>
  );
}

export default MoreLike;
