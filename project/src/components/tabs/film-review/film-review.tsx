import { Review } from '../../../types/review';
import ReviewCard from '../../review-card/review-card';
type FilmReviewsTabProps = {
  reviews: Review[];
};

function FilmReviewsTab({ reviews }: FilmReviewsTabProps): JSX.Element {


  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, Math.ceil(reviews.length / 2)).map((review) => (
          <ReviewCard review={review} key={review.id} />
        ))}
      </div>
      <div className="film-card__reviews-col">
        {reviews
          .slice(Math.ceil(reviews.length / 2), reviews.length)
          .map((review) => (
            <ReviewCard review={review} key={review.id} />
          ))}
      </div>
    </div>
  );
}

export default FilmReviewsTab;
