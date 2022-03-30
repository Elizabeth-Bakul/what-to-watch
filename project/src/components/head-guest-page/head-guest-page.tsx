/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import Header from '../header/header';

function HeadGuestPage(): JSX.Element {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img
          src="img/bg-the-grand-budapest-hotel.jpg"
          alt="The Grand Budapest Hotel"
        />
        <img src="img/bg-header.jpg" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />
    </section>
  );
}

export default HeadGuestPage;
