import { useEffect, useState } from 'react';
import { getFilmComments } from '../../../services/api';
import { Review } from '../../../types/review';
import LoadingScreen from '../../loading-screen/loading-screen';
import ReviewCard from '../../review-card/review-card';
type FilmReviewsTabProps = {
  filmId: number;
};

function FilmReviewsTab({ filmId }: FilmReviewsTabProps): JSX.Element {
  const [reviews, setComments] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getFilmComments(filmId).then((data) => {
      setComments(data);
      setLoading(false);
    });
  }, [filmId]);
  if (loading) {
    return <LoadingScreen />;
  }
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
