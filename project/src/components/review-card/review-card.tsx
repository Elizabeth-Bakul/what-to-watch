import { Review } from '../../types/review';
import dayjs from 'dayjs';

type ReviewCardProps = {
  review: Review;
};

function ReviewCard({ review }: ReviewCardProps): JSX.Element {

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={review.date}>
            {dayjs(review.date).format('MMMM D, YYYY')}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default ReviewCard;
