import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="leftSide">
          <img src="/img/footer-logo.png" alt="logo" className="footerLogo" />
          <span>copyright© 2020 | NBC NEWS</span>
        </div>
        <div className="footerMain">
          Privacy Policy <br />
          Do not sell my personal info <br />
          Terms of Service <br />
          nbcnews.com Site Map
        </div>
        <div className="rightSide">
          <div className="footerLinks">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
            <a href="#">Coupons</a>
          </div>
          <div className="footerSocial">
            <img src="./icons/wifi.svg" alt="wifi" />
            <img src="./icons/twitter.svg" alt="twitter" />
            <img src="./icons/reddit.svg" alt="reddit" />
            <img src="./icons/facebook.svg" alt="facebook" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
