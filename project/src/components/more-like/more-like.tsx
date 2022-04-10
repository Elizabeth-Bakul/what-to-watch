import { useEffect, useState } from 'react';
import { FilmDes } from '../../types/film';
import FilmList from '../film-list/film-list';
import LoadingScreen from '../loading-screen/loading-screen';
import { getSimilarFilms } from '../../services/api';
import { COUNT_MORE_FILM_LOADED } from '../../consts';
type MoreLikeProps = {
  filmId: number;
};

function MoreLike({ filmId }: MoreLikeProps): JSX.Element {
  const [similarFilms, setSimilarFilms] = useState<FilmDes[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getSimilarFilms(filmId).then((data) => {
      setSimilarFilms(data);
      setLoading(false);
    });
  }, [filmId]);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <FilmList films={similarFilms.slice(0, COUNT_MORE_FILM_LOADED)} />
    </section>
  );
}

export default MoreLike;
