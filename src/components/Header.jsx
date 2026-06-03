import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__logo">
          <img src="icons/logo.svg" alt="news-logo" />
        </div>

        <nav className="header__navbar">
          <ul className="header__list">
            <li className="liveLink">
              <span className="liveCircle"></span>
              <a href="/corona">Corona Updates</a>
            </li>
            <li>
              <a href="/politics">Politics</a>
            </li>
            <li>
              <a href="/business">Business</a>
            </li>
            <li>
              <a href="/sports">Sports</a>
            </li>
            <li>
              <a href="/world">World</a>
            </li>
            <li>
              <a href="/travel">Travel</a>
            </li>
            <li>
              <a href="/podcasts">Podcasts</a>
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
