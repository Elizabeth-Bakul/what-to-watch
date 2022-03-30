import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import Footer from '../footer/footer';

function NotFoundPage(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head"></header>
      <div className="page-title">
        <h1 className="page-title user-page__title">404 - Not Found!</h1>
        <Link to={AppRoute.Main} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
