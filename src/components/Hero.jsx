import "../styles/Hero.css";

const Hero = () => {
  return (
    <aside className="aside">
      <img src="/img/news-5.svg" alt="news5" />
      <div className="aside__body">
        <h2>Trending</h2>
        <h4 className="aside__title">
          Cake meme reflects coronavirus absurdity in a world where nothing is
          what it seems
        </h4>
        <p className="aside__text">
          Earlier this month, a viral video depicting hyper-realistic cakes as
          everyday items had folks on social media double-guessing every other
          post, and sometimes even their own realities, effectively launching
          the next meme: "Is this real or is this cake?"
        </p>
        <p className="asideTitleFooter">
          2 hours ago{" "}
          <span className="time">By Lucy Hiddleston | 4min read</span>
        </p>
      </div>
    </aside>
  );
};

export default Hero;
