import { useEffect, useState } from 'react';
import { FavoriteAddOrRemove } from '../../consts';
import { checkFavoriteOrNot } from '../../helpers-funstion';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addFavoriteAction } from '../../store/api-action';
import { FilmDes } from '../../types/film';
type AddMyListBottonProps = {
  film: FilmDes;
};

function AddMyListBotton({ film }: AddMyListBottonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { favoriteList } = useAppSelector((state) => state.FAVORITE);
  const [typeFavoriteAction, setTypeFavoriteAction] =
    useState<FavoriteAddOrRemove>(FavoriteAddOrRemove.Add);
  useEffect(() => {
    if (film) {
      if (checkFavoriteOrNot(film, favoriteList)) {
        setTypeFavoriteAction(FavoriteAddOrRemove.Remove);
      } else {
        setTypeFavoriteAction(FavoriteAddOrRemove.Add);
      }
    }
  }, [favoriteList, film]);
  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={() =>
        dispatch(
          addFavoriteAction({
            filmId: film.id,
            type: typeFavoriteAction,
          }),
        )}
    >
      {typeFavoriteAction ? (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      ) : (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
      )}
      <span>My list</span>
    </button>
  );
}
export default AddMyListBotton;
