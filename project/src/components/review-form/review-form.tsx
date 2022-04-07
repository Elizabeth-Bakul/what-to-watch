import { ChangeEvent, Fragment, useState, FormEvent} from 'react';
import { useNavigate } from 'react-router-dom';
import { HTTP_CODE } from '../../consts';
import { addNewComment } from '../../services/api';

type ReviewFormProps = {
  filmId: number;
};
function ReviewForm({ filmId }: ReviewFormProps): JSX.Element {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const ratingStarsCount = [];
  const [disabledSubmitButton, setDisabledSubmitButton] = useState(true);
  const [disabledForm, setDisabledForm] = useState(false);
  const navigate = useNavigate();

  const checkValidationFormData = () => {
    if (rating > 0 && review.length >= 50) {
      setDisabledSubmitButton(false);
    } else {
      setDisabledSubmitButton(true);
    }
  };
  const changeRatingHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
    checkValidationFormData();
  };

  const changeCommentHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
    checkValidationFormData();
  };

  const submitFormCommentHandler = (evt: FormEvent) => {
    evt.preventDefault();
    setDisabledForm(true);

    addNewComment(review, rating, filmId)
      .then((res) => {
        if (res?.status === HTTP_CODE.OK) {
          navigate(-1);
        }

        setDisabledForm(false);
      })
      .catch(() => {
        setDisabledForm(false);
      });
  };

  for (let value = 1; value <= 10; value++) {
    ratingStarsCount.push(value);
  }
  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={submitFormCommentHandler}
    >
      <div className="rating">
        <div
          className="rating__stars"
          onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
            setRating(parseInt(value, 10))}
        >
          {ratingStarsCount.reverse().map((value) => (
            <Fragment key={value}>
              <input
                onChange={(evt) => setRating(Number(evt.target.value))}
                className="rating__input"
                id={`star-${value}`}
                type="radio"
                name="rating"
                value={value}
                checked={value === rating}
              />
              <input
                onChange={changeRatingHandler}
                className="rating__input"
                id={`star-${value}`}
                type="radio"
                name="rating"
                value={value}
                checked={value === rating}
                disabled={disabledForm && true}
              />
              <label className="rating__label" htmlFor={`star-${value}`}>
                Rating {value}
              </label>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={changeCommentHandler}
          value={review}
          required
          minLength={50}
          maxLength={400}
          disabled={disabledForm && true}
        >
        </textarea>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={(disabledSubmitButton || disabledForm) && true}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
