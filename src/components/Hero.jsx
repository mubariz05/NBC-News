import { useEffect, useState } from "react";
import "../styles/Hero.css";
import { fetchHeroArticle } from "../api/newsService";

const Hero = () => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetchHeroArticle().then((data) => setArticle(data.articles?.[0] || null));
  }, []);

  if (!article) return null;

  return (
    <aside className="aside">
      <img src={article.urlToImage || "/img/news-5.svg"} alt={article.title} />
      <div className="aside__body">
        <h2>Trending</h2>
        <h4 className="aside__title">{article.title}</h4>
        <p className="aside__text">{article.description}</p>
        <p className="asideTitleFooter">
          {new Date(article.publishedAt).toLocaleDateString()}{" "}
          <span className="time">
            By {article.author || article.source?.name} | 4min read
          </span>
        </p>
      </div>
    </aside>
  );
};

export default Hero;
