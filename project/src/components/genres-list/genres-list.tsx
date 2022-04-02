/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { updateGenre } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';

type CatalogGenresListProps = {
  genres: string[];
};
function GenresList({ genres }: CatalogGenresListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector((state) => state.genre);
  return (
    <>
      {genres.map((item) => (
        <li key={ item } onClick={() => dispatch(updateGenre(item))} className={`catalog__genres-item ${item === currentGenre ? ' catalog__genres-item--active' : ''}`}>
          <Link to={''} className="catalog__genres-link">{item}</Link>
        </li>
      ))}
    </>
  );
}

export default GenresList;
