import { ChangeEvent, Fragment, useState, FormEvent} from 'react';
import { useNavigate } from 'react-router-dom';
import { HttpCode, MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH, RATING_STARS } from '../../consts';
import { addNewComment } from '../../services/api';
//import { errorHandle } from '../../services/error-handler';

type ReviewFormProps = {
  filmId: number;
};
function ReviewForm({ filmId }: ReviewFormProps): JSX.Element {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [disabledSubmitButton, setDisabledSubmitButton] = useState(true);
  const [disabledForm, setDisabledForm] = useState(false);
  const navigate = useNavigate();
  const checkValidationFormData = () => {
    if (
      rating > 0 &&
      review.length >= MIN_COMMENT_LENGTH &&
      review.length <= MAX_COMMENT_LENGTH
    ) {
      setDisabledSubmitButton(false);
    } else {
      setDisabledSubmitButton(true);
    }
  };
  const handeChangeRating = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
    checkValidationFormData();
  };

  const handeChangeCommentg = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
    checkValidationFormData();
  };

  const handeSubmitFormComment = (evt: FormEvent) => {
    evt.preventDefault();
    setDisabledForm(true);

    addNewComment(review, rating, 111111)
      .then((res) => {
        if (res?.status === HttpCode.Ok) {
          navigate(-1);
        }
        setDisabledForm(false);
      })
      .catch(() => {
        //errorHandle(error);
        setDisabledForm(false);
      });
  };
  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={handeSubmitFormComment}
    >
      <div className="rating">
        <div
          className="rating__stars"
          onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
            setRating(parseInt(value, 10))}
        >
          {RATING_STARS.map((value) => (
            <Fragment key={value}>
              <input
                onChange={(evt) => setRating(Number(evt.target.value))}
                className="rating__input"
                id={`star-${value}`}
                type="radio"
                name="rating"
                value={value}
                checked={value === rating}
                disabled={disabledForm}
              />
              <input
                onChange={handeChangeRating}
                className="rating__input"
                id={`star-${value}`}
                type="radio"
                name="rating"
                value={value}
                checked={value === rating}
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
          onChange={handeChangeCommentg}
          value={review}
          required
          minLength={50}
          maxLength={400}
          disabled={disabledForm}
        >
        </textarea>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={disabledSubmitButton || disabledForm}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
