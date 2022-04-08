type ShowMoreButtonProps = {
  countFilmShow: number;
  setCountFilmShow: (value: number) => void;
};

function ShowMoreButton({
  countFilmShow,
  setCountFilmShow,
}: ShowMoreButtonProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => setCountFilmShow(countFilmShow + 8)}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
