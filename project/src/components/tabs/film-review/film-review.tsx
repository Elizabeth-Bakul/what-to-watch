import { Review } from '../../../types/review';
import ReviewCard from '../../review-card/review-card';
type FilmReviewsTabProps = {
  reviews: Review[];
};

function FilmReviewsTab({ reviews }: FilmReviewsTabProps): JSX.Element {
  const sortedReviews = reviews.sort((a, b) => (a.rating > b.rating ? -1 : 1));

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {sortedReviews
          .map((item) => <ReviewCard review={item} key={item.id} />)
          .splice(0, reviews.length / 2)}
      </div>
      <div className="film-card__reviews-col">
        {sortedReviews
          .map((item) => <ReviewCard review={item} key={item.id} />)
          .splice(reviews.length / 2)}
      </div>
    </div>
  );
}

export default FilmReviewsTab;
