/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from '../logo/logo';
function Header(): JSX.Element {
  return (
    <header className="page-header film-card__head">

      <Logo/>
      <nav className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <a href="film-page.html" className="breadcrumbs__link">
              The Grand Budapest Hotel
            </a>
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link">Add review</a>
          </li>
        </ul>
      </nav>

      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img
              src="img/avatar.jpg"
              alt="User avatar"
              width="63"
              height="63"
            />
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
