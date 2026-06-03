import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__logo">
          <Link to="/">
            <img src="/icons/logo.svg" alt="news-logo" />
          </Link>
        </div>

        <nav className="header__navbar">
          <ul className="header__list">
            <li className="liveLink">
              <span className="liveCircle"></span>
              <a href="#">Corona Updates</a>
            </li>
            <li>
              <a href="#">Politics</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Sports</a>
            </li>
            <li>
              <a href="#">World</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Podcasts</a>
            </li>
          </ul>
          <img src="/icons/arrow.svg" alt="arrow" />
        </nav>

        <div className="headerActions">
          <img src="/icons/user.svg" alt="user" />
          <img src="/icons/search.svg" alt="search" />
          <img src="/icons/burger-menu.svg" alt="burger-menu" />
        </div>
      </div>
    </header>
  );
};

export default Header;
