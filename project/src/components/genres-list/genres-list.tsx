/* eslint-disable jsx-a11y/anchor-is-valid */
import { MouseEvent } from 'react';

type CatalogGenresListProps = {
  genres: string[];
  setCountFilmShow: (value: number) => void;
  setGenre: (genre: string) => void;
  currentGenre: string;
};
function GenresList({ genres,setCountFilmShow, setGenre, currentGenre }: CatalogGenresListProps): JSX.Element {
  const handeClickToChangeGenre = (evt: MouseEvent, genre: string) => {
    evt.preventDefault();
    setGenre(genre);
    setCountFilmShow(8);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((item) => (
        <li
          key={item}
          className={`catalog__genres-item ${
            currentGenre === item && 'catalog__genres-item--active'
          }`}
        >
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(evt) => handeClickToChangeGenre(evt, item)}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
