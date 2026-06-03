import { useEffect, useState } from "react";
import "../styles/BreakingNews.css";
import { fetchBreakingNews } from "../api/newsService";
import Loader from "./Loader";

const BreakingNews = () => {
  const [articles, setArticles] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchBreakingNews().then((data) => setArticles(data.articles || []));
  }, []);

  useEffect(() => {
    if (articles.length === 0) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % articles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [articles]);

  const current = articles[index];

  return (
    <div className="breakingNews">
      <span className="breaking__label">Breaking News</span>
      <p className="breaking__text">{current ? current.title : <Loader />}</p>
    </div>
  );
};

export default BreakingNews;
